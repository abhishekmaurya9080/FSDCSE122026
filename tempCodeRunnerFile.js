const otp = 7670;
const enteredOtp = 7670; 

const orderPromise = new Promise((resolve, reject) => {
    console.log("Order Received");

    setTimeout(() => {
        if (enteredOtp === otp) {
            resolve("Order Accepted");
        } else {
            reject("Invalid OTP. Order Declined");
        }
    }, 2000);
});