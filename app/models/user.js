import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    jobTitle: DS.attr('string'),
    phoneNumber: DS.attr('string')
});
