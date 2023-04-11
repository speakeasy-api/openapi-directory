import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETEmailHistoryRequest extends SpeakeasyBase {
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
     * The end date and time of records to be returned. Defaults to now. Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days.
     */
    endTime?: Date;
    /**
     * Category of records to be returned by event category.
     *
     * @remarks
     *
     * The following formats are supported:
     * * `{Event Type Namespace}:{Event Type Name}` if the Custom Events feature is enabled in your tenant. For example: `user.notification:NewSubscriptionCreated`.
     * * Numeric code of the event category if the Custom Events feature is not enabled in your tenant. For example, `1210`. See [Event Category Code](https://knowledgecenter.zuora.com/DC_Developers/AA_REST_API/Event_Categories_for_Notification_Histories) for more information.
     *
     * **Note**: The `eventCategory` will be ignored if the `objectId` is present in query parameters.
     *
     */
    eventCategory?: string;
    /**
     * If `true`, only returns failed records. When `false`, returns all records in the given date range. Defaults to `true` when not specified.
     *
     * @remarks
     *
     * **Note**: The `failedOnly` will be treated as `false` if the `objectId` is present in query parameters.
     *
     */
    failedOnly?: boolean;
    /**
     * The Id of an object that triggered an email notification.
     *
     * @remarks
     *
     * **Note**: If the `objectId` is present in query parameters, the `eventCategory` will be ignored and the `failedOnly` will be treated as `false`.
     *
     */
    objectId?: string;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
    /**
     * The initial date and time of records to be returned. Defaults to (end time - 1 day). Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days.
     */
    startTime?: Date;
}
export declare class GETEmailHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getEmailHistoryVOsType?: shared.GETEmailHistoryVOsType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
