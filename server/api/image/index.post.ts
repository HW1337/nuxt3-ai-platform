import OpenAI from "openai";
import { protectedRoute, incrementApiLimit, checkApiLimit } from '~/server/utils';
import { User } from "~/server/types";

const config = useRuntimeConfig();
const openai = new OpenAI({
    apiKey: config.openaiKey
});

export default defineEventHandler(async (event) => {

    await protectedRoute(event);
    const user = event.context.user as User
    const { prompt, amount = 1, resolution = "512x512" } = await readBody(event);
    if (!openai.apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'OpenAI API Key not configured.',
        })
    }
    if (!prompt) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Prompt required',
        })

    }
    if (!amount) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Amount required',
        })

    }
    if (!resolution) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Resolution required',
        })

    }
    const freeTrial = await checkApiLimit(user.id);
    const isPro = await checkSubscription(user.id)
    
    if (!freeTrial && !isPro) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Free trial has expired.',
        })

    }
    const response = await openai.images.generate({
        prompt,
        n: parseInt(amount, 10),
        size: resolution
    })
    await incrementApiLimit(user.id);

    return response.data

})