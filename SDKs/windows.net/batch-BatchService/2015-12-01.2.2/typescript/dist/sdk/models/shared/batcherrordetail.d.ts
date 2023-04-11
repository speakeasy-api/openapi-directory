import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An item of additional information included in an Azure Batch error response.
 */
export declare class BatchErrorDetail extends SpeakeasyBase {
    /**
     * Gets or sets an identifier specifying the meaning of the Value property.
     */
    key?: string;
    /**
     * Gets or sets the additional information included with the error response.
     */
    value?: string;
}
