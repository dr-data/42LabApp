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
    const title = target.title;
    const url = target.url;

    Meteor.call('steps.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});

Template.addStep.helpers({
  steps() {
    return Steps.find({});
  },
});