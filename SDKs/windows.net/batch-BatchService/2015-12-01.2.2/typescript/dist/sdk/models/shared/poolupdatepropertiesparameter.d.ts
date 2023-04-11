import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { CertificateReference } from "./certificatereference";
import { MetadataItem } from "./metadataitem";
import { StartTask } from "./starttask";
/**
 * Parameters for a CloudPoolOperations.UpdateProperties request.
 */
export declare class PoolUpdatePropertiesParameter extends SpeakeasyBase {
    /**
     * Sets a list of application packages to be installed on each compute node in the pool. If you specify an empty collection, any existing application packages references are removed from the pool.
     */
    applicationPackageReferences: ApplicationPackageReference[];
    /**
     * Sets a list of certificates to be installed on each compute node in the pool. If you specify an empty collection, any existing certificate references are removed from the pool.
     */
    certificateReferences: CertificateReference[];
    /**
     * Sets a list of name-value pairs associated with the pool as metadata. If you specify an empty collection, any existing metadata is removed from the pool.
     */
    metadata: MetadataItem[];
    /**
     * A task defined on a pool and run by compute nodes when they join the pool.
     */
    startTask?: StartTask;
}
