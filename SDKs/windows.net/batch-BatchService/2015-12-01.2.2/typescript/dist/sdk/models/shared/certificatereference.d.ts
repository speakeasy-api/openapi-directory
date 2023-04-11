import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets the location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser.
 */
export declare enum CertificateReferenceStoreLocationEnum {
    Currentuser = "currentuser",
    Localmachine = "localmachine",
    Unmapped = "unmapped"
}
/**
 * A reference to a certificate to be installed on compute nodes in a pool.
 */
export declare class CertificateReference extends SpeakeasyBase {
    /**
     * Gets or sets the location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser.
     */
    storeLocation?: CertificateReferenceStoreLocationEnum;
    /**
     * Gets or sets the name of the certificate store on the compute node into which to install the certificate. The default value is My.
     */
    storeName?: string;
    /**
     * Gets or sets the thumbprint of the certificate.
     */
    thumbprint: string;
    /**
     * Gets or sets the algorithm with which the thumbprint is associated.  This must be sha1.
     */
    thumbprintAlgorithm: string;
    /**
     * Gets or sets which user accounts on the compute node should have access to the private data of the certificate. This may be any subset of the values 'starttask', 'task' and 'rdp', separated by commas. The default is all accounts, corresponding to the string 'starttask,task,rdp'.
     */
    visibility?: string;
}
