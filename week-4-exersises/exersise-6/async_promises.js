//------------------------------------------------------------------------------------
// Part 1: Understanding Promises
//------------------------------------------------------------------------------------
// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate
let fetchUserData = function(userId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (userId > 0){
                resolve({
                    id: userId,
                    name: `User${userId}`,
                    email: `user${userId}@gmail.com`,
                    registrationDate: new Date().toISOString()
                });
            } else{
                reject(new Error('Invaild user ID: it must be a positive number'))
            }
        },1500)
    });
}
// console.log(fetchUserData(5));
// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error
let fetchUserPosts = (userId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(userId > 0){
                resolve([
                    // First Post
                    {
                        id: 1,
                        title: "Post Malone Caught Smuggling Drugs",
                        content: "lorem ipsum deo jeo poel ban out",
                        userId: userId
                    },
                    // Second Post
                    {
                        id: 2,
                        title: "Messi is the GOAT according to experts",
                        content: "lorem ipsum deo jeo poel ban out",
                        userId: userId
                    }
                ]);
            } else {
                reject(new Error("Could not find user post"));
            }
        },1000);
    });
}
//------------------------------------------------------------------------------------
// Part 2: Promise Chaining
//------------------------------------------------------------------------------------
// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their postsuserId
// - Combine the data into a single object
// - Handle any errors that occur in the chain
let getUserAndPosts = (userId) => {
    return fetchUserData(userId)
        .then(user => {
            return fetchUserPosts(user.id)
                .then(posts => {
                    return {...user, posts}
                })
        })
        .catch(e => {
            console.error("Error in Promise chain:", e.Promise);
            return null;
        })
}
// getUserAndPosts(2);
//------------------------------------------------------------------------------------
// Part 3: Async/Await Implementation
//------------------------------------------------------------------------------------
// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data
async function getUserDataAsync(userId){
    try{
        console.log('Fetching user data for ID:', userId);
        let user = await fetchUserData(userId);
        console.log('User Data received: ', user);
        console.log(`Fetching posts for user ${userId}`);
        let posts = await fetchUserPosts(user.id);
        console.log(`Posts received ${posts}`);
        return {...user,posts}
    } catch (e){
        console.error(`Error in async operation ${e.message}`);
        return null;
    }
}
//------------------------------------------------------------------------------------
// Part 4: Handling Multiple Async Operations
//------------------------------------------------------------------------------------
// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
async function fetchMultipleUsers(userIds){
    try{
        console.log('Starting parallel user fetches');
        let promises = userIds.map(id => fetchUserData(id));
        let users = await Promise.all(promises);
        console.log(`Successfully fetched ${users.length} users`);
        return users;
    } catch (e){
        console.error(`Error in fetching multiple users: ${e.message}`);
        return [];
    }
}
// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
async function fetchUsersAndPosts(userIds){
    try{
        console.log("Fetching users & posts");
        let users = await fetchMultipleUsers(userIds);
        let userPostPromises = users.map(user =>
            fetchUserPosts(user.id)
                .then(posts => ({user,posts}))
                .catch(e => {
                    console.error(`Error fetching posts user ${user.id}: ${e.message}`);
                    return {...user,posts: []};
                })
        );
        let usersWithPosts = await Promise.all(userPostPromises)
        return usersWithPosts;
    } catch (e){
        console.error(`Error in fetchUserAndPosts: ${e.message}`);
        return [];
    }
}
//------------------------------------------------------------------------------------
// Part 5: Testing Your Implementation
//------------------------------------------------------------------------------------
// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling
async function runTests(){
    try {
        // Test 01: Fetch single user
        console.log('Test 01: Fetching single user data');
        let userData = await getUserDataAsync(1);
        console.log(`Single user data: ${userData}`);
        // Test 02: Fetch multiple users
        console.log('Test 02: Fetching multiple users data');
        let multipleUser = await fetchMultipleUsers([1,2,3]);
        console.log(`Multiple users result: ${multipleUser}`);
        // Test 03: Users with posts
        console.log('Test 03: Fetching users with their posts');
        let fetchUserWithPosts = await fetchUsersAndPosts([1,2]);
        console.log(`Users with posts result: ${fetchUserWithPosts}`);
        // Test 04: Error Handling
        console.log("\n Test 4: Testing error handling");
        let errorHandling = await getUserDataAsync(-1);
        console.log(`Error occured: ${errorHandling}`);
    } catch (e) {
        console.error(`Test suite error: ${e.message}`);
    }
}
// Run the tests
runTests();