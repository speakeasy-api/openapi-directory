import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreviewContactInfo extends SpeakeasyBase {
    city?: string;
    /**
     * Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country to calculate tax.
     */
    country?: string;
    county?: string;
    postalCode?: string;
    state?: string;
    taxRegion?: string;
}
