import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosViewingPrivacy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permit a specific user to view a private video
     */
    addVideoPrivacyUser(req: operations.AddVideoPrivacyUserRequest, security: operations.AddVideoPrivacyUserSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUserResponse>;
    /**
     * Permit a list of users to view a private video
     *
     * @remarks
     * The body of this request should follow our
     * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
     * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
     */
    addVideoPrivacyUsers(req: operations.AddVideoPrivacyUsersRequest, security: operations.AddVideoPrivacyUsersSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUsersResponse>;
    /**
     * Permit a list of users to view a private video
     *
     * @remarks
     * The body of this request should follow our
     * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
     * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
     */
    addVideoPrivacyUsersAlt1(req: operations.AddVideoPrivacyUsersAlt1Request, security: operations.AddVideoPrivacyUsersAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUsersAlt1Response>;
    /**
     * Restrict a user from viewing a private video
     */
    deleteVideoPrivacyUser(req: operations.DeleteVideoPrivacyUserRequest, security: operations.DeleteVideoPrivacyUserSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoPrivacyUserResponse>;
    /**
     * Get all the users who can view a user's private videos by default
     */
    getVideoPrivacyUsers(req: operations.GetVideoPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyUsersResponse>;
    /**
     * Get all the users who can view a user's private videos by default
     */
    getVideoPrivacyUsersAlt1(req: operations.GetVideoPrivacyUsersAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyUsersAlt1Response>;
}
