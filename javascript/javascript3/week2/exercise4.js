// getLoggedInUsers should wait 5 seconds before it resolves with the users!
// Sometimes it should resolve and sometimes it should reject.
// Look into Math.random

// define primise getLoggedInUsers
const getLoggedInUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    //to get random string resolve or reject
    const promiseResult = ["resolve", "reject"];
    const randomPromiseResultIndex = Math.floor(
      Math.random() * promiseResult.length
    );
    const randomPromiseResut = promiseResult[randomPromiseResultIndex];
    console.log(randomPromiseResut);
    if (randomPromiseResut === "resolve") {
      const data = [
        {
          message: "resolve waited for 2 seconds",
          users: ["benna", "magdy", "carolina"],
        },
      ];
      resolve(data);
    } else if (randomPromiseResut === "reject") {
      const data = [
        {
          message: "REJECT: waited for 2 seconds",
          users: [],
        },
      ];
      reject(data);
    }
  }, 2000);
});
/* 
// usage of getLoggedUsers promise using promises
getLoggedInUsers
  .then((users) => {
    console.log(users); // ['benna', 'magdy', 'carolina']
  })
  .catch((error) => {
    console.log(error);
  });
 */
// usage of getLoggedUsers promise using AsyncWait
async function getLoggedInUsersPromiseUsageUsingAsyncWait() {
  try {
    const data = await getLoggedInUsers;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getLoggedInUsersPromiseUsageUsingAsyncWait();
