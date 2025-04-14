import fetch from 'node-fetch';

async function checkRateLimit(apiKey) {
    const headers = apiKey
        ? { Authorization: `token ${apiKey}` }
        : {};

    const res = await fetch("https://api.github.com/rate_limit", { headers });
    const json = await res.json();

    const remaining = json.rate.remaining;
    const limit = json.rate.limit;

    console.log(`GitHub API requests remaining: ${remaining} / ${limit}`);
}

export default checkRateLimit;
