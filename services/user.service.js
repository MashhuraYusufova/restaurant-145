import Datastore from 'nedb'

const users = new  Datastore({
    filename: './datastore/users.json',
    autoload:true
})

users.loadDatabase((err) => console.log(err))

export function findUser( username, callback ) {
    
    users.findOne({ username }, (err, user) => {
        callback(user)
    } )

}

export function allUsers(callback) {
    users.find({}, (err, users) => {
        callback(users)
    })
    
}



export function createUser( name, surname, username, password ) {
    const doc = {
        name,
        surname,
        username,
        password
    }



users.insert( doc, (err, newDoc) => {
    console.log(err)
})
}