import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutVCustomPricesRulesPriceAssociationIdRequestBody extends SpeakeasyBase {
    /**
     * Order type
     */
    orderType: string;
    /**
     * Name of the Price Table associated with the scenario
     */
    pricetable: string;
    /**
     * Delivery location
     */
    state: string;
}
export declare class PutVCustomPricesRulesPriceAssociationIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    requestBody?: PutVCustomPricesRulesPriceAssociationIdRequestBody;
    /**
     * Price Association unique identifier
     */
    priceAssociationId: number;
}
/**
 * OK
 */
export declare class PutVCustomPricesRulesPriceAssociationId200ApplicationJSON extends SpeakeasyBase {
    /**
     * User's email
     */
    email?: any;
    /**
     * Price association ID
     */
    id: number;
    /**
     * Order type
     */
    orderType?: string;
    /**
     * Name of the Price Table associated with the scenario
     */
    pricetable: string;
    /**
     * Delivery location
     */
    state?: string;
}
export declare class PutVCustomPricesRulesPriceAssociationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    putVCustomPricesRulesPriceAssociationId200ApplicationJSONObject?: PutVCustomPricesRulesPriceAssociationId200ApplicationJSON;
}
