import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    // TODO: toggle subscription
    return res.status(200).json(new ApiResponse(200, {}, "Subscription toggled"));
})

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    return res.status(200).json(new ApiResponse(200, [], "Subscribers fetched"));
})

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.params
    return res.status(200).json(new ApiResponse(200, [], "Subscribed channels fetched"));
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}
