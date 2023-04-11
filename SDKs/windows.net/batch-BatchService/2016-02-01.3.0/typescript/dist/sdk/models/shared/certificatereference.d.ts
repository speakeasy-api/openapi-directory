import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser.
 */
export declare enum CertificateReferenceStoreLocationEnum {
    Currentuser = "currentuser",
    Localmachine = "localmachine",
    Unmapped = "unmapped"
}
export declare enum CertificateReferenceVisibilityEnum {
    Starttask = "starttask",
    Task = "task",
    Remoteuser = "remoteuser",
    Unmapped = "unmapped"
}
/**
 * A reference to a certificate to be installed on compute nodes in a pool.
 */
export declare class CertificateReference extends SpeakeasyBase {
    /**
     * The location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser.
     */
    storeLocation?: CertificateReferenceStoreLocationEnum;
    /**
     * The name of the certificate store on the compute node into which to install the certificate. The default value is My.
     */
    storeName?: string;
    /**
     * The thumbprint of the certificate.
     */
    thumbprint: string;
    /**
     * The algorithm with which the thumbprint is associated. This must be sha1.
     */
    thumbprintAlgorithm: string;
    /**
     * Which user accounts on the compute node should have access to the private data of the certificate. This may be any subset of the values 'starttask', 'task' and 'remoteuser', separated by commas. The default is all accounts, corresponding to the string 'starttask,task,remoteuser'.
     */
    visibility?: CertificateReferenceVisibilityEnum[];
}
