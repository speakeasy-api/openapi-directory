import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETCustomExchangeRatesRequest extends SpeakeasyBase {
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
     * The target base currency of the tenant. The exchange rates in the response are calculated in relation to the target currency.
     *
     * @remarks
     *
     * The value must be a three-letter currency code, for example, USD.
     *
     */
    currency: string;
    /**
     * End date of the date range for which you want to get exchange rates.
     *
     * @remarks
     *
     * The date must be in yyyy-mm-dd format, for example, 2016-01-16. The end date can be a maximum of 90 days after the start date.
     *
     */
    endDate: string;
    /**
     * Start date of the date range for which you want to get exchange rates.
     *
     * @remarks
     *
     * The date must be in yyyy-mm-dd format, for example, 2016-01-15. The start date cannot be later than the end date.
     *
     */
    startDate: string;
}
export declare class GETCustomExchangeRatesResponse extends SpeakeasyBase {
    contentType: string;
    getCustomExchangeRatesType?: shared.GETCustomExchangeRatesType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
