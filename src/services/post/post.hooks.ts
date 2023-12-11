import { HooksObject } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import SetCreatedBy from '../../hooks/SetCreatedBy';
import FRequired from '../../hooks/FRequired';
import SetDefaultItem from '../../hooks/SetDefaultItem';
import { disallow, keep } from 'feathers-hooks-common';
import SetCreatedByQuery from '../../hooks/SetCreatedByQuery';
import PatchDeleted from '../../hooks/PatchDeleted';
import SetDefaultQuery from '../../hooks/SetDefaultQuery';
import UpdatePostOnSocialMedia from './hooks/UpdatePostOnSocialMedia';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate('jwt')],
    find: [SetDefaultQuery('status', 1)],
    get: [SetDefaultQuery('status', 1)],
    create: [
      SetCreatedBy(),
      FRequired(['attachment', 'caption']),
      SetDefaultItem('status', 1)
    ],
    update: [disallow()],
    patch: [SetCreatedByQuery(), keep('caption')],
    remove: [SetCreatedByQuery(), PatchDeleted()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [UpdatePostOnSocialMedia()],
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
