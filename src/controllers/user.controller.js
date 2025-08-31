import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh and access token");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(" -password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (find user, check password, generate tokens)
  return res.status(200).json(new ApiResponse(200, {}, "User logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (clear refresh token)
  return res.status(200).json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (verify refresh token, generate new tokens)
  return res.status(200).json(new ApiResponse(200, {}, "Access token refreshed"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (get old/new password, update)
  return res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, "User fetched successfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (update fullName, email etc)
  return res.status(200).json(new ApiResponse(200, {}, "Account details updated"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (upload new avatar to cloudinary, update user record)
  return res.status(200).json(new ApiResponse(200, {}, "Avatar updated successfully"));
});

const updateUserCoverImage = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (upload new cover image to cloudinary, update user record)
  return res.status(200).json(new ApiResponse(200, {}, "Cover image updated successfully"));
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (get user by username, aggregate subscriber/subscription counts)
  return res.status(200).json(new ApiResponse(200, {}, "Channel profile fetched"));
});

const getWatchHistory = asyncHandler(async (req, res) => {
  // Implementation here
  // ... (get user's watch history)
  return res.status(200).json(new ApiResponse(200, [], "Watch history fetched"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory
};
