import Ember from 'ember';

const communitPropertyTypes = [
	'Condo',
	'Townhouse',
	'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
	if (communitPropertyTypes.includes(type)) {
		return 'Community';
	}

	return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
