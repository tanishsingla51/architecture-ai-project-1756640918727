import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    //TODO: toggle like on video
    return res.status(200).json(new ApiResponse(200, {}, "Video like toggled"));
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment
    return res.status(200).json(new ApiResponse(200, {}, "Comment like toggled"));
})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet
    return res.status(200).json(new ApiResponse(200, {}, "Tweet like toggled"));
})

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    return res.status(200).json(new ApiResponse(200, [], "Liked videos fetched"));
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}
