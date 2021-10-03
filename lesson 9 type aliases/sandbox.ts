type numOrStr = number | string;
type userObjDetails = {name: string, age: number, isStaff: boolean }
const logDetails = (uid: numOrStr, item: string) => {
    console.log(`${item} has uid ${uid}`)
}

const userDetails = (user: userObjDetails) => {
    console.log(`
        name: ${user.name}
        age: ${user.age}
        isStaff: ${user.isStaff}
    `)
}

logDetails('1234a', 'Pizza');

userDetails({name: 'Tomás', age: 21, isStaff: false })