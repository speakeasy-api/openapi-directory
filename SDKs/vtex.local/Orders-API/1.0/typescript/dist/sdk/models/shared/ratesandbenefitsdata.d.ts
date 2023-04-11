import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on promotions and taxes that apply to the order.
 */
export declare class RatesAndBenefitsData extends SpeakeasyBase {
    /**
     * ID of the rate or benefit.
     */
    id: string;
    /**
     * Information about order's promotions and taxes identifiers.
     */
    rateAndBenefitsIdentifiers: string[];
}
