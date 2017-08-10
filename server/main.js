import { Meteor } from 'meteor/meteor';
import '/imports/api/items';
import FacebookOAuthInit from './imports/oauth-facebook';

Meteor.startup(() => {
  // code to run on server at startup
  // FacebookOAuthInit();
});
