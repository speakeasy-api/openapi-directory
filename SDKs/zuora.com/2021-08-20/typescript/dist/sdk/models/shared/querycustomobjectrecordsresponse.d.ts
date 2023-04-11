import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordWithAllFields } from "./customobjectrecordwithallfields";
/**
 * OK
 */
export declare class QueryCustomObjectRecordsResponse extends SpeakeasyBase {
    /**
     * The record count of the given custom object type
     */
    count: number;
    records: CustomObjectRecordWithAllFields[];
}
