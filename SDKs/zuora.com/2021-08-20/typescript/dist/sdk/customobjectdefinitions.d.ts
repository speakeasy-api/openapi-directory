import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomObjectDefinitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCustomObjectDefinitionByType - Delete a custom object definition
     *
     * Deletes the custom object definition for the provided type.
     *
     * **Note:** A custom object definition can only be deleted if no record of this custom object type exists.
     *
    **/
    deleteCustomObjectDefinitionByType(req: operations.DeleteCustomObjectDefinitionByTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomObjectDefinitionByTypeResponse>;
    /**
     * getAllCustomObjectDefinitionsInNamespace - List custom object definitions
     *
     * Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://www.zuora.com/developer/api-reference/#operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.
     *
    **/
    getAllCustomObjectDefinitionsInNamespace(req: operations.GetAllCustomObjectDefinitionsInNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCustomObjectDefinitionsInNamespaceResponse>;
    /**
     * getCustomObjectDefinitionByType - Retrieve a custom object definition
     *
     * Retrieves the custom object definition by type for the given tenant.
     *
    **/
    getCustomObjectDefinitionByType(req: operations.GetCustomObjectDefinitionByTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomObjectDefinitionByTypeResponse>;
    /**
     * postCustomObjectDefinitions - Create custom object definitions
     *
     * You can post custom object definitions with the request body schema described below.
     *
     * This operation also allows you to use the [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.
     *
     * The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.
     *
     * ## Limitations
     *
     * This custom object definition has the following limitations:
     *
     * * The maximum number of characters for the Custom Object API Name (`object`) is 64.
     * * The maximum number of characters for the Custom Object Label (`label`) is	64.
     * * The maximum number of characters for the Custom Object Description 250.
     * * The maximum number of custom fields in an custom object	is 50.
     * * The maximum number of characters for the custom field API name is	64.
     * * The maximum number of characters for the custom field label (`label`) is	64.
     * * The maximum number of characters for the custom field Description	is 250.
     * * The maximum number of picklist options is 250.
     * * The default maximum number of characters for the Text field is 512. You can configure the max length up to 4,096 characters when creating or updating the custom object definition via API.
     *
    **/
    postCustomObjectDefinitions(req: operations.PostCustomObjectDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomObjectDefinitionsResponse>;
    /**
     * postUpdateCustomObjectDefinition - Update a custom object definition
     *
     * Updates a custom object definition by posting migration resource to initiate the migration of definitions.
     *
     * ## Limitations
     *
     * Updating custom field definition has the following limitations:
     *
     * * You can only have one action per update request.
     * * You cannot delete fields from custom objects that contain records.
     * * You can only add required fields to custom objects with no records.
     * * You can change optional fields to required only on the custom objects with no records.
     *
    **/
    postUpdateCustomObjectDefinition(req: operations.PostUpdateCustomObjectDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateCustomObjectDefinitionResponse>;
}
