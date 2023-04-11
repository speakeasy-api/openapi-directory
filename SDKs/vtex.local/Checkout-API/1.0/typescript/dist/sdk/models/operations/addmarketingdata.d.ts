import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddMarketingDataRequestBody extends SpeakeasyBase {
    /**
     * Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
     */
    coupon?: string;
    /**
     * Marketing tags.
     */
    marketingTags?: string[];
    /**
     * UTM campaign
     */
    utmCampaign?: string;
    /**
     * UTM medium.
     */
    utmMedium?: string;
    /**
     * UTM source.
     */
    utmSource?: string;
    /**
     * utmi_campaign (internal utm)
     */
    utmiCampaign?: string;
    /**
     * utmi_page (internal utm)
     */
    utmiPage?: string;
    /**
     * utmi_part (internal utm)
     */
    utmiPart?: string;
}
export declare class AddMarketingDataRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddMarketingDataRequestBody;
    /**
     * ID of the orderForm that will receive client profile information.
     */
    orderFormId: string;
}
export declare class AddMarketingDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
