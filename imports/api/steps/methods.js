// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Steps } from './steps.js';

Meteor.methods({
  'steps.insert'(step, description, graph) {
    check(description, String);
    check(step, String);
    check(graph, String);

    return Steps.insert({
      description,
      step,
      graph,
      createdAt: new Date(),
    });
  },
});
