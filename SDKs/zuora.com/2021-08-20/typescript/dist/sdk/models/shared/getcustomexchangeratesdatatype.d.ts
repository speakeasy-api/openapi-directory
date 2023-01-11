import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
 *
**/
export declare class GetCustomExchangeRatesDataTypeListOfExchangeRates extends SpeakeasyBase {
    currency?: string;
    providerExchangeRateDate?: Date;
}
export declare class GetCustomExchangeRatesDataType extends SpeakeasyBase {
    date?: GetCustomExchangeRatesDataTypeListOfExchangeRates;
}
