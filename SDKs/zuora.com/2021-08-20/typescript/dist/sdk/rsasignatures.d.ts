import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RSASignatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Decrypt an RSA signature
     *
     * @remarks
     * The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. You use rsa_signatures to generate the required digital signature and token for a Payment Pages 2.0 form, and then you use the decrypt REST service to decrypt the signature to validate the signature and key.
     *
     * This REST service should be used only when you implement Payment Pages 2.0.
     *
     */
    postDecryptRSASignatures(req: operations.POSTDecryptRSASignaturesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDecryptRSASignaturesResponse>;
    /**
     * Generate an RSA signature
     *
     * @remarks
     * The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. The POST rsa_signatures call generates and returns the required digital signature and token for a Payment Pages 2.0 form. You need to pass the generated signature to your client for it to access Payment Pages 2.0.
     *
     * This REST service should be used only when you implement Payment Pages 2.0.
     *
     * **Note:** To avoid potential credit card fraud attacks, you should secure your Payment Pages from being accessed by fraudulent users before you issue client-side digital signatures and tokens. See [Manage Token Issuance](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Manage_Token_Issuance) for more information.
     *
     */
    postRSASignatures(req: operations.POSTRSASignaturesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSASignaturesResponse>;
}
