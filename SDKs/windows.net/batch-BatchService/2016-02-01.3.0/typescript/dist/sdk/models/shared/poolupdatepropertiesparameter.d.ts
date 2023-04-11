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
     * A list of application packages to be installed on each compute node in the pool. If you specify an empty collection, any existing application packages references are removed from the pool.
     */
    applicationPackageReferences: ApplicationPackageReference[];
    /**
     * A list of certificates to be installed on each compute node in the pool. If you specify an empty collection, any existing certificate references are removed from the pool.
     */
    certificateReferences: CertificateReference[];
    /**
     * A list of name-value pairs associated with the pool as metadata. If you specify an empty collection, any existing metadata is removed from the pool.
     */
    metadata: MetadataItem[];
    /**
     * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
     */
    startTask?: StartTask;
}
