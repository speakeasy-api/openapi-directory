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
     * Sets a list of application packages to be installed on each compute node in the pool. If omitted, any existing application package references are left unchanged.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * Sets a list of certificates to be installed on each compute node in the pool. If omitted, any existing certificate references are left unchanged.
     */
    certificateReferences?: CertificateReference[];
    /**
     * Sets a list of name-value pairs associated with the pool as metadata. If omitted, any existing metadata is left unchanged.
     */
    metadata?: MetadataItem[];
    /**
     * A task defined on a pool and run by compute nodes when they join the pool.
     */
    startTask?: StartTask;
}
