export function membershipFunction(value, a, b, c, d) {
    if (value <= a || value >= d) return 0;
    if (value >= b && value <= c) return 1; // Nilai puncak
    if (value > a && value < b) return (value - a) / (b - a); // Naik
    if (value > c && value < d) return (d - value) / (d - c); // Turun
    return 0;
}

export function fuzzify(voltage, ampere, kwh) {
    return {
        voltage: {
            veryLow: membershipFunction(voltage, 0, 40, 60, 100),
            low: membershipFunction(voltage, 60, 100, 150, 200),
            normal: membershipFunction(voltage, 150, 200, 250, 300),
            high: membershipFunction(voltage, 250, 350, 400, 450),
        },
        ampere: {
            veryLow: membershipFunction(ampere, 0, 5, 10, 20),
            low: membershipFunction(ampere, 10, 20, 30, 50),
            normal: membershipFunction(ampere, 30, 50, 70, 80),
            high: membershipFunction(ampere, 70, 80, 90, 100),
        },
        kwh: {
            veryLow: membershipFunction(kwh, 0, 80, 150, 200),
            low: membershipFunction(kwh, 150, 250, 350, 450),
            normal: membershipFunction(kwh, 350, 500, 650, 800),
            high: membershipFunction(kwh, 700, 800, 900, 1000),
        },
    };
}

export function infer(voltage, ampere, kwh) {
    const fuzzy = fuzzify(voltage, ampere, kwh);

    const notEfficient = Math.max(
        Math.min(fuzzy.voltage.veryLow, fuzzy.ampere.high, fuzzy.kwh.high),
        Math.min(fuzzy.voltage.low, fuzzy.ampere.high, fuzzy.kwh.high),
        Math.min(fuzzy.voltage.normal, fuzzy.ampere.high, fuzzy.kwh.high),
        Math.min(fuzzy.voltage.low, fuzzy.ampere.normal, fuzzy.kwh.high)
    );
    
    const moderatelyEfficient = Math.max(
        Math.min(fuzzy.voltage.normal, fuzzy.ampere.normal, fuzzy.kwh.normal),
        Math.min(fuzzy.voltage.high, fuzzy.ampere.high, fuzzy.kwh.normal),
        Math.min(fuzzy.voltage.low, fuzzy.ampere.normal, fuzzy.kwh.low),
        Math.min(fuzzy.voltage.high, fuzzy.ampere.low, fuzzy.kwh.normal)
    );
    
    const efficient = Math.max(
        Math.min(fuzzy.voltage.high, fuzzy.ampere.veryLow, fuzzy.kwh.veryLow),
        Math.min(fuzzy.voltage.high, fuzzy.ampere.low, fuzzy.kwh.low),
        Math.min(fuzzy.voltage.normal, fuzzy.ampere.normal, fuzzy.kwh.veryLow),
        Math.min(fuzzy.voltage.high, fuzzy.ampere.normal, fuzzy.kwh.low)
    );
    

    return { notEfficient, moderatelyEfficient, efficient };
}

export function defuzzify(inference) {
    const numerator =
        inference.notEfficient * 20 + 
        inference.moderatelyEfficient * 50 + 
        inference.efficient * 80;

    const denominator =
        inference.notEfficient + inference.moderatelyEfficient + inference.efficient;

    return denominator === 0 ? 0 : numerator / denominator;
}

export function calculateEfficiency(voltage, ampere, kwh) {
    const inference = infer(voltage, ampere, kwh);
    return defuzzify(inference);
}
