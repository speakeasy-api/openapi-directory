import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The APIs within this group are used to save documents and query them by id.
 *
 * @remarks
 *
 * If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.
 *
 * Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:
 *
 * ```
 * A chave primária será informada pelo cliente através do atributo 'id'
 * ```
 *
 * Otherwise, a new document will always be created.
 *
 * ### Response status code
 *
 * 1. Status Code 201: Document created successfully
 * 2. Status Code 200: Document changed successfully
 * 3. Status Code 304: There were no changes to the document
 * 4. Status Code 400: Invalid information in JSON
 * 5. Status Code 403: Unauthorized access
 *
 */
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new document
     *
     * @remarks
     * Creates documents through a JSON object where the key is the name of the field.
     */
    createnewdocument(req: operations.CreatenewdocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreatenewdocumentResponse>;
    /**
     * Create or update entire document
     */
    createorupdateentiredocument(req: operations.CreateorupdateentiredocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateorupdateentiredocumentResponse>;
    /**
     * Create or update partial document
     */
    createorupdatepartialdocument(req: operations.CreateorupdatepartialdocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateorupdatepartialdocumentResponse>;
    /**
     * Delete document
     *
     * @remarks
     * It allows to delete a document.
     */
    deletedocument(req: operations.DeletedocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeletedocumentResponse>;
    /**
     * Get document
     *
     * @remarks
     * Retrieves a document.
     *
     * Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.
     */
    getdocument(req: operations.GetdocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetdocumentResponse>;
    /**
     * Update entire document
     */
    updateentiredocument(req: operations.UpdateentiredocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateentiredocumentResponse>;
    /**
     * Update partial document
     */
    updatepartialdocument(req: operations.UpdatepartialdocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdatepartialdocumentResponse>;
}
