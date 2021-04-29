export let people = [
    {
        id: 0,
        name: "ivy",
        age: 25,
        gender: "female"
    },
    {
        id: 1,
        name: "hyo",
        age: 26,
        gender: "male"
    },
    {
        id: 2,
        name: "momo",
        age: 14,
        gender: "female"
    }
]

export const getById = id => {
    const filterPeople = people.filter(person => id === person.id);
    return filterPeople[0];
}

export const addPerson = (name, gender, age) => {
    const newPerson = {
        id: `${people.length}`,
        name,
        gender,
        age
    }
    people.push(newPerson);
    return newPerson;
}

export const leavePerson = id => {
    const stayPeople = people.filter(person => person.id != id);
    if(people.length > stayPeople.length){
        people = stayPeople;
        return true;
    }
    return false;
}