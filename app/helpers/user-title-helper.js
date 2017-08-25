import Ember from 'ember';

export function userTitleHelper([title]) {
  return "Title" + title;
}

export default Ember.Helper.helper(userTitleHelper);
