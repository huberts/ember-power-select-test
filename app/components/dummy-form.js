import Component from '@ember/component';
import Changeset from 'ember-changeset';

export default Component.extend({

  validations: {},

  init() {
    this._super(...arguments);
    this.set("changeset", new Changeset(this.get("parent")));
  },

  actions: {
    submit() {
      this.get("changeset").execute();
    }
  }
});
