import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordWithAllFields } from "./customobjectrecordwithallfields";
export declare class CustomObjectBulkJobErrorResponse extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: number;
    /**
     * The error message.
     */
    message?: string;
    /**
     * Record data from an object
     */
    record?: CustomObjectRecordWithAllFields;
    /**
     * The CSV record row number. The custom object record data starts at the second row because the first row is the CSV header.
     */
    row?: number;
}
