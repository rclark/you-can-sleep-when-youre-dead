#!/usr/bin/env node

var huzzah = require('..');

huzzah(process.argv[2], process.argv[3], function(err) {
  if (err) throw err;
});
