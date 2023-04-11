import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { CertificateReference } from "./certificatereference";
import { MetadataItem } from "./metadataitem";
import { StartTask } from "./starttask";
/**
 * Parameters for a CloudPoolOperations.Patch request.
 */
export declare class PoolPatchParameter extends SpeakeasyBase {
    /**
     * A list of application packages to be installed on each compute node in the pool. If omitted, any existing application package references are left unchanged.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * A list of certificates to be installed on each compute node in the pool. If omitted, any existing certificate references are left unchanged.
     */
    certificateReferences?: CertificateReference[];
    /**
     * A list of name-value pairs associated with the pool as metadata. If omitted, any existing metadata is left unchanged.
     */
    metadata?: MetadataItem[];
    /**
     * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
     */
    startTask?: StartTask;
}
