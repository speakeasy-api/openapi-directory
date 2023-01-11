import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEntitiesUserAccessible - Multi-entity: List all entities that a user can access
     *
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Retrieves detailed information about all the entities that a user has permission to access.
     *
     * ## User Access Permission
     * You can make the call as any entity user.
     *
    **/
    getEntitiesUserAccessible(req: operations.GetEntitiesUserAccessibleRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitiesUserAccessibleResponse>;
    /**
     * putAcceptUserAccess - Multi-entity: Accept user access
     *
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Accepts user access to an entity.
     *
     * ## User Access Permission
     * You must make the calls as an administrator of the entity that you want to accept the user access to.
     *
    **/
    putAcceptUserAccess(req: operations.PutAcceptUserAccessRequest, config?: AxiosRequestConfig): Promise<operations.PutAcceptUserAccessResponse>;
    /**
     * putDenyUserAccess - Multi-entity: Deny user access
     *
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Denies a user access to an entity.
     *
     * ## User Access Permission
     * You must make the calls as an administrator of the entity that you want to deny the user access to.
     *
    **/
    putDenyUserAccess(req: operations.PutDenyUserAccessRequest, config?: AxiosRequestConfig): Promise<operations.PutDenyUserAccessResponse>;
    /**
     * putSendUserAccessRequests - Multi-entity: Send user access requests
     *
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Sends access requests to the entities that a user wants to access.
     *
     * ## User Access Permission
     * You must make the call as an administrator of the entity, in which the request user is created. Also, this administrator must have the permission to access the entities that the request user wants to access.
     *
    **/
    putSendUserAccessRequests(req: operations.PutSendUserAccessRequestsRequest, config?: AxiosRequestConfig): Promise<operations.PutSendUserAccessRequestsResponse>;
}
