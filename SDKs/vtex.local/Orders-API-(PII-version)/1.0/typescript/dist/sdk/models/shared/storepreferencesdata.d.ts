import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyFormatInfo } from "./currencyformatinfo";
export declare class StorePreferencesData extends SpeakeasyBase {
    /**
     * Three letter ISO country code.
     */
    countryCode: string;
    /**
     * Currency code.
     */
    currencyCode: string;
    currencyFormatInfo: CurrencyFormatInfo;
    /**
     * Currency locale.
     */
    currencyLocale: number;
    /**
     * Currency symbol.
     */
    currencySymbol: string;
    /**
     * Time zone.
     */
    timeZone: string;
}
