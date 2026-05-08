// | 1     | Basic callback execution            
// | `name = "Taha"` `callback`                        
// | Create a function that takes `name` and a callback. Call callback 
// and pass `name` into it. | Understand how functions get passed and executed                  |


// | `name = "Taha"` `callback`                        
let Name = 'taha';

function greet(name, callback) {
    callback(name);
}

greet(Name , (name)=>{
console.log(name);
});



// | 2     | Add transformation                  
// | `num = 5`                                         
// | Create function `doubleNumber(num, callback)` → callback should receive `num * 2`    
// | Learn passing processed data into callback                        |


let num = 5 ;

function doubleNumber(value,callback) {
    let double = value * 2;
    callback(double)
    
}

doubleNumber(num , (value)=>{
    console.log(value);
    
})


// | 3     | Fake async (setTimeout)             
// | `task = "Download Complete"`                      
// | Simulate delay using `setTimeout`, then call callback with `task
//| Understand async behavior (why callbacks exist)                  

let task = 'Download Complete';

function delayedMessage(value , callback) {
    let words = value;
    setTimeout(()=>{
        callback(words)
    },3000)
}

delayedMessage(task , (word)=>{
    console.log(word);
})


// | 4     | Error handling callback style       
// | `shouldFail = true/false`, `data = "Server Data"` 
// | Function must call `callback(error, data)` → if fail: error else data 
//                      | Learn Node.js-style `(err, data)` pattern                         |


let data = 'Server Data'

function checkServer( data , callback) {
    let shouldFail = false;
    if (shouldFail){
        callback('Error occurred', null)
    }else{
        callback(null , data)
    }
}
checkServer(data , (err , data) =>{
    if(err){
        console.log('Error : ' + err);
        
    }else {
        console.log('Data : ' + data);
        
    }
})

// | 5     | Callback chain (mini callback hell)
//  | `userId = 1`       
//  |Step 1: getUser → Step 2: getPosts → Step 3: getComments using nested callbacks            
// | Understand why callback hell exists (and why people cry about it) |


let userId = 1;

function getUser(userid, callback) {
    let user = { id: 1, name: "Taha" }
    if(user.id === userid){
        callback(user)
    }
}
function getPosts(user, callback) {
    let posts = [{ id: 101, userId: 1 }, { id: 102, userId: 1 }]
    let post = posts.filter(element => element.userId === user.id).find(value => value)
    callback(post)
    
}
function getComments( element , callback) {
    let comments = [{ id: 201, postId: 101 }, { id: 202, postId: 101 }]
   let comment = comments.filter((value )=> value.postId === element.id).find(value => value);
   callback(comment)
}
getUser(userId , (userid)=>{
    getPosts(userid, (element)=>{
        getComments(element, (comment)=>{
            console.log(comment);
        })
    })
})