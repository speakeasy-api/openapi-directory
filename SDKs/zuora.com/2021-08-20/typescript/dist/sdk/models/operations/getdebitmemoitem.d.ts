import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETDebitMemoItemRequest extends SpeakeasyBase {
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
     * The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.
     *
     * @remarks
     *
     */
    debitMemoId: string;
    /**
     * The unique ID of a debit memo item. You can get the debit memo item ID from the response of [List debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems).
     *
     * @remarks
     *
     */
    dmitemid: string;
    /**
     *
     * @remarks
     * The minor version of the Zuora REST API. See [Minor Version](https://www.zuora.com/developer/api-reference/#section/API-Versions/Minor-Version) for information about REST API version control.
     *
     * This header affects the availability of the following response fields:
     * * `taxItems`
     * * `taxationItems`
     * * `comment`
     * * `description`
     *
     */
    zuoraVersion?: string;
}
export declare class GETDebitMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoItemType?: shared.GETDebitMemoItemType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
