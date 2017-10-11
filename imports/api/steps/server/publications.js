// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Steps } from '../steps.js';

Meteor.publish('steps.all', function () {
  return Steps.find();
});


