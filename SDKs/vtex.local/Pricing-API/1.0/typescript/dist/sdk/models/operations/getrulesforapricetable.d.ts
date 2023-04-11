import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetrulesforapricetableServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class GetrulesforapricetableRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Price Table Name.
     */
    priceTableId: string;
}
/**
 * The rule will be active during this time range.
 */
export declare class Getrulesforapricetable200ApplicationJSONRulesContextDateRange extends SpeakeasyBase {
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
export declare class Getrulesforapricetable200ApplicationJSONRulesContextMarkupRange extends SpeakeasyBase {
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
export declare class Getrulesforapricetable200ApplicationJSONRulesContext extends SpeakeasyBase {
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
    dateRange?: Getrulesforapricetable200ApplicationJSONRulesContextDateRange;
    /**
     * Internal Categories.
     */
    internalCategories?: Record<string, any>;
    /**
     * For an item to be eligible to the rule, it's markup should be in this Markup Range.
     */
    markupRange?: Getrulesforapricetable200ApplicationJSONRulesContextMarkupRange;
    /**
     * Stock statuses.
     */
    stockStatuses?: Record<string, any>;
}
/**
 * Object containing a price table rule.
 */
export declare class Getrulesforapricetable200ApplicationJSONRules extends SpeakeasyBase {
    /**
     * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
     */
    context?: Getrulesforapricetable200ApplicationJSONRulesContext;
    /**
     * Rule ID.
     */
    id?: number;
}
/**
 * OK
 */
export declare class Getrulesforapricetable200ApplicationJSON extends SpeakeasyBase {
    /**
     * Percentual modifier.
     */
    percentualModifier?: number;
    /**
     * Array of rules for the price table.
     */
    rules?: Getrulesforapricetable200ApplicationJSONRules[];
    /**
     * Trade Policy ID (Price Table ID).
     */
    tradePolicyId?: string;
}
export declare class GetrulesforapricetableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getrulesforapricetable200ApplicationJSONObject?: Getrulesforapricetable200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
