import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The rule will be active during this time range.
 */
export declare class PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange extends SpeakeasyBase {
    /**
     * Date when rule will be activated. Date format: `RFC3339`.
     */
    from: string;
    /**
     * Date when the rule will be deactivated. Date format: `RFC3339`.
     */
    to: string;
}
/**
 * For an item to be eligible to the rule, it's markup should be in this Markup Range.
 */
export declare class PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange extends SpeakeasyBase {
    /**
     * Item markup should be greater than or equal to this value.
     */
    from: number;
    /**
     * Item markup should be less than or equal to this value.
     */
    to: number;
}
/**
 * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
 */
export declare class PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext extends SpeakeasyBase {
    /**
     * Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.
     */
    brands: Record<string, string>;
    /**
     * Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.
     */
    categories: Record<string, string>;
    /**
     * The rule will be active during this time range.
     */
    dateRange: PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange;
    /**
     * Internal Categories.
     */
    internalCategories?: Record<string, any>;
    /**
     * For an item to be eligible to the rule, it's markup should be in this Markup Range.
     */
    markupRange: PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange;
    /**
     * Stock statuses.
     */
    stockStatuses?: Record<string, any>;
}
/**
 * Object containing a price table rule.
 */
export declare class PutPricingPipelineCatalogPriceTableIdRequestBodyRules extends SpeakeasyBase {
    /**
     * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
     */
    context: PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext;
    /**
     * Rule ID.
     */
    id: number;
    /**
     * Percentual modifier.
     */
    percentualModifier: number;
}
export declare class PutPricingPipelineCatalogPriceTableIdRequestBody extends SpeakeasyBase {
    /**
     * Array of rules for the price table.
     */
    rules: PutPricingPipelineCatalogPriceTableIdRequestBodyRules[];
}
export declare class PutPricingPipelineCatalogPriceTableIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody?: PutPricingPipelineCatalogPriceTableIdRequestBody;
    /**
     * Price Table Name.
     */
    priceTableId: string;
}
export declare class PutPricingPipelineCatalogPriceTableIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
