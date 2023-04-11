import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Certificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a certificate to the specified account.
     */
    certificateAdd(req: operations.CertificateAddRequest, config?: AxiosRequestConfig): Promise<operations.CertificateAddResponse>;
    /**
     * Cancels a failed deletion of a certificate from the specified account.
     */
    certificateCancelDeletion(req: operations.CertificateCancelDeletionRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCancelDeletionResponse>;
    /**
     * Deletes a certificate from the specified account.
     */
    certificateDelete(req: operations.CertificateDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CertificateDeleteResponse>;
    /**
     * Gets information about the specified certificate.
     */
    certificateGet(req: operations.CertificateGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificateGetResponse>;
    /**
     * Lists all of the certificates that have been added to the specified account.
     */
    certificateList(req: operations.CertificateListRequest, config?: AxiosRequestConfig): Promise<operations.CertificateListResponse>;
}
