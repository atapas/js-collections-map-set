// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Copy the code and see it in Browser Console</h1>`;


// Map

    // Initialize a Map
    console.log('******** Initialize a Map ********');
    const map = new Map();
    console.log(map); // Map(0) {}

    // Adding values to a Map
    console.log('******** Adding values to a Map ********');
    map.set('name', 'greenroots');
    map.set('type', 'blog');
    map.set('owner', 'Tapas Adhikary');
    console.log(map);

    // Getting values from a Map
    console.log('******** Getting values from a Map ********');
    console.log(`${map.get('name')} ${map.get('type')} by ${map.get('owner')}`);

    // Initialize a map with values
    console.log('******** Initialize a map with values ********');
    const greenrootsBlog = new Map([
        ['name', 'greenroots'],
        ['type', 'blog'],
        ['owner', 'Tapas Adhikary'],
    ]);
    console.log(greenrootsBlog);

    // Map Keys
    console.log('******** MAP Keys ********');
    const funMap = new Map();
    funMap.set(360, 'My House Number');
    funMap.set(true, 'I write blogs!');
    funMap.set({'name': 'tapas'}, true);
    console.log(funMap);
    console.log(funMap.get(360));
    console.log(funMap.get('360'));

    const funObj = {};
    funObj[360] = 'My House Number';
    console.log(funObj);
    console.log(funObj[360] === funObj['360']);
    funObj[{'name': 'tapas'}] = true;
    console.log(funObj);

    // add same key twice
    funMap.set('name', 'tapas');
    funMap.set('name', 'someone else');
    console.log(funMap);

    // Map built-in properties
    console.log('******** Map built-in properties ********');
    console.log('size of the funMap is', funMap.size);
    console.log(funMap.has(360));
    console.log(funMap.has('360'));
    console.log(funMap.delete('360'));
    console.log(funMap.delete(360));
    console.log('size of the funMap is', funMap.size);
    funMap.clear();
    console.log(funMap);

    // MapIterator
    console.log('******** MapIterator ********');
    const ageMap = new Map([
        ['Jack', 20],
        ['Alan', 34],
        ['Bill', 10],
        ['Sam', 9]
    ]);
    console.log(ageMap.keys());
    console.log(ageMap.values());
    console.log(ageMap.entries());

    // Iterating over Map
    console.log('******** Iterating over Map ********');

    // with forEach
    ageMap.forEach((value, key) => {
        console.log(`${key} is ${value} years old!`);
    });
    // with for-of
    for(const [key, value] of ageMap) {
        console.log(`${key} is ${value} years old!`);
    }

    // Object to Map
    console.log('******** Object to Map ********');
    const address = {
        'Tapas': 'Bangalore',
        'James': 'Huston',
        'Selva': 'Srilanka'
    };
    const addressMap = Object.entries(address);
    console.log(addressMap);

    // Map to Object
    console.log('******** Map to Object ********');
    console.log(Object.fromEntries(map));

    // Map to Array
    console.log('******** Map to Array ********');
    console.log(Array.from(map));
    console.log([...map]);

// Set

    // initialize
    const set = new Set();
    console.log(set);

    // Initialize with values
    const fruteSet = new Set(['🍉', '🍎', '🍈', '🍏']);
    console.log(fruteSet);

    // Set methods - Lets make salad!
    const saladSet = new Set();
    saladSet.add('🍅');
    saladSet.add('🥑');
    saladSet.add('🥕');
    saladSet.add('🥒');
    console.log(saladSet);
    saladSet.add('🥒');
    console.log(saladSet);
    console.log('Does the Salad has Carrot?', saladSet.has('🥕'));
    console.log('Does the Salad has Broccoli?', saladSet.has('🥦'));
    saladSet.delete('🥑');
    console.log('I do not like 🥑, remove from the salad', saladSet);
    saladSet.clear();
    console.log('Finished it', saladSet);

    // Iteration with Set
    const houseNos = new Set([360, 567, 101]);
    console.log(houseNos.keys());
    console.log(houseNos.values());
    console.log(houseNos.entries());

    houseNos.forEach((value) => {
        console.log(value);
    });

    for(const value of houseNos) {
        console.log(value);
    }

    // set to an array
    const arr = [...houseNos];
    console.log(arr);

    // Unique values from array using Set
    const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈',];
    const mixedFruitSet = new Set(mixedFruit);
    console.log(mixedFruitSet);

    // Set and object
    const person = {
        'name': 'Alex',
        'age': 32
    };
    const pSet = new Set();
    pSet.add(person);
    console.log(pSet);
    person.name = 'Bob';
    pSet.add(person);
    console.log(pSet);

    // Set Operations
    const first = new Set([1, 2, 3]);
    const second = new Set([3, 4, 5]);
    
    // Union
    const union = new Set([...first, ...second]);
    console.log('Union', union);

    // Intersection
    const intersection = new Set([...first].filter(elem => second.has(elem)));
    console.log('Intersection', intersection);

    // Difference
    const difference = new Set([...first].filter(elem => !second.has(elem)));
    console.log('Difference', difference);

    // Is a superset?
    const isSuperset = (set, subset) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
    }
    console.log('Is superset', isSuperset(first, second));