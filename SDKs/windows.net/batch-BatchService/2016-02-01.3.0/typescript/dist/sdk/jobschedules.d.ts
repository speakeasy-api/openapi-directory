import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JobSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * jobScheduleAdd - Adds a job schedule to the specified account.
    **/
    jobScheduleAdd(req: operations.JobScheduleAddRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleAddResponse>;
    /**
     * jobScheduleDelete - Deletes a job schedule from the specified account.
    **/
    jobScheduleDelete(req: operations.JobScheduleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleDeleteResponse>;
    /**
     * jobScheduleDisable - Disables a job schedule.
    **/
    jobScheduleDisable(req: operations.JobScheduleDisableRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleDisableResponse>;
    /**
     * jobScheduleEnable - Enables a job schedule.
    **/
    jobScheduleEnable(req: operations.JobScheduleEnableRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleEnableResponse>;
    /**
     * jobScheduleExists - Checks the specified job schedule exists.
    **/
    jobScheduleExists(req: operations.JobScheduleExistsRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleExistsResponse>;
    /**
     * jobScheduleGet - Gets information about the specified job schedule.
    **/
    jobScheduleGet(req: operations.JobScheduleGetRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleGetResponse>;
    /**
     * jobScheduleList - Lists all of the job schedules in the specified account.
    **/
    jobScheduleList(req: operations.JobScheduleListRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleListResponse>;
    /**
     * jobSchedulePatch - Updates the properties of the specified job schedule.
    **/
    jobSchedulePatch(req: operations.JobSchedulePatchRequest, config?: AxiosRequestConfig): Promise<operations.JobSchedulePatchResponse>;
    /**
     * jobScheduleTerminate - Terminates a job schedule.
    **/
    jobScheduleTerminate(req: operations.JobScheduleTerminateRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleTerminateResponse>;
    /**
     * jobScheduleUpdate - Updates the properties of the specified job schedule.
    **/
    jobScheduleUpdate(req: operations.JobScheduleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleUpdateResponse>;
}
