import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCustomExchangeRatesDataTypeListOfExchangeRates
/** 
 * Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
 * 
**/
export class GetCustomExchangeRatesDataTypeListOfExchangeRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CURRENCY" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=providerExchangeRateDate" })
  providerExchangeRateDate?: Date;
}


export class GetCustomExchangeRatesDataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DATE" })
  date?: GetCustomExchangeRatesDataTypeListOfExchangeRates;
}
