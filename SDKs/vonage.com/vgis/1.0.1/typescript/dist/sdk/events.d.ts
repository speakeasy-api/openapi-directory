import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get event
     */
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * Get events count
     */
    getEventsCount(req: operations.GetEventsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsCountResponse>;
    /**
     * List events
     */
    listEvents(req: operations.ListEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsResponse>;
}
