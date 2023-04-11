import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTCustomObjectRecordsBatchUpdateOrDeleteRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
    customObjectRecordBatchRequest: shared.CustomObjectRecordBatchRequest;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * API version that determines the response schema. The default version is used if this parameter is not included. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     */
    zuoraVersion?: Date;
    /**
     * Specifies the custom object's API name as object. It is case-sensitive.
     */
    object: string;
}
export declare class POSTCustomObjectRecordsBatchUpdateOrDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     *
     * @remarks
     *
     * For the bacth `delete` action, it indicates the batch records have been successfully deleted.
     *
     * For the batch `update` action, it indicates that the batch records have been partially or completely updated.
     *
     * * If the `allowPartialSuccess` flag is set to `false`, the 200 response indicates that all object records have been successfully updated.
     * * If the `allowPartialSuccess` flag is set to `true`, the 200 response indicates that some records might not be succesffully updated and the error information might be contained in the response body.
     *
     */
    customObjectRecordsBatchUpdatePartialSuccessResponse?: shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse;
    /**
     * Failed schema validation
     *
     * @remarks
     *
     * For the batch `update` action, the 400 response only returns when the `allowPartialSuccess` flag is set to `false` and the batch records have failed schema validation.
     *
     */
    customObjectRecordsErrorResponse?: shared.CustomObjectRecordsErrorResponse;
    /**
     * Internal error. Retry the returned records.
     */
    customObjectRecordsThrottledResponse?: shared.CustomObjectRecordsThrottledResponse;
    /**
     * Unauthorized
     */
    errorResponse401Record?: shared.ErrorResponse401Record;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
