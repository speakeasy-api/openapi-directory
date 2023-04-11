import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format of the certificate data.
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
     * The format of the certificate data.
     */
    certificateFormat?: CertificateAddParameterCertificateFormatEnum;
    /**
     * The base64-encoded contents of the certificate. The maximum size is 10KB.
     */
    data: string;
    /**
     * The password to access the certificate's private key.
     */
    password?: string;
    /**
     * The X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed).
     */
    thumbprint: string;
    /**
     * The algorithm used to derive the thumbprint. This must be sha1.
     */
    thumbprintAlgorithm: string;
}
