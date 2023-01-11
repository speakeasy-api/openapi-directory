import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserRequestPreferencesCurrencyEnum {
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
export declare enum UserRequestPreferencesLocaleEnum {
    EnUs = "en_US",
    EnEs = "en_ES",
    FrCa = "fr_CA",
    ZhCn = "zh_CN"
}
export declare class UserRequestPreferences extends SpeakeasyBase {
    currency?: UserRequestPreferencesCurrencyEnum;
    dateFormat?: string;
    locale?: UserRequestPreferencesLocaleEnum;
    timeZone?: string;
}
