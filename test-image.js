const OpenAI = require('openai');

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
});

async function test() {
    try {
        console.log("Testing with images.generate...");
        const imageResponse = await openai.images.generate({
            model: "openai/gpt-5-image-mini",
            prompt: "a cute dog",
            n: 1,
            size: "1024x1024",
        });
        console.log("Success (images.generate):", imageResponse.data[0].url);
    } catch (e) {
        console.error("Error (images.generate):", e.message);
        if (e.response) console.error("Response:", e.response.data);
    }

    try {
        console.log("\nTesting with chat.completions...");
        const imageCompletion = await openai.chat.completions.create({
            model: "openai/gpt-5-image-mini",
            messages: [
                {
                    role: "user",
                    content: "Generate an image of a cute dog"
                }
            ],
            max_tokens: 8000,
        });
        console.log("Success (chat.completions):", JSON.stringify(imageCompletion.choices[0], null, 2));
        console.log("Message keys:", Object.keys(imageCompletion.choices[0].message));
    } catch (e) {
        console.error("Error (chat.completions):", e.message);
        if (e.response) console.error("Response:", JSON.stringify(e.response.data, null, 2));
    }
}

test();
