'uses strict';

///////////////////
// Classes
///////////////////
var Person = function(aName, aBet, aPriority) {
    // console.log(encodeURIComponent(aName));
    var name = aName;
    var bet = aBet;
    var priority = aPriority;
    var winDayRates = 0;

    this.getBet = function() {
        return bet;
    };

    this.getName = function() {
        return aName;
    };

    this.getPriority = function() {
        return priority;
    };

    this.getWinDaysNumber = function() {
        return winDayRates;
    };

    this.increaseWinDayRates = function() {
        winDayRates++;
    };
};

var DayRate = function(n, aDate, aRate) {
    var dayN = n;
    var date = aDate;
    var rate = aRate;
    var person;

    this.setWinner = function(aPerson) {
        person = aPerson;
    };

    this.getWinner = function() {
        return person;
    };

    this.getRate = function() {
        return rate;
    };

    this.toString = function() {
        return dayN;
    }
};

var bets = [
    new Person('Ponomarenko Anton', 8, 20),
    new Person('Nikita Kostiuk', 26.05, 14),
    new Person('Alex Sholokh', 26.65, 7),
    new Person('Yevhenii Tsybaiev', 26.67, 1),
    new Person('Masha Verba', 26.77, 18),
    new Person('Olena Trofimchuk', 26.87, 17),
    new Person('Dmytro Zheliuk', 27.02, 9),
    new Person('Мария Круть', 27.29, 19),
    new Person('Kate Bogachenko', 27.35, 11),
    new Person('Sergii Krut', 27.58, 10),
    new Person('Надія Авраменко', 28.07, 6),
    new Person('Valentin Smyrnov', 28.17, 5),
    new Person('Oleksandr Sergyeyev', 28.22, 2),
    new Person('Yuliia Burtseva', 29.29, 3),
    new Person('Арсений Василенко', 29.50, 4),
    new Person('Galina Bogachenko', 29.99, 20),
    new Person('Олег Курило', 30.00, 13),
    new Person('Sergii Pokhvala', 30.31, 8),
    new Person('Alexey Gurov', 35.00, 16),
    new Person('Алексей Авраменко', 39.85, 15)
];

var nbuRates = [
    new DayRate(1, new Date(2017, 2, 15), 27.230462),
    new DayRate(2, new Date(2017, 2, 16), 26.993603),
    new DayRate(3, new Date(2017, 2, 17), 26.988684),
    new DayRate(4, new Date(2017, 2, 20), 27.026138),
    new DayRate(5, new Date(2017, 2, 21), 27.025299),
    new DayRate(6, new Date(2017, 2, 22), 27.042536),
    new DayRate(7, new Date(2017, 2, 23), 26.972870),
    new DayRate(8, new Date(2017, 2, 24), 26.906286),
    new DayRate(9, new Date(2017, 2, 27), 26.976569),
    new DayRate(10, new Date(2017, 3, 28), 27.053672),
    new DayRate(11, new Date(2017, 3, 01), 27.163714),
    new DayRate(12, new Date(2017, 3, 02), 27.180639),
    new DayRate(13, new Date(2017, 3, 03), 27.091316),
    new DayRate(14, new Date(2017, 3, 06), 27.119249),
    new DayRate(15, new Date(2017, 3, 07), 27.021320),
    new DayRate(16, new Date(2017, 3, 09), 26.959467),
    new DayRate(17, new Date(2017, 3, 10), 26.908632),
    new DayRate(18, new Date(2017, 3, 13), 26.810151),
    new DayRate(19, new Date(2017, 3, 14), 26.894568),
    new DayRate(20, new Date(2017, 3, 15), 26.904296),
    new DayRate(21, new Date(2017, 3, 16), 26.880768),
    new DayRate(22, new Date(2017, 3, 17), 26.979001),
    new DayRate(23, new Date(2017, 3, 20), 26.909264),
    new DayRate(24, new Date(2017, 3, 21), 26.887865),
    new DayRate(25, new Date(2017, 3, 22), 26.851060),
    new DayRate(26, new Date(2017, 3, 23), 26.919904),
    new DayRate(27, new Date(2017, 3, 24), 27.057689),
    new DayRate(28, new Date(2017, 3, 27), 27.124559),
    new DayRate(29, new Date(2017, 3, 28), 27.153547),
    new DayRate(30, new Date(2017, 3, 29), 27.120665),
    new DayRate(31, new Date(2017, 3, 30), 27.040107),
    new DayRate(32, new Date(2017, 3, 31), 26.976058),
    new DayRate(33, new Date(2017, 4, 3), 27.021745),
    new DayRate(34, new Date(2017, 4, 4), 27.024639),
    new DayRate(35, new Date(2017, 4, 5), 27.118953),
    new DayRate(36, new Date(2017, 4, 6), 27.157009),
    new DayRate(37, new Date(2017, 4, 7), 27.100326),
    new DayRate(38, new Date(2017, 4, 10), 26.973995),
    new DayRate(39, new Date(2017, 4, 11), 26.933241),
    new DayRate(40, new Date(2017, 4, 12), 26.893785),
    new DayRate(41, new Date(2017, 4, 13), 26.875671),	
    new DayRate(42, new Date(2017, 4, 14), 26.864209),	
    new DayRate(43, new Date(2017, 4, 18), 26.812058),	
    new DayRate(44, new Date(2017, 4, 19), 26.844959),	
    new DayRate(45, new Date(2017, 4, 20), 26.787082),	
    new DayRate(46, new Date(2017, 4, 21), 26.756734),	
    new DayRate(47, new Date(2017, 4, 24), 26.732780),	
    new DayRate(48, new Date(2017, 4, 25), 26.673697),
    new DayRate(49, new Date(2017, 4, 26), 26.631832),	
    new DayRate(50, new Date(2017, 4, 27), 26.588876),	
    new DayRate(51, new Date(2017, 4, 28), 26.551453),	
    new DayRate(52, new Date(2017, 5, 3), 26.560930),
    new DayRate(53, new Date(2017, 5, 4), 26.523425),
    new DayRate(54, new Date(2017, 5, 5), 26.485778),
    new DayRate(55, new Date(2017, 5, 10), 26.509341),
    new DayRate(56, new Date(2017, 5, 11), 26.455859),
    new DayRate(57, new Date(2017, 5, 12), 26.428930),
    new DayRate(58, new Date(2017, 5, 13), 26.474312),
    new DayRate(59, new Date(2017, 5, 15), 26.474312),
    new DayRate(60, new Date(2017, 5, 16), 26.471947),
    new DayRate(61, new Date(2017, 5, 17), 26.433401),
    new DayRate(62, new Date(2017, 5, 18), 26.417446),
    new DayRate(63, new Date(2017, 5, 19), 26.393442),
    new DayRate(64, new Date(2017, 5, 22), 26.369659),
    // to be continued ...
];

/**
 * Calculates a day winner
 * @param {Person[]}
 * @param {DayRate}
 */
function getDayWinner(bets, DayRate) {
    var betDiff = 100;
    var winner = null;

    for(var i in bets) {
        var tempRateDiff = Math.abs(bets[i].getBet() - DayRate.getRate());
        if (tempRateDiff < betDiff) {
            betDiff = tempRateDiff;
            winner = bets[i];
        } else if (tempRateDiff === betDiff) {
            if (winner && winner.getPriority() > bets[i].getPriority()) {
                betDiff = tempRateDiff;
                winner = bets[i];
            }
        }
    }

    return winner;
}

/** Required for building appropriate graph */
var GraphOptions = {
    // float variables to store the min/max rate, during the bets.
    minRate : 0,
    maxRate : 0,
    // main graph is building in the gaps: [(minRate - delta), ... , (maxRate + delta)]
    delta : 1
}
/**
 * @param {GraphOptions} go - Graph options
 * @param {DayRate[]} nbuRates - all the NBU rates
 */
function calculateMinMaxRate(go, rates) {
    if (rates.length > 0) {
        go.minRate = rates[0].getRate();
        go.maxRate = rates[0].getRate();
    } 
    for (let i = 1; i < rates.length; i++) {
        if (rates[i].getRate() < go.minRate) {
            go.minRate = rates[i].getRate();
        }
        if (rates[i].getRate() > go.maxRate) {
            go.maxRate = rates[i].getRate();
        }
    }
}

///////////////////
// MAIN
///////////////////

console.log('_________Day Winners______________');
for (var i in nbuRates) {
    var person = getDayWinner(bets, nbuRates[i]);
    person.increaseWinDayRates();

    if (i == (nbuRates.length - 1)) {
        console.log('Current winner:  ' + person.getName() + ' Bet = ' + person.getBet() + '; Real Rate = ' + nbuRates[i].getRate());
    }
}

console.log('_________Total Day wins______________');
for (var i in bets) {
    // TODO add sort:
    if (bets[i].getWinDaysNumber() > 0) {
        console.log(bets[i].getName() + '; wins = ' + bets[i].getWinDaysNumber())
    }
}

///////////////////
// CHARTS
///////////////////
calculateMinMaxRate(GraphOptions, nbuRates);
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(function() {
    drawLineChart();
    drawPieChart();
});

function drawLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Y');
    data.addColumn('number', 'NBU Rate');

    // determining the bets to be on the graph
    let betsOnGraph = [];
    for (let i = bets.length - 1; i >= 0; i--) {
        if ((GraphOptions.minRate - GraphOptions.delta) < bets[i].getBet() && 
            (GraphOptions.maxRate + GraphOptions.delta) > bets[i].getBet()) 
        {
            betsOnGraph.push(bets[i]);
        }
    }

    for (let i in betsOnGraph) {
        data.addColumn('number', betsOnGraph[i].getName());
    }     

    for (let i in nbuRates) {
        var dataSet = [parseInt(i), nbuRates[i].getRate()];
        for (let j in betsOnGraph) {
            dataSet.push(parseFloat(betsOnGraph[j].getBet()));
        }
        data.addRow(dataSet);
    }

    var options = {
        hAxis: {
            title: 'Days'
        },
        vAxis: {
            title: 'Rate & Bet',
            // ticks: [25, 26, 27, 28],
            //maxValue: (GraphOptions.maxRate + GraphOptions.delta),
            //minValue: (GraphOptions.minRate - GraphOptions.delta)
        },
        
        // width: 800,
        height: 800
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'name');
    data.addColumn('number', 'wins');

    for(let i=0; i < bets.length; i++) {
        if (bets[i].getWinDaysNumber() > 0) {
            data.addRow([bets[i].getName(), bets[i].getWinDaysNumber()]);
        }
    }

    var options = {
        title: 'Total Win days',

        width: 800,
        height: 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    chart.draw(data, options);

}

