import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MoneyCurrencyEnum {
    Aud = "AUD",
    Brl = "BRL",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Hkd = "HKD",
    Idr = "IDR",
    Inr = "INR",
    Jpy = "JPY",
    Nzd = "NZD",
    Sgd = "SGD",
    Usd = "USD",
    Zar = "ZAR",
    Cny = "CNY",
    Vnd = "VND",
    Myr = "MYR",
    Chf = "CHF"
}


export class Money extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: MoneyCurrencyEnum;
}
