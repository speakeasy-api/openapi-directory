import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccessTokens - Get Access Tokens
     *
     * The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
    **/
    getAccessTokens(req: operations.GetAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessTokensResponse>;
    /**
     * getUser - Get User Details
     *
     * The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>
    **/
    getUser(config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * registerUser - Register User
     *
     * The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>
    **/
    registerUser(req: operations.RegisterUserRequest, config?: AxiosRequestConfig): Promise<operations.RegisterUserResponse>;
    /**
     * samlLogin - Saml Login
     *
     * The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>
    **/
    samlLogin(req: operations.SamlLoginRequest, config?: AxiosRequestConfig): Promise<operations.SamlLoginResponse>;
    /**
     * unregister - Delete User
     *
     * The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>
    **/
    unregister(config?: AxiosRequestConfig): Promise<operations.UnregisterResponse>;
    /**
     * updateUser - Update User Details
     *
     * The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href="https://developer.yodlee.com/api-reference#tag/Derived">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * userLogout - User Logout
     *
     * <b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>
    **/
    userLogout(config?: AxiosRequestConfig): Promise<operations.UserLogoutResponse>;
}
