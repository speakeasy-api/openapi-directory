import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelsPrivateChannelMembers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Restrict a user from viewing a private channel
     *
     * @remarks
     * This method prevents a single user from being able to access the specified private channel.
     */
    deleteChannelPrivacyUser(req: operations.DeleteChannelPrivacyUserRequest, security: operations.DeleteChannelPrivacyUserSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteChannelPrivacyUserResponse>;
    /**
     * Get all the users who can view a private channel
     *
     * @remarks
     * This method gets all the users who have access to the specified private channel.
     */
    getChannelPrivacyUsers(req: operations.GetChannelPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelPrivacyUsersResponse>;
    /**
     * Permit a specific user to view a private channel
     *
     * @remarks
     * This method gives a single user access to the specified private channel.
     */
    setChannelPrivacyUser(req: operations.SetChannelPrivacyUserRequest, security: operations.SetChannelPrivacyUserSecurity, config?: AxiosRequestConfig): Promise<operations.SetChannelPrivacyUserResponse>;
    /**
     * Permit a list of users to view a private channel
     *
     * @remarks
     * This method gives multiple users access to the specified private channel.
     */
    setChannelPrivacyUsers(req: operations.SetChannelPrivacyUsersRequest, security: operations.SetChannelPrivacyUsersSecurity, config?: AxiosRequestConfig): Promise<operations.SetChannelPrivacyUsersResponse>;
}
