import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTCustomObjectRecordsRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
    postCustomObjectRecordsRequest: shared.PostCustomObjectRecordsRequest;
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
export declare class POSTCustomObjectRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Failed schema validation
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
    postCustomObjectRecordsResponse?: shared.PostCustomObjectRecordsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
