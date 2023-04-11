import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Data Query feature enables you to perform SQL queries in your Zuora tenant. To learn how to get started with Data Query, see [Overview of Data Query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/A_Overview_of_Data_Query).
 *
 * @remarks
 *
 */
export declare class DataQueries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel a data query job
     *
     * @remarks
     * Cancels a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job, which prevents Zuora from performing the query. This operation is only applicable if the status of the query job is `accepted` or `in_progress`.
     *
     */
    deleteDataQueryJob(req: operations.DELETEDataQueryJobRequest, config?: AxiosRequestConfig): Promise<operations.DELETEDataQueryJobResponse>;
    /**
     * Retrieve a data query job
     *
     * @remarks
     * Retrieves a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job. You can use this operation to track the status of the query job and obtain the URL of the query results.
     *
     * If you are an administrator, you can retrieve every query job in your tenant.
     *
     * If you are a non-admin user and try to retrieve a query job that you are not the owner of, you will get a 403 response indicating that you are forbidden from viewing this job. As a non-admin user, you can only retrieve your own query job.
     *
     */
    getDataQueryJob(req: operations.GETDataQueryJobRequest, config?: AxiosRequestConfig): Promise<operations.GETDataQueryJobResponse>;
    /**
     * List data query jobs
     *
     * @remarks
     * Returns a list of [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) jobs that have been created in your Zuora tenant. You can filter the list by status.
     *
     * If you are an administrator, you can retrieve all the query jobs in your tenant. Otherwise, you can only retrieve your own query jobs.
     *
     */
    getDataQueryJobs(req: operations.GETDataQueryJobsRequest, config?: AxiosRequestConfig): Promise<operations.GETDataQueryJobsResponse>;
    /**
     * Submit a data query
     *
     * @remarks
     * Submits a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) to be performed by Zuora and creates a query job. You can use [Retrieve a data query job](#operation/GET_DataQueryJob) to track the status of the query job and obtain the URL of the query results.
     *
     */
    postDataQueryJob(req: operations.POSTDataQueryJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTDataQueryJobResponse>;
}
