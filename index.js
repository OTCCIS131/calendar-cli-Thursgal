const _ = require('lodash');
const chalk = require('chalk');
const Moment = require('moment');
const MomentRange = require('moment-range');
 
const moment = MomentRange.extendMoment(Moment);

var dayValue;
var daysArray = [];
var date = moment();
var range = date.range('year');
let dow=['   S ', 'M ', 'T ', 'W ', 'Th', 'F', 'S'];

for (let month of range.by('month')) {
  console.log(month.format('MMMM'));
  switch(month.format('dddd')) {
    case 'Sunday':
        break;
    case 'Monday':
        for (i = 0; i < 1; i++)
            daysArray.push('  ');
        break;
    case 'Tuesday':
        for (i = 0; i < 2; i++)
            daysArray.push('  ');
        break;
    case 'Wednesday':
        for (i = 0; i < 3; i++)
            daysArray.push('  ');
        break;
    case 'Thursday':
        for (i = 0; i < 4; i++)
            daysArray.push('  ');
        break;
    case 'Friday':
        for (i = 0; i < 5; i++)
            daysArray.push('  ');
        break;
    case 'Saturday':
        for (i = 0; i < 6; i++)
            daysArray.push('  ');
        break;
    default:
        break;
    }
  var nRange = date.range('month');
    for (let day of nRange.by('day')) {
        daysArray.push(day.format('DD'));
    }
    displayArray = _.chunk(daysArray, 7);
    console.log(dow);
    console.log(displayArray);
    daysArray = [];
}