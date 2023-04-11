import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price Variation object.
 */
export declare class PricingConfigurationPriceVariation extends SpeakeasyBase {
    /**
     * Lower variation limit.
     */
    lowerLimit?: number;
    /**
     * Upper variation limit.
     */
    upperLimit?: number;
}
export declare class PricingConfigurationTradePolicyConfigs extends SpeakeasyBase {
    /**
     * Trade Policy Minimum Markup.
     */
    minimumMarkup?: number;
    /**
     * Defines if the Price Rule should affect the list price too.
     */
    rulesShouldAffectListPrice?: boolean;
    /**
     * Trade Policy ID.
     */
    tradePolicyId?: string;
}
/**
 * OK
 */
export declare class PricingConfiguration extends SpeakeasyBase {
    /**
     * Defines if access to the Pricing APIs is blocked for external requests.
     */
    blockAccount?: boolean;
    /**
     * Array with all blocked routes.
     */
    blockedRoutes?: string[];
    /**
     * Account default markup.
     */
    defaultMarkup: number;
    /**
     * Defines if the account has migrated to Pricing V2.
     */
    hasMigrated: boolean;
    /**
     * Defines if optional base price is allowed.
     */
    hasOptionalBasePrice?: boolean;
    /**
     * Deprecated. Use the `priceInheritance` field instead.
     */
    hasPriceInheritance?: boolean;
    /**
     * Pricing V2 migration status.
     */
    migrationStatus?: string;
    /**
     * Account minimum markup.
     */
    minimumMarkups: Record<string, number>;
    /**
     * Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices.
     */
    priceInheritance?: string;
    /**
     * Price Table Limit.
     */
    priceTableLimit?: number;
    /**
     * The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`.
     */
    priceTableSelectionStrategy?: string;
    /**
     * Price Variation object.
     */
    priceVariation?: PricingConfigurationPriceVariation;
    /**
     * Overrides prices from sellers.
     */
    sellersToOverride?: any[];
    /**
     * Trade Policy Configurations array.
     */
    tradePolicyConfigs?: PricingConfigurationTradePolicyConfigs[];
}
