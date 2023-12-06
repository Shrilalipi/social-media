// Initializes the `upload` service on path `/upload`
import { ServiceAddons } from '@feathersjs/feathers';
import moment from 'moment';
import multer from 'multer';
import fs from 'fs';
import { Application } from '../../declarations';
import { Upload } from './upload.class';
import hooks from './upload.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'upload': Upload & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  const checkAndCreateDirectory = (path: fs.PathLike, success: { (): void; (): void; (): void }) => {
    fs.stat(path, (error) => {
      if (error)
        fs.mkdir(path, () => {
          success();
        });
      else success();
    });
  };
  const storage = multer.diskStorage({
    destination: (_req: any, _file: any, cb: (arg0: null, arg1: string) => void) => {
      const folder1 = moment(new Date()).format('YYYY');
      const folder2 = moment(new Date()).format('MMDD');
      let path = `public/uploads/${folder1}`;
      checkAndCreateDirectory(path, () => {
        path = `${path}/${folder2}`;
        checkAndCreateDirectory(path, () => {
          cb(null, path);
        });
      });
    },
    filename: (_req: any, file: any, cb: (arg0: null, arg1: string) => void) =>
      cb(null, Date.now() + file.originalname),
  });
  const upload = multer({ storage: storage }).any();

  // Initialize our service with any options it requires
  app.use('/upload',
    function (
      req: any,
      res: any,
      next: () => void,
    ) {
      upload(req, res, function (err: { toString: () => any }) {
        //console.log('/////////',err);
        if (err instanceof multer.MulterError) {
          req.body = {
            result: false,
            message: err.toString(),
          };
        } else if (err) {
          req.body = {
            result: false,
            message: err.toString(),
          };
        } else {
          //console.log('-------------',req.files);
          const host = req.feathers.headers.host;
          if (req.files && req.files.length > 0) {
            const files = req.files.map(
              (each: any) =>
              (each.path = `${host.toString().startsWith('https') ? 'https' : 'http'
                }://${host}/${each.path.replace(
                  `${each.path.includes('public/uploads') ? 'public/uploads' : 'public\\uploads'}`,
                  'uploads',
                )}`),
            );
            req.body = {
              result: true,
            };
            if (files.length === 1) req.body.path = files[0];
            else req.body.path = files;
          } else {
            req.body = {
              result: false,
              message: 'Please Upload Some Files',
            };
          }
        }
        next();
      });
    }, new Upload(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
}
