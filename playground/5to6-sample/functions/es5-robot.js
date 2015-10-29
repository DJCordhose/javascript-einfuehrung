const sumRobot = {
    threshold: 4, sum: function (numbers) {
        var that = this;
        var reduceFunc = function (reduced, current) {
                return current > that.threshold ?
                    (reduced + current) :
                    reduced;
            }
            ;
        return numbers.reduce(reduceFunc, 0);
    }
};

const sums = sumRobot.sum([3, 4, 5, 6]);
console.log(sums);