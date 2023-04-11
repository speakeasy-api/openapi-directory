import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyFormatInfo } from "./currencyformatinfo";
/**
 * Object with data from the store's configuration - stored in VTEX's License Manager.
 */
export declare class StorePreferencesData extends SpeakeasyBase {
    /**
     * Three letters ISO code of the country (ISO 3166 ALPHA-3).
     */
    countryCode: string;
    /**
     * Currency code in ISO 4217. For example, `BRL`.
     */
    currencyCode: string;
    /**
     * Object with currency format details.
     */
    currencyFormatInfo: CurrencyFormatInfo;
    /**
     * Currency Locale Code in LCID in decimal.
     */
    currencyLocale: number;
    /**
     * Currency symbol.
     */
    currencySymbol: string;
    /**
     * Time zone from where the order was made.
     */
    timeZone: string;
}
