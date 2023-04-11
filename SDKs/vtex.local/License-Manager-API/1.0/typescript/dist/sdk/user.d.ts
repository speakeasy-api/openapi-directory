import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create User
     *
     * @remarks
     * Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.
     */
    createUser(req: shared.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Get List of Users
     *
     * @remarks
     * Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
     */
    getListUsers(req: operations.GetListUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetListUsersResponse>;
    /**
     * Get User
     *
     * @remarks
     * Allows you to get a user from the database, using the `userId` as the identifier.
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
}
