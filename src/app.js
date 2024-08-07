const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const connectUrl = 'mongodb://127.0.0.1:27017'
const dbName = "Task"
mongoclient.connect(connectUrl, (error, req1) => {
    if (error) {
        return console.log("error has occured")
    }
    console.log('All Perf')
    const db = req1.db(dbName)


    db.collection('users').insertOne({
        name: 'Mohamed',
        age: 20
    }, (error, data) => {
        if (error) {
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertMany(
        [{
            name: 'bebo',
            age: 10
        },
        {
            name: 'ayad',
            age: 27
        },
        {
            name: 'reem',
            age: 24
        },
        {
            name: 'tasneem',
            age: 27
        },
        {
            name: 'zaki',
            age: 24
        },
        {
            name: 'trika',
            age: 27
        },
        {
            name: 'mahmoud',
            age: 24
        },
        {
            name: 'esraa',
            age: 27
        },
        {
            name: 'aya',
            age: 27
        },
        {
            name: 'alaa',
            age: 23
        }
        ], (error, data) => {
            if (error) {
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        }
    )


    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })

    db.collection("users").updateMany({},
        { $set: { name: "Osama" }, $inc: { age: 5 } },
        { limit: 4 }
    ).then((data1) => {
        console.log(data1.modifiedCount);
    }).catch((error) => {
        console.log(error);
    });

    db.collection("users").updateOne({ _id: mongodb.ObjectId("65fe0368709391d5c19a995c")}, {
        $inc: {age:5}
    }).
        then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => {
            console.log(error)
        })


    db.collection('users').updateMany({}, {
        $inc: { age: 10 }
    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => {
            console.log(error)
    })



    db.collection('users').deleteMany({ age: 27 })
        .then((data1) => { console.log(data1.deletedCount) })
        .catch((error) => {
            console.log(error)
        })

})
