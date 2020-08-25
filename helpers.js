// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// Some details about the site
exports.siteName = `Now That's Delicious!`;

exports.menu = [
  { slug: '/stores', title: 'Stores', icon: 'store', alt: 'Stores'},
  { slug: '/tags', title: 'Tags', icon: 'tag', alt: 'Tags'},
  { slug: '/top', title: 'Top', icon: 'top', alt: 'Top places'},
  { slug: '/add', title: 'Add', icon: 'add', alt: 'Add new place'},
  { slug: '/map', title: 'Map', icon: 'map', alt: 'View map'},
];