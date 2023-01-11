import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserResponsePreferencesCurrencyEnum {
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

export enum UserResponsePreferencesLocaleEnum {
    EnUs = "en_US",
    EnEs = "en_ES",
    FrCa = "fr_CA",
    ZhCn = "zh_CN"
}


export class UserResponsePreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: UserResponsePreferencesCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=dateFormat" })
  dateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: UserResponsePreferencesLocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
