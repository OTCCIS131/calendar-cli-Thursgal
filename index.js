const _ = require('lodash');
const chalk = require('chalk');
const Moment = require('moment');
const MomentRange = require('moment-range');
 
const moment = MomentRange.extendMoment(Moment);

const date = moment();
const range = date.range('year');
let dow=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let month of range.by('month')) {
  console.log(month.format('MMMM dddd'));
    for (let day of range.by('day')) {
        console.log(day.format('dd'));
    }
    console.log('END OF MONTH');
}