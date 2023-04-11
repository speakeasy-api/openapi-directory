import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BankFeeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create one or more new feed connection
     *
     * @remarks
     * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
     */
    createFeedConnections(req: operations.CreateFeedConnectionsRequest, security: operations.CreateFeedConnectionsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFeedConnectionsResponse>;
    /**
     * Creates one or more new statements
     */
    createStatements(req: operations.CreateStatementsRequest, security: operations.CreateStatementsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateStatementsResponse>;
    /**
     * Delete an existing feed connection
     *
     * @remarks
     * By passing in FeedConnections array object in the body, you can delete a feed connection.
     */
    deleteFeedConnections(req: operations.DeleteFeedConnectionsRequest, security: operations.DeleteFeedConnectionsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFeedConnectionsResponse>;
    /**
     * Retrieve single feed connection based on a unique id provided
     *
     * @remarks
     * By passing in a FeedConnection Id options, you can search for matching feed connections
     */
    getFeedConnection(req: operations.GetFeedConnectionRequest, security: operations.GetFeedConnectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionResponse>;
    /**
     * Searches for feed connections
     *
     * @remarks
     * By passing in the appropriate options, you can search for available feed connections in the system.
     */
    getFeedConnections(req: operations.GetFeedConnectionsRequest, security: operations.GetFeedConnectionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeedConnectionsResponse>;
    /**
     * Retrieve single statement based on unique id provided
     *
     * @remarks
     * By passing in a statement id, you can search for matching statements
     */
    getStatement(req: operations.GetStatementRequest, security: operations.GetStatementSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatementResponse>;
    /**
     * Retrieve all statements
     *
     * @remarks
     * By passing in parameters, you can search for matching statements
     */
    getStatements(req: operations.GetStatementsRequest, security: operations.GetStatementsSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatementsResponse>;
}
