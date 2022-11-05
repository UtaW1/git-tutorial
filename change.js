console.log("Change Version 3");
console.log("Change 2"); 

const fakeReq = (url) => {
    return new Proimse((resolved, rejected) => {
        const random = Math.floor(Math.random() * (4500)) + 500; 
        setTimeout(() => {
            if (delay > 4000) {
                rejected('Connection Timeout :(('); 
            }
            else {
                resolved(`YAY! Here's your data from ${url}`);
            }
        }, delay)
    })
}

fakeReq('booking.com')