import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";
/**
 * Failed schema validation
 *
 * @remarks
 *
 * For the batch `update` action, the 400 response only returns when the `allowPartialSuccess` flag is set to `false` and the batch records have failed schema validation.
 *
 */
export declare class CustomObjectRecordsErrorResponse extends SpeakeasyBase {
    code?: number;
    details?: CustomObjectRecordsWithError[];
    message?: string;
}
