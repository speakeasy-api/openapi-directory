import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsErrorResponse } from "./customobjectrecordserrorresponse";
import { CustomObjectRecordWithAllFields } from "./customobjectrecordwithallfields";
/**
 * OK
 *
 * @remarks
 *
 * The 200 response indicates that the records have been partially or completely created.
 *
 * * If the `allowPartialSuccess` flag is set to `false`, the 200 response indicates that all object records have been successfully created.
 * * If the `allowPartialSuccess` flag is set to `true`, the 200 response indicates that some records might not be succesffully created and the error information might be contained in the response body.
 *
 */
export declare class PostCustomObjectRecordsResponse extends SpeakeasyBase {
    error?: CustomObjectRecordsErrorResponse;
    /**
     * The custom object records that are succesfully created and stored
     */
    records?: CustomObjectRecordWithAllFields[];
}
