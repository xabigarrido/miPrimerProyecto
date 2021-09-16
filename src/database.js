import mongoose from 'mongoose'
const URI = 'mongodb+srv://xabi:123@cluster0.xmvtl.mongodb.net/AppTasks?retryWrites=true&w=majority';

mongoose.connect(URI)
.then(db => console.log('Db is connected'))
.catch(err => console.log(err))
