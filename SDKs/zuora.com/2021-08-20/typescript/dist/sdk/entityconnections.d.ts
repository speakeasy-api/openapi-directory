import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EntityConnections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Multi-entity: List connections
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Retrieves information about certain connections for a specified entity. You can specify the entity to retrieve in the `Zuora-Entity-Ids` request header.
     *
     * You can retrieve:
     *  - Inbound connections
     *  - Outbound connections
     *  - Both inbound and outbound connections
     *
     * ## User Access Permission
     * You can make the call as any entity user.
     *
     */
    getEntityConnections(req: operations.GETEntityConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GETEntityConnectionsResponse>;
    /**
     * Multi-entity: Initiate a connection request
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Initiates a connection request from a source entity to a target entity.
     *
     * ## User Access Permission
     * You must make the call as a source entity administrator. Also, this administrator must have permission to access to the target entity.
     *
     */
    postEntityConnections(req: operations.POSTEntityConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTEntityConnectionsResponse>;
    /**
     * Multi-entity: Accept a connection request
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Accepts a connection request.
     *
     * ## User Access Permission
     * You must make the call as an entity administrator to accept a connection request.
     *
     */
    putEntityConnectionsAccept(req: operations.PUTEntityConnectionsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.PUTEntityConnectionsAcceptResponse>;
    /**
     * Multi-entity: Deny a connection request
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Denies a connection request.
     *
     * ## User Access Permission
     * You must make the call as an entity administrator to deny a connection request.
     *
     */
    putEntityConnectionsDeny(req: operations.PUTEntityConnectionsDenyRequest, config?: AxiosRequestConfig): Promise<operations.PUTEntityConnectionsDenyResponse>;
    /**
     * Multi-entity: Disconnect a connection
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Disconnects an established connection. If you have shared objects from a global entity to a target entity, disconnecting the connection will break the mapping relationship between these entities and cannot be recovered later.
     *
     * ## User Access Permission
     * You must make the call as an administrator of the target entity or source entity.
     *
     */
    putEntityConnectionsDisconnect(req: operations.PUTEntityConnectionsDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.PUTEntityConnectionsDisconnectResponse>;
}
