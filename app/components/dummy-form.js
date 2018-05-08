import Component from '@ember/component';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

export default Component.extend({

  validations: {},

  init() {
    this._super(...arguments);
    this.set("changeset", new Changeset(this.get("parent"), lookupValidator(this.get("validations"), this.get("validations"))));
  },

  actions: {
    submit() {
      this.get("changeset").execute();
    }
  }
});
