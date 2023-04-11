import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An item of additional information included in an Azure Batch error response.
 */
export declare class BatchErrorDetail extends SpeakeasyBase {
    /**
     * An identifier specifying the meaning of the Value property.
     */
    key?: string;
    /**
     * The additional information included with the error response.
     */
    value?: string;
}
