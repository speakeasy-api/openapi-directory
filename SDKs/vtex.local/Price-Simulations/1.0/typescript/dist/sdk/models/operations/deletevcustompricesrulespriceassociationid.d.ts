import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVCustomPricesRulesPriceAssociationIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    /**
     * Price Association unique identifier
     */
    priceAssociationId: number;
}
export declare class DeleteVCustomPricesRulesPriceAssociationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteVCustomPricesRulesPriceAssociationId200ApplicationJSONString?: string;
}
