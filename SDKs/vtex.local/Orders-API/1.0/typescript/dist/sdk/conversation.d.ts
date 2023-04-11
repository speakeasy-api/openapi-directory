import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Conversation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve order conversation
     *
     * @remarks
     * List all order conversations of an order by its order ID.
     */
    getConversation(req: operations.GetConversationRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationResponse>;
}
