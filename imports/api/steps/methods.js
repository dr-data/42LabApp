// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Steps } from './steps.js';

Meteor.methods({
  'steps.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Steps.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
