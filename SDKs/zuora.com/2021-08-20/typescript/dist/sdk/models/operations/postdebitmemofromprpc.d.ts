import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTDebitMemoFromPrpcRequest extends SpeakeasyBase {
    debitMemoFromChargeType: shared.DebitMemoFromChargeType;
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
     *
     * @remarks
     * The minor version of the Zuora REST API. See [Minor Version](https://www.zuora.com/developer/api-reference/#section/API-Versions/Minor-Version) for information about REST API version control.
     *
     * This header affects the availability of the following request fields:
     * * `charges` > `amount`
     * * `charges` > `memoItemAmount`
     * * `charges` > `chargeId`
     * * `charges` > `productRatePlanChargeId`
     * * `charges` > `comment`
     * * `charges` > `description`
     *
     */
    zuoraVersion?: string;
}
export declare class POSTDebitMemoFromPrpcResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: shared.GETDebitMemoType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
