const lagrange = (args: number[], vals: number[], x: number): number => {
  let f = 0;
  let numerator = 1;
  let denominator = 1;

  for (let i: number = 0; i < args.length; i++) {
    for (let j: number = 0; j < args.length; j++) {
      if (args[i] !== args[j]) {
        numerator = numerator * (x - args[j]);
        denominator = denominator * (args[i] - args[j]);
      }
    }

    f = f + (vals[i] * numerator) / denominator;
    numerator = 1;
    denominator = 1;
  }

  return f;
};

export default lagrange;
