import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteCertificateError } from "./deletecertificateerror";
/**
 * Gets or sets the previous state of the certificate. This property is not set if the certificate is in its initial Active state.
 */
export declare enum CertificatePreviousStateEnum {
    Active = "active",
    Deleting = "deleting",
    Deletefailed = "deletefailed"
}
/**
 * Gets or sets the current state of the certificate.
 */
export declare enum CertificateStateEnum {
    Active = "active",
    Deleting = "deleting",
    Deletefailed = "deletefailed"
}
/**
 * A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine.
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * An error encountered by the Batch service when deleting a certificate.
     */
    deleteCertificateError?: DeleteCertificateError;
    /**
     * Gets or sets the previous state of the certificate. This property is not set if the certificate is in its initial Active state.
     */
    previousState?: CertificatePreviousStateEnum;
    /**
     * Gets or sets the time at which the certificate entered its previous state.  This property is not set if the certificate is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * Gets or sets the public part of the certificate as a base-64 encoded .cer file.
     */
    publicData?: string;
    /**
     * Gets or sets the current state of the certificate.
     */
    state?: CertificateStateEnum;
    /**
     * Gets or sets the time at which the certificate entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Get or sets the X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed).
     */
    thumbprint?: string;
    /**
     * Gets or sets the algorithm used to derive the thumbprint. This must be sha1.
     */
    thumbprintAlgorithm?: string;
    /**
     * Gets or sets the URL of the certificate.
     */
    url?: string;
}
