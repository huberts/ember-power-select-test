import DS from 'ember-data';

export default DS.Model.extend({
  // child: DS.attr()
  child: DS.belongsTo("child")
});
