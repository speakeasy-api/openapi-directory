import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * jobAdd - Adds a job to the specified account.
    **/
    jobAdd(req: operations.JobAddRequest, config?: AxiosRequestConfig): Promise<operations.JobAddResponse>;
    /**
     * jobDelete - Deletes a job.
    **/
    jobDelete(req: operations.JobDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobDeleteResponse>;
    /**
     * jobDisable - Disables the specified job, preventing new tasks from running.
    **/
    jobDisable(req: operations.JobDisableRequest, config?: AxiosRequestConfig): Promise<operations.JobDisableResponse>;
    /**
     * jobEnable - Enables the specified job, allowing new tasks to run.
    **/
    jobEnable(req: operations.JobEnableRequest, config?: AxiosRequestConfig): Promise<operations.JobEnableResponse>;
    /**
     * jobGet - Gets information about the specified job.
    **/
    jobGet(req: operations.JobGetRequest, config?: AxiosRequestConfig): Promise<operations.JobGetResponse>;
    /**
     * jobGetAllJobsLifetimeStatistics - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
    **/
    jobGetAllJobsLifetimeStatistics(req: operations.JobGetAllJobsLifetimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.JobGetAllJobsLifetimeStatisticsResponse>;
    /**
     * jobList - Lists all of the jobs in the specified account.
    **/
    jobList(req: operations.JobListRequest, config?: AxiosRequestConfig): Promise<operations.JobListResponse>;
    /**
     * jobListFromJobSchedule - Lists the jobs that have been created under the specified job schedule.
    **/
    jobListFromJobSchedule(req: operations.JobListFromJobScheduleRequest, config?: AxiosRequestConfig): Promise<operations.JobListFromJobScheduleResponse>;
    /**
     * jobListPreparationAndReleaseTaskStatus - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
    **/
    jobListPreparationAndReleaseTaskStatus(req: operations.JobListPreparationAndReleaseTaskStatusRequest, config?: AxiosRequestConfig): Promise<operations.JobListPreparationAndReleaseTaskStatusResponse>;
    /**
     * jobPatch - Updates the properties of a job.
    **/
    jobPatch(req: operations.JobPatchRequest, config?: AxiosRequestConfig): Promise<operations.JobPatchResponse>;
    /**
     * jobTerminate - Terminates the specified job, marking it as completed.
    **/
    jobTerminate(req: operations.JobTerminateRequest, config?: AxiosRequestConfig): Promise<operations.JobTerminateResponse>;
    /**
     * jobUpdate - Updates the properties of a job.
    **/
    jobUpdate(req: operations.JobUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobUpdateResponse>;
}
