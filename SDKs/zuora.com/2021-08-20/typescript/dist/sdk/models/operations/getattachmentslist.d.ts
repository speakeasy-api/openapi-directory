import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the object to list attachements for.
 *
 * @remarks
 *
 */
export declare enum GETAttachmentsListObjectTypeEnum {
    Account = "account",
    Invoice = "invoice",
    Subscription = "subscription",
    Creditmemo = "creditmemo",
    Debitmemo = "debitmemo"
}
export declare class GETAttachmentsListRequest extends SpeakeasyBase {
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
     * ID of the object to list attachements for.
     *
     * @remarks
     *  - If `object-type` is `account`, specify an account ID.
     *  - If `object-type` is `invoice`, specify an invoice ID.
     *  - If `object-type` is `subscription`, specify a subscription number.
     *  - If `object-type` is `creditmemo`, specify a credit memo ID.
     *  - If `object-type` is `debitmemo`, specify a debit memo ID.
     *
     */
    objectKey: string;
    /**
     * The type of the object to list attachements for.
     *
     * @remarks
     *
     */
    objectType: GETAttachmentsListObjectTypeEnum;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GETAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    getAttachmentsResponseType?: shared.GETAttachmentsResponseType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
