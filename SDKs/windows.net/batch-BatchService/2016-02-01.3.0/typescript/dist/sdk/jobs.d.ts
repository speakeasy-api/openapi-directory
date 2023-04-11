import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a job to the specified account.
     */
    jobAdd(req: operations.JobAddRequest, config?: AxiosRequestConfig): Promise<operations.JobAddResponse>;
    /**
     * Deletes a job.
     */
    jobDelete(req: operations.JobDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobDeleteResponse>;
    /**
     * Disables the specified job, preventing new tasks from running.
     */
    jobDisable(req: operations.JobDisableRequest, config?: AxiosRequestConfig): Promise<operations.JobDisableResponse>;
    /**
     * Enables the specified job, allowing new tasks to run.
     */
    jobEnable(req: operations.JobEnableRequest, config?: AxiosRequestConfig): Promise<operations.JobEnableResponse>;
    /**
     * Gets information about the specified job.
     */
    jobGet(req: operations.JobGetRequest, config?: AxiosRequestConfig): Promise<operations.JobGetResponse>;
    /**
     * Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
     */
    jobGetAllJobsLifetimeStatistics(req: operations.JobGetAllJobsLifetimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.JobGetAllJobsLifetimeStatisticsResponse>;
    /**
     * Lists all of the jobs in the specified account.
     */
    jobList(req: operations.JobListRequest, config?: AxiosRequestConfig): Promise<operations.JobListResponse>;
    /**
     * Lists the jobs that have been created under the specified job schedule.
     */
    jobListFromJobSchedule(req: operations.JobListFromJobScheduleRequest, config?: AxiosRequestConfig): Promise<operations.JobListFromJobScheduleResponse>;
    /**
     * Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
     */
    jobListPreparationAndReleaseTaskStatus(req: operations.JobListPreparationAndReleaseTaskStatusRequest, config?: AxiosRequestConfig): Promise<operations.JobListPreparationAndReleaseTaskStatusResponse>;
    /**
     * Updates the properties of a job.
     */
    jobPatch(req: operations.JobPatchRequest, config?: AxiosRequestConfig): Promise<operations.JobPatchResponse>;
    /**
     * Terminates the specified job, marking it as completed.
     */
    jobTerminate(req: operations.JobTerminateRequest, config?: AxiosRequestConfig): Promise<operations.JobTerminateResponse>;
    /**
     * Updates the properties of a job.
     */
    jobUpdate(req: operations.JobUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobUpdateResponse>;
}
