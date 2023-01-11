import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomObjectJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllCustomObjectBulkJobs - List all custom object bulk jobs
     *
     * Lists all custom object bulk jobs submitted by your tenant.
     *
    **/
    getAllCustomObjectBulkJobs(req: operations.GetAllCustomObjectBulkJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCustomObjectBulkJobsResponse>;
    /**
     * getCustomObjectBulkJob - Retrieve a custom object bulk job
     *
     * Retrieves the custom object bulk job details by job ID.
     *
     * Only the users that have the "View Custom Objects" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
    **/
    getCustomObjectBulkJob(req: operations.GetCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomObjectBulkJobResponse>;
    /**
     * getCustomObjectBulkJobErrors - List all errors for a custom object bulk job
     *
     * Lists all errors for a custom object bulk job.
     *
    **/
    getCustomObjectBulkJobErrors(req: operations.GetCustomObjectBulkJobErrorsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomObjectBulkJobErrorsResponse>;
    /**
     * postCustomObjectBulkJob - Submit a custom object bulk job
     *
     * Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` job.
     *
     * ## Limits
     * This custom object bulk jobs have the following limits:
     * * The concurrent bulk job limit per tenant is 5. Bulk jobs in `open`, `pending`, or `in_progress` status are counted towards the concurrent bulk job limit.
     * * The bulk job execuation order is not guaranteed, which means the bulk job that you submit ealier may be executed later.
     * * Only the users that have the "Delete Custom Objects" permission can create a `delete` bulk job. Only the users that have the "Edit Custom Objects" permission can create a `create` bulk job. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
    **/
    postCustomObjectBulkJob(req: operations.PostCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomObjectBulkJobResponse>;
    /**
     * postUploadFileForCustomObjectBulkJob - Upload a file for a custom object bulk job
     *
     * Uploads a file to a create custom object bulk job. Only one file is allowed per job. The job must be in `pending` status when you upload the file to it. The job will start creating records once the upload is finished.
     *
     * Only the users that have the "Edit Custom Objects" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
     *
    **/
    postUploadFileForCustomObjectBulkJob(req: operations.PostUploadFileForCustomObjectBulkJobRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadFileForCustomObjectBulkJobResponse>;
}
