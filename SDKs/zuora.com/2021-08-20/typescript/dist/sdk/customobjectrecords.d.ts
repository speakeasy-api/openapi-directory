import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With Custom Objects service, you can create, update, delete and find custom object records.
 *
 * @remarks
 *
 * If you use Postman, you can import the custom objects endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
 *
 * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1f068ba43651bf63c0d4)
 *
 * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
 *
 * Note that the Custom Object Records API is versioned by `Zuora-Version` in the request header. The response may be different for the same request with a different API version. Specify `Zuora-Version` in the request header if you expect a specific response schema.
 *
 * ### Error handling
 * If the Custom Objects API call fails, an error code will be returned in the response body. See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
 *
 */
export declare class CustomObjectRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a custom object record
     *
     * @remarks
     * Deletes a custom object record of the given type and ID.
     *
     * Note that 200 response will be returned under either of the following conditions:
     * * The record is identified and successfully deleted
     * * The record could not be found
     *
     * Note that the record is deleted immediately and, therefore, will not be retained upon successful deletion.
     *
     */
    deleteCustomObjectRecordByID(req: operations.DeleteCustomObjectRecordByIDRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomObjectRecordByIDResponse>;
    /**
     * List records for a custom object
     *
     * @remarks
     * Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.
     *
     * ## Limitations
     *
     * This call has the following limitations:
     * * When a record is created, there will be a delay before it is available for search. For example, if you create 5 records and perform a query that these 5 records satisfy the query conditions, there will be a delay between when the 5 records are created, and when all the 5 records can be returned in the query result.
     *
     */
    getAllRecordsForCustomObjectType(req: operations.GETAllRecordsForCustomObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.GETAllRecordsForCustomObjectTypeResponse>;
    /**
     * Retrieve a custom object record
     *
     * @remarks
     * Retrieves a record of a given type by ID.
     *
     */
    getCustomObjectRecordByID(req: operations.GETCustomObjectRecordByIDRequest, config?: AxiosRequestConfig): Promise<operations.GETCustomObjectRecordByIDResponse>;
    /**
     * Create custom object records
     *
     * @remarks
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
     */
    postCustomObjectRecords(req: operations.POSTCustomObjectRecordsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCustomObjectRecordsResponse>;
    /**
     * Update or delete custom object records
     *
     * @remarks
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
     */
    postCustomObjectRecordsBatchUpdateOrDelete(req: operations.POSTCustomObjectRecordsBatchUpdateOrDeleteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCustomObjectRecordsBatchUpdateOrDeleteResponse>;
    /**
     * Update a custom object record
     *
     * @remarks
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
     */
    putCustomObjectRecord(req: operations.PUTCustomObjectRecordRequest, config?: AxiosRequestConfig): Promise<operations.PUTCustomObjectRecordResponse>;
    /**
     * Partially update a custom object record
     *
     * @remarks
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
     */
    patchPartialUpdateCustomObjectRecord(req: operations.PatchPartialUpdateCustomObjectRecordRequest, config?: AxiosRequestConfig): Promise<operations.PatchPartialUpdateCustomObjectRecordResponse>;
}
