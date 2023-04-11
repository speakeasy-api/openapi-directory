import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Sales Associate information.
 */
export declare class AddMerchantContextDataRequestBodySalesAssociateData extends SpeakeasyBase {
    /**
     * Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.
     */
    salesAssociateId?: string;
}
export declare class AddMerchantContextDataRequestBody extends SpeakeasyBase {
    /**
     * Sales Associate information.
     */
    salesAssociateData: AddMerchantContextDataRequestBodySalesAssociateData;
}
export declare class AddMerchantContextDataRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddMerchantContextDataRequestBody;
    /**
     * ID of the orderForm that will receive the relevant information added by the merchant.
     */
    orderFormId: string;
}
/**
 * OK
 */
export declare class AddMerchantContextData200ApplicationJSON extends SpeakeasyBase {
    /**
     * Sales Associate (Seller) identification code.
     */
    salesAssociateId?: string;
}
export declare class AddMerchantContextDataResponse extends SpeakeasyBase {
    /**
     * OK
     */
    addMerchantContextData200ApplicationJSONObject?: AddMerchantContextData200ApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
