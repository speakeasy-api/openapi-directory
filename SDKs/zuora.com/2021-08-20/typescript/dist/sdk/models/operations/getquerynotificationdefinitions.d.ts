import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETQueryNotificationDefinitionsRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     * Note that you must regenerate the OAuth token after the Custom Events feature is enabled in your Zuora tenant. The OAuth tokens generated before this feature is turned on will not work.
     *
     */
    authorization: string;
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
     * The ID of the email template.
     */
    emailTemplateId?: string;
    /**
     * The name of the event.
     */
    eventTypeName?: string;
    /**
     * The maximum number of results the query should return.
     */
    limit?: number;
    /**
     * Id of the profile.
     */
    profileId?: string;
    /**
     * The first index of the query result.
     */
    start?: number;
}
/**
 * OK
 */
export declare class GETQueryNotificationDefinitions200ApplicationJSON extends SpeakeasyBase {
    data?: shared.GETPublicNotificationDefinitionResponse[];
    /**
     * The URI to query the next page of data, e.g. '/notification-definitions?start=1&limit=10'. The start equals request's start+limit, and the limit equals the request's limit. If the current page is the last page, this value is null.
     */
    next?: string;
}
export declare class GETQueryNotificationDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    getQueryNotificationDefinitions200ApplicationJSONObject?: GETQueryNotificationDefinitions200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
