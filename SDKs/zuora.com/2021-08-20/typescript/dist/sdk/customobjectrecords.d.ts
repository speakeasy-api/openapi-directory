import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomObjectRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCustomObjectRecordById - Delete a custom object record
     *
     * Deletes a custom object record of the given type and ID.
     *
     * Note that 200 response will be returned under either of the following conditions:
     * * The record is identified and successfully deleted
     * * The record could not be found
     *
     * Note that the record is deleted immediately and, therefore, will not be retained upon successful deletion.
     *
    **/
    deleteCustomObjectRecordById(req: operations.DeleteCustomObjectRecordByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomObjectRecordByIdResponse>;
    /**
     * getAllRecordsForCustomObjectType - List records for a custom object
     *
     * Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.
     *
     * ## Limitations
     *
     * This call has the following limitations:
     * * When a record is created, there will be a delay before it is available for search. For example, if you create 5 records and perform a query that these 5 records satisfy the query conditions, there will be a delay between when the 5 records are created, and when all the 5 records can be returned in the query result.
     *
    **/
    getAllRecordsForCustomObjectType(req: operations.GetAllRecordsForCustomObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRecordsForCustomObjectTypeResponse>;
    /**
     * getCustomObjectRecordById - Retrieve a custom object record
     *
     * Retrieves a record of a given type by ID.
     *
    **/
    getCustomObjectRecordById(req: operations.GetCustomObjectRecordByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomObjectRecordByIdResponse>;
    /**
     * postCustomObjectRecords - Create custom object records
     *
     * Creates custom object records with the given type.
     *
     * Upon creating records of a custom object type, the 200 response contains a list of records that have been successfully processed and stored.
     *
     *
     * ## Limitations
     *
     * This call has the following limitations:
     * * The maximum number of records that you can create by one call is 1,000.
     * * The storage of empty strings in records is not supported.
     * * Null values must be formatted as the following example:
     *   ```
     *   {
     *     "records": [
     *       {
     *         "fieldName__c": null
     *       }
     *     ]
     *   }
     *   ```
     *
    **/
    postCustomObjectRecords(req: operations.PostCustomObjectRecordsRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomObjectRecordsResponse>;
    /**
     * postCustomObjectRecordsBatchUpdateOrDelete - Update or delete custom object records
     *
     * Makes a batch update or delete of custom object records.
     * ## Limitations
     *
     * This call has the following limitations:
     * * The maximum number of records that you can update by one call is 1,000.
     * * The maximum number of records that you can delete by one call is 1,000.
     * * The storage of empty strings in records is not supported.
     * * Null values must be formatted as the following example:
     *   ```
     *   {
     *       "action": {
     *           "type": "update",
     *           "records": {
     *               "64edb2a5-2796-4e95-9559-846f8636a01b": {
     *                   "fieldName__c": null
     *             }
     *           }
     *       }
     *   }
     *   ```
     *
    **/
    postCustomObjectRecordsBatchUpdateOrDelete(req: operations.PostCustomObjectRecordsBatchUpdateOrDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomObjectRecordsBatchUpdateOrDeleteResponse>;
    /**
     * putCustomObjectRecord - Update a custom object record
     *
     * Updates a record of the given type and ID.
     *
     * ## Limitations
     *
     * * The storage of empty strings in records is not supported.
     * * Null values must be formatted as the following example:
     *   ```
     *   {
     *     "records": [
     *       {
     *         "fieldName__c": null
     *       }
     *     ]
     *   }
     *   ```
     *
    **/
    putCustomObjectRecord(req: operations.PutCustomObjectRecordRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomObjectRecordResponse>;
    /**
     * patchPartialUpdateCustomObjectRecord - Partially update a custom object record
     *
     * Updates one or many fields of a custom object record. Patch update uses JSON Merge Patch as specified in [RFC 7386](https://tools.ietf.org/html/rfc7386).
     *
     * ## Limitations
     *
     * * The storage of empty strings in records is not supported.
     * * Null values must be formatted as the following example:
     *   ```
     *   {
     *     "records": [
     *       {
     *         "fieldName__c": null
     *       }
     *     ]
     *   }
     *   ```
     *
    **/
    patchPartialUpdateCustomObjectRecord(req: operations.PatchPartialUpdateCustomObjectRecordRequest, config?: AxiosRequestConfig): Promise<operations.PatchPartialUpdateCustomObjectRecordResponse>;
}
