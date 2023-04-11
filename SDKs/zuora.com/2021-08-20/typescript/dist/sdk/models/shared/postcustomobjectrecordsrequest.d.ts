import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCustomObjectRecordsRequest extends SpeakeasyBase {
    /**
     * Indicates whether the records that pass the schema validation should be created when not all records in the request pass the schema validation.
     */
    allowPartialSuccess?: boolean;
    /**
     * A list of custom object records to be created
     */
    records: Record<string, any>[];
}
