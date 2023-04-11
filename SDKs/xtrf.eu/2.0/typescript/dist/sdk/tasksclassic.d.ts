import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class TasksClassic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds files to a given task.
     *
     * @remarks
     * Adds files to a given task.
     */
    addFile(req: operations.AddFileRequest, config?: AxiosRequestConfig): Promise<operations.AddFileResponse>;
    /**
     * Removes a task.
     *
     * @remarks
     * Removes a task.
     */
    delete14(req: operations.Delete14Request, config?: AxiosRequestConfig): Promise<operations.Delete14Response>;
    /**
     * Returns contacts of a given task.
     *
     * @remarks
     * Returns contacts of a given task.
     */
    getContacts1(req: operations.GetContacts1Request, config?: AxiosRequestConfig): Promise<operations.GetContacts1Response>;
    /**
     * Returns custom fields of a given task.
     *
     * @remarks
     * Returns custom fields of a given task.
     */
    getCustomFields7(req: operations.GetCustomFields7Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields7Response>;
    /**
     * Returns dates of a given task.
     *
     * @remarks
     * Returns dates of a given task.
     */
    getDates3(req: operations.GetDates3Request, config?: AxiosRequestConfig): Promise<operations.GetDates3Response>;
    /**
     * Returns instructions of a given task.
     *
     * @remarks
     * Returns instructions of a given task.
     */
    getInstructions2(req: operations.GetInstructions2Request, config?: AxiosRequestConfig): Promise<operations.GetInstructions2Response>;
    /**
     * Returns progress of a given task.
     *
     * @remarks
     * Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.
     */
    getProgress(req: operations.GetProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetProgressResponse>;
    /**
     * Returns lists of files of a given task.
     *
     * @remarks
     * Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.
     */
    getTaskFiles(req: operations.GetTaskFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskFilesResponse>;
    /**
     * Starts a task.
     *
     * @remarks
     * Starts a task.
     */
    start1(req: operations.Start1Request, config?: AxiosRequestConfig): Promise<operations.Start1Response>;
    /**
     * Updates Client Task PO Number of a given task.
     *
     * @remarks
     * Updates Client Task PO Number of a given task.
     */
    updateClientTaskPONumber(req: operations.UpdateClientTaskPONumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientTaskPONumberResponse>;
    /**
     * Updates contacts of a given task.
     *
     * @remarks
     * Updates contacts of a given task.
     */
    updateContacts1(req: operations.UpdateContacts1Request, config?: AxiosRequestConfig): Promise<operations.UpdateContacts1Response>;
    /**
     * Updates custom fields of a given task.
     *
     * @remarks
     * Updates custom fields of a given task.
     */
    updateCustomFields5(req: operations.UpdateCustomFields5Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFields5Response>;
    /**
     * Updates dates of a given task.
     *
     * @remarks
     * Updates dates of a given task.
     */
    updateDates2(req: operations.UpdateDates2Request, config?: AxiosRequestConfig): Promise<operations.UpdateDates2Response>;
    /**
     * Updates instructions of a given task.
     *
     * @remarks
     * Updates instructions of a given task.
     */
    updateInstructions3(req: operations.UpdateInstructions3Request, config?: AxiosRequestConfig): Promise<operations.UpdateInstructions3Response>;
    /**
     * Updates name of a given task.
     *
     * @remarks
     * Updates name of a given task.
     */
    updateName(req: operations.UpdateNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNameResponse>;
}
