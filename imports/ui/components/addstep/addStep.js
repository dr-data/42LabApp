import { Steps } from '/imports/api/steps/steps.js';
import { Meteor } from 'meteor/meteor';
import './addStep.html';

Template.addStep.onCreated(function () {
  Meteor.subscribe('steps.all');
});



Template.addStep.events({
  'submit .addStep-step-add'(event) {
    event.preventDefault();

    const target = event.target;
    const step = target.step;
    const description = target.description;
    const graph = target.graph;

    Meteor.call('steps.insert', step.value, description.value, graph.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        step.value = '';
        description.value = '';
        graph.value = '';
      }
    });
  },
});

Template.addStep.helpers({
  steps() {
    return Steps.find({});
  },
});