import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class QuotesSmartV2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds files to the quote as added by PM.
     *
     * @remarks
     * Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>
     */
    addFiles2(req: operations.AddFiles2Request, config?: AxiosRequestConfig): Promise<operations.AddFiles2Response>;
    /**
     * Prepares a ZIP archive that contains the specified files.
     *
     * @remarks
     * Prepares a ZIP archive that contains the specified files.
     */
    archive1(req: shared.FilesDto, config?: AxiosRequestConfig): Promise<operations.Archive1Response>;
    /**
     * Changes quote status if possible (400 Bad Request is returned otherwise).
     *
     * @remarks
     * Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>
     */
    changeStatus3(req: operations.ChangeStatus3Request, config?: AxiosRequestConfig): Promise<operations.ChangeStatus3Response>;
    /**
     * Adds a payable to a quote.
     *
     * @remarks
     * Adds a payable to a quote.
     */
    createPayable3(req: operations.CreatePayable3Request, config?: AxiosRequestConfig): Promise<operations.CreatePayable3Response>;
    /**
     * Adds a receivable to a quote.
     *
     * @remarks
     * Adds a receivable to a quote.
     */
    createReceivable3(req: operations.CreateReceivable3Request, config?: AxiosRequestConfig): Promise<operations.CreateReceivable3Response>;
    /**
     * Creates a new Smart Quote.
     *
     * @remarks
     * Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.
     */
    create7(req: shared.QuoteCreateDTO, config?: AxiosRequestConfig): Promise<operations.Create7Response>;
    /**
     * Deletes a payable.
     *
     * @remarks
     * Deletes a payable.
     */
    deletePayable3(req: operations.DeletePayable3Request, config?: AxiosRequestConfig): Promise<operations.DeletePayable3Response>;
    /**
     * Deletes a receivable.
     *
     * @remarks
     * Deletes a receivable.
     */
    deleteReceivable3(req: operations.DeleteReceivable3Request, config?: AxiosRequestConfig): Promise<operations.DeleteReceivable3Response>;
    /**
     * Returns quote details.
     *
     * @remarks
     * Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.
     */
    getById10(req: operations.GetById10Request, config?: AxiosRequestConfig): Promise<operations.GetById10Response>;
    /**
     * Returns Client Contacts information for a quote.
     *
     * @remarks
     * Returns Client Contacts information for a quote.
     */
    getContacts3(req: operations.GetContacts3Request, config?: AxiosRequestConfig): Promise<operations.GetContacts3Response>;
    /**
     * Returns a list of custom field keys and values for a project.
     *
     * @remarks
     * Returns a list of custom field keys and values for a project.
     */
    getCustomFields9(req: operations.GetCustomFields9Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields9Response>;
    /**
     * Returns details of a file.
     *
     * @remarks
     * Returns details of a file.
     */
    getFileById3(req: operations.GetFileById3Request, config?: AxiosRequestConfig): Promise<operations.GetFileById3Response>;
    /**
     * Downloads a file content.
     *
     * @remarks
     * Downloads a file content.
     */
    getFileContentById1(req: operations.GetFileContentById1Request, config?: AxiosRequestConfig): Promise<operations.GetFileContentById1Response>;
    /**
     * Returns list of files in a quote.
     *
     * @remarks
     * Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.
     */
    getFiles1(req: operations.GetFiles1Request, config?: AxiosRequestConfig): Promise<operations.GetFiles1Response>;
    /**
     * Returns finance information for a quote.
     *
     * @remarks
     * Returns finance information for a quote.
     */
    getFinance3(req: operations.GetFinance3Request, config?: AxiosRequestConfig): Promise<operations.GetFinance3Response>;
    /**
     * Returns list of jobs in a quote.
     *
     * @remarks
     * Returns list of jobs in a quote.
     */
    getJobs1(req: operations.GetJobs1Request, config?: AxiosRequestConfig): Promise<operations.GetJobs1Response>;
    /**
     * Updates Business Days for a quote.
     *
     * @remarks
     * Updates Business Days for a quote.
     */
    updateBusinessDays(req: operations.UpdateBusinessDaysRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBusinessDaysResponse>;
    /**
     * Updates Client Notes for a quote.
     *
     * @remarks
     * Updates Client Notes for a quote.
     */
    updateClientNotes1(req: operations.UpdateClientNotes1Request, config?: AxiosRequestConfig): Promise<operations.UpdateClientNotes1Response>;
    /**
     * Updates Client Reference Number for a quote.
     *
     * @remarks
     * Updates Client Reference Number for a quote.
     */
    updateClientReferenceNumber1(req: operations.UpdateClientReferenceNumber1Request, config?: AxiosRequestConfig): Promise<operations.UpdateClientReferenceNumber1Response>;
    /**
     * Updates Client Contacts for a quote.
     *
     * @remarks
     * Updates Client Contacts for a quote.
     */
    updateContacts3(req: operations.UpdateContacts3Request, config?: AxiosRequestConfig): Promise<operations.UpdateContacts3Response>;
    /**
     * Updates a custom field with a specified key in a quote.
     *
     * @remarks
     * Updates a custom field with a specified key in a quote.
     */
    updateCustomField3(req: operations.UpdateCustomField3Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomField3Response>;
    /**
     * Updates Expected Delivery Date for a quote.
     *
     * @remarks
     * Updates Expected Delivery Date for a quote.
     */
    updateExpectedDeliveryDate(req: operations.UpdateExpectedDeliveryDateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExpectedDeliveryDateResponse>;
    /**
     * Updates Internal Notes for a quote.
     *
     * @remarks
     * Updates Internal Notes for a quote.
     */
    updateInternalNotes1(req: operations.UpdateInternalNotes1Request, config?: AxiosRequestConfig): Promise<operations.UpdateInternalNotes1Response>;
    /**
     * Updates a payable.
     *
     * @remarks
     * Updates a payable.
     */
    updatePayable3(req: operations.UpdatePayable3Request, config?: AxiosRequestConfig): Promise<operations.UpdatePayable3Response>;
    /**
     * Updates Quote Expiry Date for a quote.
     *
     * @remarks
     * Updates Quote Expiry Date for a quote.
     */
    updateQuoteExpiry(req: operations.UpdateQuoteExpiryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQuoteExpiryResponse>;
    /**
     * Updates a receivable.
     *
     * @remarks
     * Updates a receivable.
     */
    updateReceivable3(req: operations.UpdateReceivable3Request, config?: AxiosRequestConfig): Promise<operations.UpdateReceivable3Response>;
    /**
     * Updates source language for a quote.
     *
     * @remarks
     * Updates source language for a quote.
     */
    updateSourceLanguage1(req: operations.UpdateSourceLanguage1Request, config?: AxiosRequestConfig): Promise<operations.UpdateSourceLanguage1Response>;
    /**
     * Updates specialization for a quote.
     *
     * @remarks
     * Updates specialization for a quote.
     */
    updateSpecialization1(req: operations.UpdateSpecialization1Request, config?: AxiosRequestConfig): Promise<operations.UpdateSpecialization1Response>;
    /**
     * Updates target languages for a quote.
     *
     * @remarks
     * Updates target languages for a quote.
     */
    updateTargetLanguages1(req: operations.UpdateTargetLanguages1Request, config?: AxiosRequestConfig): Promise<operations.UpdateTargetLanguages1Response>;
    /**
     * Updates instructions for all vendors performing the jobs in a quote.
     *
     * @remarks
     * Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.
     */
    updateVendorInstructions1(req: operations.UpdateVendorInstructions1Request, config?: AxiosRequestConfig): Promise<operations.UpdateVendorInstructions1Response>;
    /**
     * Updates volume for a quote.
     *
     * @remarks
     * Updates volume for a quote.
     */
    updateVolume1(req: operations.UpdateVolume1Request, config?: AxiosRequestConfig): Promise<operations.UpdateVolume1Response>;
    /**
     * Uploads file to the quote as a file uploaded by PM.
     *
     * @remarks
     * Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).
     */
    uploadFile3(req: operations.UploadFile3Request, config?: AxiosRequestConfig): Promise<operations.UploadFile3Response>;
}
