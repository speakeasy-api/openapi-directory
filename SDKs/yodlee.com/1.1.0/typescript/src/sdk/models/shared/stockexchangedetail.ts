import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StockExchangeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=exchangeCode" })
  exchangeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;
}
