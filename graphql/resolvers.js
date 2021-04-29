import {people, getById, addPerson, leavePerson} from './db.js';

const resolvers = {
    Query: {
      people: () => people,
      person: (_, { id }) => getById(id)
    },
    Mutation: {
      addPerson: (_, { name, gender, age }) => addPerson(name, gender, age),
      leavePerson: (_, { id }) => leavePerson(id)
    }
  };
  
  export default resolvers;
