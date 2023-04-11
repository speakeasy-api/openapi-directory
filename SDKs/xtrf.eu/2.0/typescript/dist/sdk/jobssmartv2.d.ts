import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class JobsSmartV2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    addExternalFileLink(req: operations.AddExternalFileLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddExternalFileLinkResponse>;
    /**
     * Adds file link to the project as a link delivered in the job.
     *
     * @remarks
     * Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>
     */
    addFileLinks(req: operations.AddFileLinksRequest, config?: AxiosRequestConfig): Promise<operations.AddFileLinksResponse>;
    /**
     * Adds files to the project as delivered in the job.
     *
     * @remarks
     * Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>
     */
    addFiles(req: operations.AddFilesRequest, config?: AxiosRequestConfig): Promise<operations.AddFilesResponse>;
    /**
     * Assigns vendor to a job in a project.
     *
     * @remarks
     * Assigns vendor to a job in a project.
     */
    assignVendor1(req: operations.AssignVendor1Request, config?: AxiosRequestConfig): Promise<operations.AssignVendor1Response>;
    /**
     * Updates dates of a given job.
     *
     * @remarks
     * Updates dates of a given job.
     */
    changeDates(req: operations.ChangeDatesRequest, config?: AxiosRequestConfig): Promise<operations.ChangeDatesResponse>;
    /**
     * Changes job status if possible (400 Bad Request is returned otherwise).
     *
     * @remarks
     * Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>
     */
    changeStatus1(req: operations.ChangeStatus1Request, config?: AxiosRequestConfig): Promise<operations.ChangeStatus1Response>;
    getByExternalId(req: operations.GetByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetByExternalIdResponse>;
    /**
     * Returns list of files delivered in the job.
     *
     * @remarks
     * Returns list of files delivered in the job.
     */
    getDeliveredFiles(req: operations.GetDeliveredFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliveredFilesResponse>;
    /**
     * Returns details for a job.
     *
     * @remarks
     * Returns details for a job.
     */
    getFileById1(req: operations.GetFileById1Request, config?: AxiosRequestConfig): Promise<operations.GetFileById1Response>;
    /**
     * Returns list of files shared with the job as Reference Files.
     *
     * @remarks
     * Returns list of files shared with the job as Reference Files.
     */
    getSharedReferenceFiles(req: operations.GetSharedReferenceFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetSharedReferenceFilesResponse>;
    /**
     * Returns list of files shared with the job as Work Files.
     *
     * @remarks
     * Returns list of files shared with the job as Work Files.
     */
    getSharedWorkFiles(req: operations.GetSharedWorkFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetSharedWorkFilesResponse>;
    /**
     * Shares selected files as Reference Files with a job in a project.
     *
     * @remarks
     * Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).
     */
    shareAsReferenceFiles(req: operations.ShareAsReferenceFilesRequest, config?: AxiosRequestConfig): Promise<operations.ShareAsReferenceFilesResponse>;
    /**
     * Shares selected files as Work Files with a job in a project.
     *
     * @remarks
     * Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).
     */
    shareAsWorkFiles(req: operations.ShareAsWorkFilesRequest, config?: AxiosRequestConfig): Promise<operations.ShareAsWorkFilesResponse>;
    /**
     * Stops sharing selected files with a job in a project.
     *
     * @remarks
     * Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.
     */
    stopSharing(req: operations.StopSharingRequest, config?: AxiosRequestConfig): Promise<operations.StopSharingResponse>;
    /**
     * Updates instructions for a job.
     *
     * @remarks
     * Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.
     */
    updateInstructions4(req: operations.UpdateInstructions4Request, config?: AxiosRequestConfig): Promise<operations.UpdateInstructions4Response>;
    /**
     * Uploads file to the project as a file delivered in the job.
     *
     * @remarks
     * Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).
     */
    uploadFile1(req: operations.UploadFile1Request, config?: AxiosRequestConfig): Promise<operations.UploadFile1Response>;
}
