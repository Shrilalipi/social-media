import { HooksObject } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import FRequired from '../../hooks/FRequired';
import { disallow, iff } from 'feathers-hooks-common';
import hasData from '../../utils/hasData';
import { AuthStrategies } from './interfaces/AuthenticationInterface';
import handleSocialMediaLogin from './utils/handleSocialMediaLogin';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [disallow()],
    get: [disallow()],
    create: [
      FRequired(['strategy', 'accessToken']),
      iff(
        hasData(
          'strategy',
          AuthStrategies.FACEBOOK,
          AuthStrategies.INSTAGRAM,
        ),
        handleSocialMediaLogin()
      ).else(disallow())
    ],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
