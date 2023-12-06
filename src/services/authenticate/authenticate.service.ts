// Initializes the `authenticate` service on path `/authenticate`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Authenticate } from './authenticate.class';
import hooks from './authenticate.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'authenticate': Authenticate & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/authenticate', new Authenticate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('authenticate');

  service.hooks(hooks);
}
