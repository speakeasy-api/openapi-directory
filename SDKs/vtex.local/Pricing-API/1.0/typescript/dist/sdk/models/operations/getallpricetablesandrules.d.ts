import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetallpricetablesandrulesServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class GetallpricetablesandrulesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
}
/**
 * The rule will be active during this time range.
 */
export declare class Getallpricetablesandrules200ApplicationJSONRulesContextDateRange extends SpeakeasyBase {
    /**
     * Date when rule will be activated. Date format: `RFC3339`.
     */
    from?: string;
    /**
     * Date when the rule will be deactivated. Date format: `RFC3339`.
     */
    to?: string;
}
/**
 * For an item to be eligible to the rule, it's markup should be in this Markup Range.
 */
export declare class Getallpricetablesandrules200ApplicationJSONRulesContextMarkupRange extends SpeakeasyBase {
    /**
     * Item markup should be greater than or equal to this value.
     */
    from?: number;
    /**
     * Item markup should be less than or equal to this value.
     */
    to?: number;
}
/**
 * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
 */
export declare class Getallpricetablesandrules200ApplicationJSONRulesContext extends SpeakeasyBase {
    /**
     * Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.
     */
    brands?: Record<string, string>;
    /**
     * Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.
     */
    categories?: Record<string, string>;
    /**
     * The rule will be active during this time range.
     */
    dateRange?: Getallpricetablesandrules200ApplicationJSONRulesContextDateRange;
    /**
     * Internal Categories.
     */
    internalCategories?: Record<string, any>;
    /**
     * For an item to be eligible to the rule, it's markup should be in this Markup Range.
     */
    markupRange?: Getallpricetablesandrules200ApplicationJSONRulesContextMarkupRange;
    /**
     * Stock statuses.
     */
    stockStatuses?: Record<string, any>;
}
/**
 * Object containing a price table rule.
 */
export declare class Getallpricetablesandrules200ApplicationJSONRules extends SpeakeasyBase {
    /**
     * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
     */
    context?: Getallpricetablesandrules200ApplicationJSONRulesContext;
    /**
     * Rule ID.
     */
    id?: number;
}
export declare class Getallpricetablesandrules200ApplicationJSON extends SpeakeasyBase {
    /**
     * Percentual modifier.
     */
    percentualModifier?: number;
    /**
     * Array of rules for the price table.
     */
    rules?: Getallpricetablesandrules200ApplicationJSONRules[];
    /**
     * Trade Policy ID (Price Table ID).
     */
    tradePolicyId?: string;
}
export declare class GetallpricetablesandrulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getallpricetablesandrules200ApplicationJSONObjects?: Getallpricetablesandrules200ApplicationJSON[];
}
