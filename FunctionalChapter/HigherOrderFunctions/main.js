/**
 * Prepared data:
 */
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

var result = companies.filter(cp => cp.start > 1995);
var result2 = companies.filter(cp => cp.category == "Retail");
console.log(result);
console.log(result2);

//    const companyNames = companies.map((value,index) =>{
//       return value.name + " possition: "+  ++index;
//    })

const companyNames = companies.map((value, index) => {
  return `${value.name}, ${value.category} [ ${value.start} - ${value.end}]`;
});
console.log(companyNames);

const doubleMappedAges = ages.map(t => Math.sqrt(t)).map(age => age * 2);;
console.log(doubleMappedAges);

var sortedCompany = companyNames.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
console.log(sortedCompany);
console.log(sortedCompany.length);
sortedCompany.forEach(c1 => console.log(c1));

//full arrow function example 
var ageSum = 0;
ageSum = ages.reduce((total, value) => (total += value), 0);
console.log(ageSum);

// other examples without full arrow function 
const totalYears = companies.reduce((total, cp) => {
  return total += (cp.end - cp.start);
}, 0)
console.log(totalYears);

// full example  adding filter
const filter = function (f, array) {
  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {
      filtered.push(array[i]);
    }
  }
}
const array = [1, 2, 3];
const filtered = (a => !!a, array);