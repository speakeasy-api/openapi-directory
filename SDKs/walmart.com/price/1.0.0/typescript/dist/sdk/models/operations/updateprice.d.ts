import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}
/**
 * This is applicable only for promotions
 */
export declare class UpdatePriceRequestBodyPricingComparisonPrice extends SpeakeasyBase {
    amount?: number;
    currency?: UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
}
/**
 * This is applicable only for promotions
 */
export declare enum UpdatePriceRequestBodyPricingComparisonPriceTypeEnum {
    Base = "BASE"
}
export declare enum UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}
export declare class UpdatePriceRequestBodyPricingCurrentPrice extends SpeakeasyBase {
    amount?: number;
    currency?: UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
}
/**
 * This is applicable only for both promotions and price
 */
export declare enum UpdatePriceRequestBodyPricingCurrentPriceTypeEnum {
    Base = "BASE",
    Reduced = "REDUCED",
    Clearance = "CLEARANCE"
}
/**
 * Represent promo placement. This is applicable only for promotions
 */
export declare enum UpdatePriceRequestBodyPricingPriceDisplayCodesEnum {
    Cart = "CART",
    Checkout = "CHECKOUT"
}
/**
 * This is applicable only for promotions
 */
export declare enum UpdatePriceRequestBodyPricingProcessModeEnum {
    Upsert = "UPSERT",
    Delete = "DELETE"
}
export declare class UpdatePriceRequestBodyPricing extends SpeakeasyBase {
    /**
     * This is applicable only for promotions
     */
    comparisonPrice?: UpdatePriceRequestBodyPricingComparisonPrice;
    /**
     * This is applicable only for promotions
     */
    comparisonPriceType?: UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;
    currentPrice: UpdatePriceRequestBodyPricingCurrentPrice;
    /**
     * This is applicable only for both promotions and price
     */
    currentPriceType: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;
    /**
     * This is applicable only for promotions
     */
    effectiveDate?: Date;
    /**
     * This is applicable only for promotions
     */
    expirationDate?: Date;
    /**
     * Represent promo placement. This is applicable only for promotions
     */
    priceDisplayCodes?: UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;
    /**
     * This is applicable only for promotions
     */
    processMode?: UpdatePriceRequestBodyPricingProcessModeEnum;
    /**
     * This is applicable only for promotions
     */
    promoId?: string;
}
/**
 * This is applicable only for promotions
 */
export declare enum UpdatePriceRequestBodyReplaceAllEnum {
    True = "true",
    False = "false"
}
/**
 * The request body consists of a Feed file attached to the request.
 */
export declare class UpdatePriceRequestBody extends SpeakeasyBase {
    definitions?: Record<string, any>;
    /**
     * This is applicable only for promotions
     */
    offerId?: string;
    pricing: UpdatePriceRequestBodyPricing[];
    /**
     * This is applicable only for promotions
     */
    replaceAll?: UpdatePriceRequestBodyReplaceAllEnum;
    sku: string;
}
export declare class UpdatePriceRequest extends SpeakeasyBase {
    /**
     * The request body consists of a Feed file attached to the request.
     */
    requestBody: UpdatePriceRequestBody;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     */
    wmConsumerChannelType?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /**
     * The access token retrieved in the Token API call
     */
    wmSecAccessToken: string;
    /**
     * Walmart Service Name
     */
    wmSvcName: string;
}
export declare enum UpdatePrice200ApplicationXMLErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class UpdatePrice200ApplicationXMLErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum UpdatePrice200ApplicationXMLErrorsGatewayErrorCategoryEnum {
    InternalDataError = "INTERNAL_DATA_ERROR",
    ExternalDataError = "EXTERNAL_DATA_ERROR",
    SystemError = "SYSTEM_ERROR"
}
export declare enum UpdatePrice200ApplicationXMLErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class UpdatePrice200ApplicationXMLErrors extends SpeakeasyBase {
    category?: UpdatePrice200ApplicationXMLErrorsCategoryEnum;
    causes?: UpdatePrice200ApplicationXMLErrorsCauses[];
    code: string;
    component?: string;
    description?: string;
    errorIdentifiers?: Record<string, Record<string, any>>;
    field?: string;
    gatewayErrorCategory?: UpdatePrice200ApplicationXMLErrorsGatewayErrorCategoryEnum;
    info?: string;
    serviceName?: string;
    severity?: UpdatePrice200ApplicationXMLErrorsSeverityEnum;
    type?: string;
}
/**
 * Successful Operation
 */
export declare class UpdatePrice200ApplicationXML extends SpeakeasyBase {
    errors?: UpdatePrice200ApplicationXMLErrors[];
    /**
     * Marketplace name. Example: Walmart-US
     */
    mart?: string;
    /**
     * A message of acknowledgement for a price update
     */
    message?: string;
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
    statusCode?: number;
}
export declare enum UpdatePrice200ApplicationJSONErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class UpdatePrice200ApplicationJSONErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum {
    InternalDataError = "INTERNAL_DATA_ERROR",
    ExternalDataError = "EXTERNAL_DATA_ERROR",
    SystemError = "SYSTEM_ERROR"
}
export declare enum UpdatePrice200ApplicationJSONErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class UpdatePrice200ApplicationJSONErrors extends SpeakeasyBase {
    category?: UpdatePrice200ApplicationJSONErrorsCategoryEnum;
    causes?: UpdatePrice200ApplicationJSONErrorsCauses[];
    code: string;
    component?: string;
    description?: string;
    errorIdentifiers?: Record<string, Record<string, any>>;
    field?: string;
    gatewayErrorCategory?: UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum;
    info?: string;
    serviceName?: string;
    severity?: UpdatePrice200ApplicationJSONErrorsSeverityEnum;
    type?: string;
}
/**
 * Successful Operation
 */
export declare class UpdatePrice200ApplicationJSON extends SpeakeasyBase {
    errors?: UpdatePrice200ApplicationJSONErrors[];
    /**
     * Marketplace name. Example: Walmart-US
     */
    mart?: string;
    /**
     * A message of acknowledgement for a price update
     */
    message?: string;
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
    statusCode?: number;
}
export declare class UpdatePriceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    updatePrice200ApplicationJSONObject?: UpdatePrice200ApplicationJSON;
}
