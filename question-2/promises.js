// method similar to delayedSuccess but returns a promise that resolves after 500ms.
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "delayed success!" });
        }, 500);
    });
}

// method similar to delayedException and rejects an error message after a timeout of 500ms.
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception!" });
        }, 500);
    });
}

// test the promises
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));