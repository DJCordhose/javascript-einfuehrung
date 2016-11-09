/* @flow */

function percentile(values, percentile) {
    if (percentile < 1 || percentile > 99) {
        throw new Error("Percentile must be between 1 and 99");
    }
    var sortedValues = values.sort();
    var onePercentile = sortedValues.length / 100.0;
    var percentileIndex = Math.abs(percentile * onePercentile);
    var value = sortedValues[percentileIndex];
    return value;
}

function median(values) {
    return percentile(values, 50);
}

export {percentile, median};