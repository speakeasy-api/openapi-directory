import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETEventTriggersRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
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
     * The status of the event trigger.
     */
    active?: string;
    /**
     * The Zuora object that trigger condition is defined upon. Should be specified in the pattern: ^[A-Z][\\w\\-]*$
     */
    baseObject?: string;
    /**
     * The event type name. Should be specified in the pattern: ^[A-Za-z]{1,}[\w\-]*$
     */
    eventTypeName?: string;
    /**
     * The maximum number of data records to be returned. Default to 10 if absent.
     */
    limit?: number;
    /**
     * The first index of the query result. Default to 0 if absent, and the minimum is 0.
     */
    start?: number;
}
/**
 * OK
 */
export declare class GETEventTriggers200ApplicationJSON extends SpeakeasyBase {
    data?: shared.EventTrigger[];
    /**
     * The link to the next page. No value if it is last page.
     */
    next?: string;
}
export declare class GETEventTriggersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    getEventTriggers200ApplicationJSONObject?: GETEventTriggers200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
