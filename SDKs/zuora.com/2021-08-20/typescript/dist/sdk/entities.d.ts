import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Entities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Multi-entity: Delete an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Removes an entity and its sub-entities from a multi-entity hierarchy. You can only remove unprovisioned entities. An error occurred when you remove a provisioned entity.
     *
     * ## User Access Permission
     * You must make the call as a global entity administrator.
     *
     */
    deleteEntities(req: operations.DELETEEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DELETEEntitiesResponse>;
    /**
     * Multi-entity: List entities
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     * Retrieves detailed information of certain entities in a multi-entity hierarchy.
     *
     *
     * You can retrieve:
     *
     *  - Provisioned entities
     *
     *  - Unprovisioned entities
     *
     *  - Both provisioned and unprovisioned entities
     *
     * ## User Access Permission
     *
     * You can make the call as any entity user.
     *
     */
    getEntities(req: operations.GETEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GETEntitiesResponse>;
    /**
     * Multi-entity: Retrieve an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Retrieves detailed information about a specified entity.
     *
     * ## User Access Permission
     * You can make the call as any entity user.
     *
     */
    getEntityById(req: operations.GETEntityByIdRequest, config?: AxiosRequestConfig): Promise<operations.GETEntityByIdResponse>;
    /**
     * Multi-entity: Create an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Creates an entity in a multi-entity hierarchy.
     *
     * ## User Access Permission
     * You must make the call as a global entity administrator.
     *
     * ## Notes
     * * We recommend that you assign only one administrator to manage the entity hierarchy, because an administrator of the global entity by default can only access to the entities that are created by themselves.
     *
     */
    postEntities(req: operations.POSTEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.POSTEntitiesResponse>;
    /**
     * Multi-entity: Update an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Edits the following information about an unprovisioned entity:
     *
     *  - Name
     *
     *  - Display name
     *
     *  - Locale
     *
     *  - Timezone
     *
     * ## User Access Permission
     * You must make the call as a global entity administrator.
     *
     * ## Notes
     * * You are not allowed to edit the locale and time zone of the provisioned entities through the REST API.
     * * You are not allowed to edit the display name of the global entity.
     *
     */
    putEntities(req: operations.PUTEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.PUTEntitiesResponse>;
    /**
     * Multi-entity: Provision an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Provisions an entity. You can only provision an entity if its parent entity is provisioned.
     *
     * ## User Access Permission
     * You must make the call as a global entity administrator.
     *
     * ## Notes
     * * Zuora does not allow you to remove a provisioned entity from the multi-entity hierarchy. So before you provision an entity, make sure that you put the entity in the correct place in the multi-entity hierarchy.
     *
     */
    putProvisionEntity(req: operations.PUTProvisionEntityRequest, config?: AxiosRequestConfig): Promise<operations.PUTProvisionEntityResponse>;
}
