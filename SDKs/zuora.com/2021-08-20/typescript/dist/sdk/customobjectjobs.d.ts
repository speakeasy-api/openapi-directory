import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With Custom Objects service, you can submit a bulk job request to delete or create custom object records in a batch.
 *
 * @remarks
 *
 * If you use Postman, you can import the custom objects endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
 *
 * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1f068ba43651bf63c0d4)
 *
 * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
 *
 * Note that the Custom Object Jobs API is versioned by `Zuora-Version` in the request header. The response may be different for the same request with a different API version. Specify `Zuora-Version` in the request header if you expect a specific response schema.
 *
 * ### Error handling
 * If the Custom Objects API call fails, an error code will be returned in the response body. See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
 *
 */
export declare class CustomObjectJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all custom object bulk jobs
     *
     * @remarks
     * Lists all custom object bulk jobs submitted by your tenant.
     *
     */
    getAllCustomObjectBulkJobs(req: operations.GETAllCustomObjectBulkJobsRequest, config?: AxiosRequestConfig): Promise<operations.GETAllCustomObjectBulkJobsResponse>;
    /**
     * Retrieve a custom object bulk job
     *
     * @remarks
     * Retrieves the custom object bulk job details by job ID.
     *
     * Only the users that have the "View Custom Objects" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
     */
    getCustomObjectBulkJob(req: operations.GETCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.GETCustomObjectBulkJobResponse>;
    /**
     * List all errors for a custom object bulk job
     *
     * @remarks
     * Lists all errors for a custom object bulk job.
     *
     */
    getCustomObjectBulkJobErrors(req: operations.GETCustomObjectBulkJobErrorsRequest, config?: AxiosRequestConfig): Promise<operations.GETCustomObjectBulkJobErrorsResponse>;
    /**
     * Submit a custom object bulk job
     *
     * @remarks
     * Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` job.
     *
     * ## Limits
     * This custom object bulk jobs have the following limits:
     * * The concurrent bulk job limit per tenant is 5. Bulk jobs in `open`, `pending`, or `in_progress` status are counted towards the concurrent bulk job limit.
     * * The bulk job execuation order is not guaranteed, which means the bulk job that you submit ealier may be executed later.
     * * Only the users that have the "Delete Custom Objects" permission can create a `delete` bulk job. Only the users that have the "Edit Custom Objects" permission can create a `create` bulk job. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
     */
    postCustomObjectBulkJob(req: operations.POSTCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTCustomObjectBulkJobResponse>;
    /**
     * Upload a file for a custom object bulk job
     *
     * @remarks
     * Uploads a file to a create custom object bulk job. Only one file is allowed per job. The job must be in `pending` status when you upload the file to it. The job will start creating records once the upload is finished.
     *
     * Only the users that have the "Edit Custom Objects" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
     */
    postUploadFileForCustomObjectBulkJob(req: operations.POSTUploadFileForCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTUploadFileForCustomObjectBulkJobResponse>;
}
