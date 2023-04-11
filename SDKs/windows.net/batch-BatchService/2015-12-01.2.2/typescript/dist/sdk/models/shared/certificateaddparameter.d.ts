import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets the format of the certificate data. This must be pfx.
 */
export declare enum CertificateAddParameterCertificateFormatEnum {
    Pfx = "pfx",
    Cer = "cer",
    Unmapped = "unmapped"
}
/**
 * A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine.
 */
export declare class CertificateAddParameter extends SpeakeasyBase {
    /**
     * Gets or sets the format of the certificate data. This must be pfx.
     */
    certificateFormat?: CertificateAddParameterCertificateFormatEnum;
    /**
     * Gets or sets the base64-encoded contents of the .pfx file containing the certificate. The maximum size is 10KB. This property is not populated by the Get Certificate operation.
     */
    data: string;
    /**
     * Gets or sets the password to access the certificate's private key. This property is not populated by the Get Certificate operation.
     */
    password?: string;
    /**
     * Get or sets the X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed).
     */
    thumbprint: string;
    /**
     * Gets or sets the algorithm used to derive the thumbprint. This must be sha1.
     */
    thumbprintAlgorithm: string;
}
