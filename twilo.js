const accountSid = process.env.accountSid
const authToken = process.env.authToken

const client = require("twilio")(accountSid, authToken)

const numbers = ["xxxxxxxxxx", "xxxxxxxxxx"]


// Send SMS single number

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: // Twillo Number
    to: "+91xxxxxxxxxx",
  })
  .then((message) => console.log(message.sid))

// Send SMS multipale number

async function makeCalls(numbers) {
  numbers.forEach(async (number) => {
    await client.messages
      .create({
        body: "Hello",
        to: `+91${number}`,
        from:  // Twillo Number
      })
      .then((call) => console.log(call.sid))
  })
}

makeCalls(numbers)
