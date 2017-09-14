var _ = require('lodash');
var chalk = require('chalk');
var Moment = require('moment');
var MomentRange = require('moment-range');
 
var moment = MomentRange.extendMoment(Moment);

var dayValue;


var display;
var paddedDays = [];
var daysArray = [];
var date = moment();
var range = date.range('year');

let dow=['S', 'M', 'T', 'W', 'Th', 'F', 'S'];

for (let month of range.by('month')) {
    console.log(_.pad(month.format('MMMM'), 26, '-'));


    daysArray = Array.from(month.range('month').by('days'));
    paddedDays = _.map(daysArray, day => {
        date = day.date();
        if (day.month() == 8 && day.date() == 10) {
            date = chalk.red(date);
        }
        else if (day.month() == 9 && day.date() == 30) {
            date = chalk.blue(date);
        }
        return _.padEnd(date, 2, ' ');
    })

    for (i = 0; i < month.day(); i++) {
        paddedDays.unshift('  ');
    }

    console.log("S   M   T   W   Th  F   S");
    paddedDays = _.chunk(paddedDays, 7);
    paddedDays.forEach(week => {console.log(week.join("  "))})


    
    console.log();
    daysArray = [];
}