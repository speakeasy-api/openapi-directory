import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class JobsClassic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    assignFileToJobOutput(req: operations.AssignFileToJobOutputRequest, config?: AxiosRequestConfig): Promise<operations.AssignFileToJobOutputResponse>;
    /**
     * Assigns vendor to a job in a project.
     *
     * @remarks
     * Assigns vendor to a job in a project.
     */
    assignVendor(req: operations.AssignVendorRequest, config?: AxiosRequestConfig): Promise<operations.AssignVendorResponse>;
    /**
     * Changes job status if possible (400 Bad Request is returned otherwise).
     *
     * @remarks
     * Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>
     */
    changeStatus(req: operations.ChangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.ChangeStatusResponse>;
    /**
     * Returns job details by jobId.
     *
     * @remarks
     * Returns job details by jobId.
     */
    getJobDetails(req: operations.GetJobDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobDetailsResponse>;
    /**
     * Returns list of input and output files of a job.
     *
     * @remarks
     * Returns list of input and output files of a job.
     */
    getJobFiles(req: operations.GetJobFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetJobFilesResponse>;
    /**
     * Returns file metadata.
     *
     * @remarks
     * Returns file metadata.
     */
    getJobFiles1(req: operations.GetJobFiles1Request, config?: AxiosRequestConfig): Promise<operations.GetJobFiles1Response>;
    /**
     * Updates dates of a given job.
     *
     * @remarks
     * Updates dates of a given job.
     */
    updateDates(req: operations.UpdateDatesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatesResponse>;
    /**
     * Updates instructions for a job.
     *
     * @remarks
     * Updates instructions for a job.
     */
    updateInstructions(req: operations.UpdateInstructionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInstructionsResponse>;
}
