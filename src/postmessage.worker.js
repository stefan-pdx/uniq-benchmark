const messageCount = 1000000;
var messagesReceived = 0;

let running = false;

onmessage = ({ data }) => {
    if (!running) {
        console.time("postmessage.worker.js");
        running = true;
    } 

    messagesReceived++;

    if (messagesReceived == messageCount) {
        console.timeEnd("postmessage.worker.js");
    }
}