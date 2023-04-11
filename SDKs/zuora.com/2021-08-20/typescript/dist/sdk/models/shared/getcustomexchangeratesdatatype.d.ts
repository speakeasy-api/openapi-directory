import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
 *
 * @remarks
 *
 */
export declare class GETCustomExchangeRatesDataTypeListOfExchangeRates extends SpeakeasyBase {
    /**
     * The exchange rate on the **providerExchangeRateDate**. The field name is the ISO currency code of the currency, for example, `EUR`.
     *
     * @remarks
     *
     * There may be more than one currency returned for a given **providerExchangeRateDate**. If the rate for a certain currency is not available on the **providerExchangeRateDate**, the currency is not returned in the response.
     *
     */
    currency?: string;
    /**
     * The date of the exchange rate used. The date is in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     * Corresponds to the value specified in the Provider Exchange Rate Date column in the Import Foreign Exchange Rates template when you uploaded the rates through the Mass Updater.
     *
     */
    providerExchangeRateDate?: Date;
}
export declare class GETCustomExchangeRatesDataType extends SpeakeasyBase {
    /**
     * Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
     *
     * @remarks
     *
     */
    date?: GETCustomExchangeRatesDataTypeListOfExchangeRates;
}
