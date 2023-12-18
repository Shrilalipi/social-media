import { HooksObject } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import FRequiredQuery from '../../hooks/FRequiredQuery';
import SetDefaultQuery from '../../hooks/SetDefaultQuery';
import { disallow, keep } from 'feathers-hooks-common';
import SetCreatedBy from '../../hooks/SetCreatedBy';
import FRequired from '../../hooks/FRequired';
import SetDefaultItem from '../../hooks/SetDefaultItem';
import SetCreatedByQuery from '../../hooks/SetCreatedByQuery';
import PatchDeleted from '../../hooks/PatchDeleted';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate('jwt')],
    find: [FRequiredQuery('post'), SetDefaultQuery('status', 1)],
    get: [disallow()],
    create: [SetCreatedBy(), FRequired(['post', 'comment', 'mediaId', 'accessToken', 'pageFeedId']), SetDefaultItem('status', 1)],
    update: [disallow()],
    patch: [SetCreatedByQuery(), keep('comment')],
    remove: [SetCreatedByQuery(), PatchDeleted()]
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
