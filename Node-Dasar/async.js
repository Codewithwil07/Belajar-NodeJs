function samplePromise(){
    return Promise.resolve("Hello")
}

async function Run () {
    const data = samplePromise()
    console.log(data);
}

Run()