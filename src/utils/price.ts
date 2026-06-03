export const formatPrice = (price: number, yearly: boolean): string =>
    `$${price}/${yearly ? 'yr' : 'mo'}`;

export const periodLabel = (yearly: boolean, long = false): string =>
    yearly ? (long ? 'year' : 'yr') : (long ? 'month' : 'mo');
