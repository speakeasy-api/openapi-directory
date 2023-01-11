import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDocument - Delete Document
     *
     * The delete document service allows the consumer to delete a document. The deleted document will not be returned in the get documents API. The HTTP response code is 204 (success without content).<br>Documents can be deleted only if the document related dataset attributes are subscribed.<br>
    **/
    deleteDocument(req: operations.DeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentResponse>;
    /**
     * downloadDocument - Download a Document
     *
     * The get document details service allows consumers to download a document. The document is provided in base64.<br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>
    **/
    downloadDocument(req: operations.DownloadDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DownloadDocumentResponse>;
    /**
     * getDocuments - Get Documents
     *
     * The get documents service allows customers to search or retrieve metadata related to documents. <br>The API returns the document as per the input parameters passed. If no date range is provided then all downloaded documents will be retrieved. Details of deleted documents or documents associated to closed providerAccount will not be returned. <br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>
    **/
    getDocuments(req: operations.GetDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentsResponse>;
}
