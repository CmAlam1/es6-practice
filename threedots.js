const ages = [12, 15, 12, 16, 19, 20];
const ages2 = [12, 15, 12, 16, 19, 20, 25];
const ages3 = [12, 15, 12, 16, 19];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

const allAges2 = [...ages,...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, sochib, minister);
console.log(maximum);

const takaPoysha = [650, 550, 250, 850, 650, 982];
const max = Math.max(...takaPoysha);
console.log(max);
