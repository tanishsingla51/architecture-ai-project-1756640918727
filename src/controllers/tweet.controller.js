import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    return res.status(201).json(new ApiResponse(201, {}, "Tweet created"));
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
    return res.status(200).json(new ApiResponse(200, [], "User tweets fetched"));
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    return res.status(200).json(new ApiResponse(200, {}, "Tweet updated"));
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    return res.status(200).json(new ApiResponse(200, {}, "Tweet deleted"));
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
