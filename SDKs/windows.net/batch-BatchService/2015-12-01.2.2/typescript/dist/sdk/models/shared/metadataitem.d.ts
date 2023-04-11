import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A metadata item associated with an Azure Batch resource. The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
 */
export declare class MetadataItem extends SpeakeasyBase {
    /**
     * Gets or sets the name of the metadata item.
     */
    name?: string;
    /**
     * Gets or sets the value of the metadata item.
     */
    value?: string;
}
