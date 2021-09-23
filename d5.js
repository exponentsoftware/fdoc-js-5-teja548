import fetch from 'node-fetch';

async function largArea() {
    let topTen = []
    const res = await fetch('https://restcountries.com/v2/all')
    const result = await res.json();
    let data = result.sort((a, b) => {
        return b.area - a.area
    })
    data.forEach((item, index) => {
        if (index < 10) {
            topTen.push({ country: item.name, Area: item.area })
        }
    })
    console.log(topTen);
}
largArea();

// Find the 15 most spoken languages

import fetch from 'node-fetch';

async function spokenLanguages() {
    var lang = []
    const response = await fetch('https://restcountries.com/v2/all', { mode: 'cors' })
    const result = await response.json();
    result.forEach(country => {
        country.languages.forEach(item => {
            // if find return index else return -1
            const find = lang.findIndex(data => data.name === item.name)
            if (find === -1) {
                //no language present in lang aaray
                lang.push({ name: item.name, countries: 1 })
            } else {
                // if language is present in lang aaray it will incres in the count of country 
                lang.splice(find, 1, { name: item.name, countries: lang[find].countries + 1 });
            }
        })
    });
    // compaire logic
    //if a-b then decending if b-a then accending
    let data = lang.sort((a, b) => {
        return b.countries - a.countries;
    });
    console.log(data);
}
spokenLanguages();

//total languages

import fetch from 'node-fetch';

async function TotalLanguages() {
    var totalLanguages = []
    const response = await fetch('https://restcountries.com/v2/all')
    const result = await response.json();
    // console.log(result);
    result.forEach(country => {
        country.languages.forEach(item => {
            const find = totalLanguages.filter(data => data === item.name)
            if (find.length === 0) {
                totalLanguages.push(item.name)
            }
        })
    });
    console.log(totalLanguages);
    console.log(`${totalLanguages.length} diffrent languages in the countries API`);
}
TotalLanguages();

const names = [

    { name: 'elon musk', age: 55, place: 'california' },
    { name: 'jeff bezos', age: 45, place: 'texas' },
    { name: 'sachin tendulkar', age: 45, place: 'mumbai' },
    { name: 'TATA', age: 65, place: 'gujarat' },
]
const op = names.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]

    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(op);