import { SpeakeasyBase } from "../../../internal/utils";
import { GETCustomExchangeRatesDataType } from "./getcustomexchangeratesdatatype";
export declare class GETCustomExchangeRatesType extends SpeakeasyBase {
    /**
     * - If `true`, the exchange rate in the response is an inverse exchange rate.
     *
     * @remarks
     * - If `false`, the exchange rate in the response is not an inverse exchange rate.
     * The value is determined by the **Use inverse rate** checkbox in your Zuora Finance Manage Currency Conversion settings.
     *
     */
    inverse?: boolean;
    /**
     * Container for exchange rate data. Contains a set of fields that provide exchange rate data for each day between the specified `startDate` and `endDate` (inclusive).
     *
     * @remarks
     *
     */
    rates?: GETCustomExchangeRatesDataType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
