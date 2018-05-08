import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      parent: this.get("store").createRecord("parent"),
      children: [
        this.get("store").createRecord("child", {name: "Adam"}),
        this.get("store").createRecord("child", {name: "Ben"}),
        this.get("store").createRecord("child", {name: "Cibernox"})
      ]
    });
  }
});
