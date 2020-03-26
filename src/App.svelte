<script>
    import Queue from "./uniq.js";

    const messageCount = 1000000;

    const postMessageWorker = new Worker("build/postmessage.worker.js");
    const uniqWorker = new Worker("build/uniq.worker.js");

    const runPostMessageTest = () => {
        console.time("App.svelte::runPostMessageTest");
        for (var messagesSent = 0; messagesSent < messageCount; messagesSent++) {
            postMessageWorker.postMessage(1);
        }
        console.timeEnd("App.svelte::runPostMessageTest");
    };

    const runUniqMessageTest = () => {
        const bufferSize = 64;

        const buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * (bufferSize + 2));

        const queue = new Queue(buffer);

        uniqWorker.postMessage(buffer);

        console.time("App.svelte::runUniqMessageTest");
        for (var messagesSent = 0; messagesSent < messageCount; messagesSent++) {
            queue.push(1);
        }
        console.timeEnd("App.svelte::runUniqMessageTest");
    }
</script>

<button on:click={runPostMessageTest}>Run postMessage tests</button>
<button on:click={runUniqMessageTest}>Run Uniq tests</button>