import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query
    return res.status(200).json(new ApiResponse(200, [], "Comments fetched"));

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    return res.status(201).json(new ApiResponse(201, {}, "Comment added"));
})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
    return res.status(200).json(new ApiResponse(200, {}, "Comment updated"));
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    return res.status(200).json(new ApiResponse(200, {}, "Comment deleted"));
})

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}
