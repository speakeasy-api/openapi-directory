import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersFollows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a user is following another user
     */
    checkIfUserIsFollowing(req: operations.CheckIfUserIsFollowingRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserIsFollowingResponse>;
    /**
     * Check if a user is following another user
     */
    checkIfUserIsFollowingAlt1(req: operations.CheckIfUserIsFollowingAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserIsFollowingAlt1Response>;
    /**
     * Follow a specific user
     */
    followUser(req: operations.FollowUserRequest, security: operations.FollowUserSecurity, config?: AxiosRequestConfig): Promise<operations.FollowUserResponse>;
    /**
     * Follow a specific user
     */
    followUserAlt1(req: operations.FollowUserAlt1Request, security: operations.FollowUserAlt1Security, config?: AxiosRequestConfig): Promise<operations.FollowUserAlt1Response>;
    /**
     * Follow a list of users
     */
    followUsers(req: operations.FollowUsersRequest, security: operations.FollowUsersSecurity, config?: AxiosRequestConfig): Promise<operations.FollowUsersResponse>;
    /**
     * Follow a list of users
     */
    followUsersAlt1(req: operations.FollowUsersAlt1RequestBody, security: operations.FollowUsersAlt1Security, config?: AxiosRequestConfig): Promise<operations.FollowUsersAlt1Response>;
    /**
     * Get all the followers of a user
     */
    getFollowers(req: operations.GetFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetFollowersResponse>;
    /**
     * Get all the followers of a user
     */
    getFollowersAlt1(req: operations.GetFollowersAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetFollowersAlt1Response>;
    /**
     * Get all the users that a user is following
     */
    getUserFollowing(req: operations.GetUserFollowingRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowingResponse>;
    /**
     * Get all the users that a user is following
     */
    getUserFollowingAlt1(req: operations.GetUserFollowingAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetUserFollowingAlt1Response>;
    /**
     * Unfollow a user
     */
    unfollowUser(req: operations.UnfollowUserRequest, security: operations.UnfollowUserSecurity, config?: AxiosRequestConfig): Promise<operations.UnfollowUserResponse>;
    /**
     * Unfollow a user
     */
    unfollowUserAlt1(req: operations.UnfollowUserAlt1Request, security: operations.UnfollowUserAlt1Security, config?: AxiosRequestConfig): Promise<operations.UnfollowUserAlt1Response>;
}
