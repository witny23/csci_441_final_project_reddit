import React from 'react';
import { render } from 'react-dom'; 
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import {UP_Collection_Access}
        from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.startup(() =>  {

  Tracker.autorun(() => {

    let allPostsInDB = UP_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
    let title = '441 final project';

    render(<App
        passedPropTitle={title}
        passedPropModerator={'Hopper'}
        passedPropAllPosts={allPostsInDB}
      />, document.getElementById('content'));

  });

});
