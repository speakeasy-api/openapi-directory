import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class ProjectsSmartV2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    addExternalFileLinks(req: operations.AddExternalFileLinksRequest, config?: AxiosRequestConfig): Promise<operations.AddExternalFileLinksResponse>;
    /**
     * Adds file links to the project as added by PM.
     *
     * @remarks
     * Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>
     */
    addFileLinks1(req: operations.AddFileLinks1Request, config?: AxiosRequestConfig): Promise<operations.AddFileLinks1Response>;
    /**
     * Adds files to the project as added by PM.
     *
     * @remarks
     * Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>
     */
    addFiles1(req: operations.AddFiles1Request, config?: AxiosRequestConfig): Promise<operations.AddFiles1Response>;
    /**
     * Returns process id.
     */
    addJobToProcess(req: operations.AddJobToProcessRequest, config?: AxiosRequestConfig): Promise<operations.AddJobToProcessResponse>;
    /**
     * Prepares a ZIP archive that contains the specified files.
     *
     * @remarks
     * Prepares a ZIP archive that contains the specified files.
     */
    archive(req: shared.FilesDto, config?: AxiosRequestConfig): Promise<operations.ArchiveResponse>;
    /**
     * Changes project status if possible (400 Bad Request is returned otherwise).
     *
     * @remarks
     * Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>
     */
    changeStatus2(req: operations.ChangeStatus2Request, config?: AxiosRequestConfig): Promise<operations.ChangeStatus2Response>;
    /**
     * Adds a payable to a project.
     *
     * @remarks
     * Adds a payable to a project.
     */
    createPayable2(req: operations.CreatePayable2Request, config?: AxiosRequestConfig): Promise<operations.CreatePayable2Response>;
    /**
     * Adds a receivable to a project.
     *
     * @remarks
     * Adds a receivable to a project.
     */
    createReceivable2(req: operations.CreateReceivable2Request, config?: AxiosRequestConfig): Promise<operations.CreateReceivable2Response>;
    /**
     * Creates a new Smart Project.
     *
     * @remarks
     * Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.
     */
    create6(req: shared.ProjectCreateDTO, config?: AxiosRequestConfig): Promise<operations.Create6Response>;
    /**
     * Deletes a payable.
     *
     * @remarks
     * Deletes a payable.
     */
    deletePayable2(req: operations.DeletePayable2Request, config?: AxiosRequestConfig): Promise<operations.DeletePayable2Response>;
    /**
     * Deletes a receivable.
     *
     * @remarks
     * Deletes a receivable.
     */
    deleteReceivable2(req: operations.DeleteReceivable2Request, config?: AxiosRequestConfig): Promise<operations.DeleteReceivable2Response>;
    /**
     * Returns project details.
     *
     * @remarks
     * Returns project details.
     */
    getByExternalId1(req: operations.GetByExternalId1Request, config?: AxiosRequestConfig): Promise<operations.GetByExternalId1Response>;
    /**
     * Returns project details.
     *
     * @remarks
     * Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.
     */
    getById9(req: operations.GetById9Request, config?: AxiosRequestConfig): Promise<operations.GetById9Response>;
    /**
     * Returns if cat tool project is created or queued.
     */
    getCATToolProjectInfo(req: operations.GetCATToolProjectInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCATToolProjectInfoResponse>;
    /**
     * Returns Client Contacts information for a project.
     *
     * @remarks
     * Returns Client Contacts information for a project
     */
    getContacts2(req: operations.GetContacts2Request, config?: AxiosRequestConfig): Promise<operations.GetContacts2Response>;
    /**
     * Returns a list of custom field keys and values for a project.
     *
     * @remarks
     * Returns a list of custom field keys and values for a project.
     */
    getCustomFields8(req: operations.GetCustomFields8Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields8Response>;
    /**
     * Returns list of files in a project, that are ready to be delivered to client.
     *
     * @remarks
     * Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>
     */
    getDeliverableFiles(req: operations.GetDeliverableFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliverableFilesResponse>;
    /**
     * Returns details of a file.
     *
     * @remarks
     * Returns details of a file.
     */
    getFileById2(req: operations.GetFileById2Request, config?: AxiosRequestConfig): Promise<operations.GetFileById2Response>;
    /**
     * Downloads a file content.
     *
     * @remarks
     * Downloads a file content.
     */
    getFileContentById(req: operations.GetFileContentByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileContentByIdResponse>;
    /**
     * Returns list of files in a project.
     *
     * @remarks
     * Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.
     */
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * Returns finance information for a project.
     *
     * @remarks
     * Returns finance information for a project.
     */
    getFinance2(req: operations.GetFinance2Request, config?: AxiosRequestConfig): Promise<operations.GetFinance2Response>;
    /**
     * Returns list of jobs in a project.
     *
     * @remarks
     * Returns list of jobs in a project.
     */
    getJobs(req: operations.GetJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsResponse>;
    /**
     * Returns process id.
     */
    getProcessId(req: operations.GetProcessIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProcessIdResponse>;
    /**
     * Updates Client Deadline for a project.
     *
     * @remarks
     * Updates Client Deadline for a project.
     */
    updateClientDeadline(req: operations.UpdateClientDeadlineRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientDeadlineResponse>;
    /**
     * Updates Client Notes for a project.
     *
     * @remarks
     * Updates Client Notes for a project.
     */
    updateClientNotes(req: operations.UpdateClientNotesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientNotesResponse>;
    /**
     * Updates Client Reference Number for a project.
     *
     * @remarks
     * Updates Client Reference Number for a project.
     */
    updateClientReferenceNumber(req: operations.UpdateClientReferenceNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientReferenceNumberResponse>;
    /**
     * Updates Client Contacts for a project.
     *
     * @remarks
     * Updates Client Contacts for a project.
     */
    updateContacts2(req: operations.UpdateContacts2Request, config?: AxiosRequestConfig): Promise<operations.UpdateContacts2Response>;
    /**
     * Updates a custom field with a specified key in a project
     *
     * @remarks
     * Updates a custom field with a specified key in a project
     */
    updateCustomField2(req: operations.UpdateCustomField2Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomField2Response>;
    /**
     * Updates Internal Notes for a project.
     *
     * @remarks
     * Updates Internal Notes for a project.
     */
    updateInternalNotes(req: operations.UpdateInternalNotesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInternalNotesResponse>;
    /**
     * Updates Order Date for a project.
     *
     * @remarks
     * Updates Order Date for a project.
     */
    updateOrderedOn(req: operations.UpdateOrderedOnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrderedOnResponse>;
    /**
     * Updates a payable.
     *
     * @remarks
     * Updates a payable.
     */
    updatePayable2(req: operations.UpdatePayable2Request, config?: AxiosRequestConfig): Promise<operations.UpdatePayable2Response>;
    /**
     * Updates a receivable.
     *
     * @remarks
     * Updates a receivable.
     */
    updateReceivable2(req: operations.UpdateReceivable2Request, config?: AxiosRequestConfig): Promise<operations.UpdateReceivable2Response>;
    /**
     * Updates source language for a project.
     *
     * @remarks
     * Updates source language for a project.
     */
    updateSourceLanguage(req: operations.UpdateSourceLanguageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceLanguageResponse>;
    /**
     * Updates specialization for a project.
     *
     * @remarks
     * Updates specialization for a project.
     */
    updateSpecialization(req: operations.UpdateSpecializationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpecializationResponse>;
    /**
     * Updates target languages for a project.
     *
     * @remarks
     * Updates target languages for a project.
     */
    updateTargetLanguages(req: operations.UpdateTargetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTargetLanguagesResponse>;
    /**
     * Updates instructions for all vendors performing the jobs in a project.
     *
     * @remarks
     * Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.
     */
    updateVendorInstructions(req: operations.UpdateVendorInstructionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVendorInstructionsResponse>;
    /**
     * Updates volume for a project.
     *
     * @remarks
     * Updates volume for a project.
     */
    updateVolume(req: operations.UpdateVolumeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVolumeResponse>;
    /**
     * Uploads file to the project as a file uploaded by PM.
     *
     * @remarks
     * Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation
     */
    uploadFile2(req: operations.UploadFile2Request, config?: AxiosRequestConfig): Promise<operations.UploadFile2Response>;
}
