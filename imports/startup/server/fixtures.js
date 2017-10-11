// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Steps } from '../../api/steps/steps.js';

Meteor.startup(() => {
  // if the Links collection is empty
  // if (Links.find().count() === 0) {
  //   const data = [
  //     {
  //       title: 'Do the Tutorial',
  //       url: 'https://www.meteor.com/try',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Follow the Guide',
  //       url: 'http://guide.meteor.com',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Read the Docs',
  //       url: 'https://docs.meteor.com',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Discussions',
  //       url: 'https://forums.meteor.com',
  //       createdAt: new Date(),
  //     },
  //   ];

  //   data.forEach(link => Links.insert(link));
  // }

  if (Steps.find().count() === 0) {
    const data = [
      {
        step: 1,
        description: "Fill up cup # 1 with water",
        //graph: 'freddy@example.com'
      },
      {
        step: 2,
        description: "Transfer 3 tbsp of that water into cup #2",
        //graph: 'freddy@example.com'
      },
      {
        step: 3,
        description: "Add ¼ tsp of salt and stir until dissolved",
        //graph: 'freddy@example.com'
      },
      {
        step: 4,
        description: "Put the cup aside",
        //graph: 'freddy@example.com'
      },
      {
        step: 5,
        description: "Get the ziplock and put your fruit in (1 strawberry or ⅓ of banana)",
        //graph: 'freddy@example.com'
      },
      {
        step: 6,
        description: "Smash the fruit gently until it becomes soft",
        //graph: 'freddy@example.com'
      },
      {
        step: 7,
        description: "Transfer the solution in cup #2 into the ziplock",
        //graph: 'freddy@example.com'
      },
      {
        step: 8,
        description: "Gently mash until you make a soft paste",
        //graph: 'freddy@example.com'
      },
      {
        step: 9,
        description: "Place the paper filter on the clear cup, open your ziplock bag and pour the fruit mash through the filter into the clear cup",
        //graph: 'freddy@example.com'
      },
      {
        step: 10,
        description: "Gently squeeze the liquid inside the filter paper to get remaining liquid out",
        //graph: 'freddy@example.com'
      },
      {
        step: 11,
        description: "Once the liquid has passed through the filter and collected in the clear cup, discard the filter paper",
        //graph: 'freddy@example.com'
      },
      {
        step: 12,
        description: "Add a drop or two of a hand soap",
        //graph: 'freddy@example.com'
      },
      {
        step: 13,
        description: "Hold the cup in one hand, tilt to 45 degrees, pour alcohol on top",
        //graph: 'freddy@example.com'
      },
      {
        step: 14,
        description: "Put the cup back on the table",
        //graph: 'freddy@example.com'
      },
      {
        step: 15,
        description: "Wait 2-3 minutes",
        //graph: 'freddy@example.com'
      },
      {
        step: 16,
        description: "Observe the DNA strands and fragments; they are like cotton strands floating on the solution.",
        //graph: 'freddy@example.com'
      },
      {
        step: 17,
        description: "You can take them out with a plastic pipette",
        //graph: 'freddy@example.com'
      },
    ];

    data.forEach(step => Steps.insert(step));
  }

});
