import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LikesEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a user has liked a video
     */
    checkIfUserLikedVideo(req: operations.CheckIfUserLikedVideoRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserLikedVideoResponse>;
    /**
     * Check if a user has liked a video
     */
    checkIfUserLikedVideoAlt1(req: operations.CheckIfUserLikedVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserLikedVideoAlt1Response>;
    /**
     * Get all the videos that a user has liked
     */
    getLikes(req: operations.GetLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetLikesResponse>;
    /**
     * Get all the videos that a user has liked
     */
    getLikesAlt1(req: operations.GetLikesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetLikesAlt1Response>;
    /**
     * Get all the users who have liked a video
     */
    getVideoLikes(req: operations.GetVideoLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoLikesResponse>;
    /**
     * Get all the users who have liked a video
     */
    getVideoLikesAlt1(req: operations.GetVideoLikesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoLikesAlt1Response>;
    /**
     * Get all the users who have liked a video on an On Demand page
     *
     * @remarks
     * This method gets all the users who have liked a particular video on an On Demand page.
     */
    getVodLikes(req: operations.GetVodLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetVodLikesResponse>;
    /**
     * Cause a user to like a video
     */
    likeVideo(req: operations.LikeVideoRequest, security: operations.LikeVideoSecurity, config?: AxiosRequestConfig): Promise<operations.LikeVideoResponse>;
    /**
     * Cause a user to like a video
     */
    likeVideoAlt1(req: operations.LikeVideoAlt1Request, security: operations.LikeVideoAlt1Security, config?: AxiosRequestConfig): Promise<operations.LikeVideoAlt1Response>;
    /**
     * Cause a user to unlike a video
     */
    unlikeVideo(req: operations.UnlikeVideoRequest, security: operations.UnlikeVideoSecurity, config?: AxiosRequestConfig): Promise<operations.UnlikeVideoResponse>;
    /**
     * Cause a user to unlike a video
     */
    unlikeVideoAlt1(req: operations.UnlikeVideoAlt1Request, security: operations.UnlikeVideoAlt1Security, config?: AxiosRequestConfig): Promise<operations.UnlikeVideoAlt1Response>;
}
