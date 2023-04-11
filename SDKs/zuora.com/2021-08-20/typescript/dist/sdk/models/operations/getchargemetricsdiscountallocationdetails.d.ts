import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETChargeMetricsDiscountAllocationDetailsRequest extends SpeakeasyBase {
    /**
     * Expressed as MIME types that the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the `Content-Type` response header. The possible response MIME types are `application/json-seq` compatible with http://jsonlines.org/, and `text/csv` compatible with RFC 4180. `application/json-seq` is the default response MIME type. If the `Accept` header is not sepecified, or set * /*, the response body is returned in application/json-seq MIME type.
     *
     * @remarks
     *
     */
    accept?: string;
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
     * The starting date and time of a time range when changes are made to charge metrics, in `yyyy-mm-ddThh:mm:ssZ` format. For example, `2020-08-18T09:01:11Z`. The timestamp maps to the `UpdatedOn` timestamp of the to-be-exported object.
     *
     * @remarks
     *
     */
    fromTimestamp: Date;
    /**
     * The end date and time of a time range when changes are made to charge metrics, in `yyyy-mm-ddThh:mm:ssZ` format. For example, `2020-08-20T09:01:11Z`. The timestamp maps to the `UpdatedOn` timestamp of the to-be-exported object.
     *
     * @remarks
     *
     */
    toTimestamp: Date;
}
export declare class GETChargeMetricsDiscountAllocationDetailsResponse extends SpeakeasyBase {
    chargeMetricsDiscountAllocationDetailResponse?: shared.ChargeMetricsDiscountAllocationDetailResponse;
    /**
     * Invalid Parameters
     */
    commonReasonsErrorResponse?: shared.CommonReasonsErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
