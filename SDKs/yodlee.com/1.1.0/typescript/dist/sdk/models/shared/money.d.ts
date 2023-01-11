import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MoneyCurrencyEnum {
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
export declare class Money extends SpeakeasyBase {
    amount: number;
    currency: MoneyCurrencyEnum;
}
