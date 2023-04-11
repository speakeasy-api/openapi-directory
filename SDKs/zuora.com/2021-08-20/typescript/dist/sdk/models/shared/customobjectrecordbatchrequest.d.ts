import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordBatchAction } from "./customobjectrecordbatchaction";
/**
 * Request of processing custom object records in batch.
 */
export declare class CustomObjectRecordBatchRequest extends SpeakeasyBase {
    /**
     * The batch action on custom object records
     */
    action: CustomObjectRecordBatchAction;
}
