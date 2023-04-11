import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddShippingAddressRequestBodyLogisticsInfo extends SpeakeasyBase {
    /**
     * Index of item in items array
     */
    itemIndex?: number;
    /**
     * Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.
     */
    selectedDeliveryChannel?: string;
    /**
     * Selected SLA. For example, `"normal"` or `"express"`.
     */
    selectedSla?: string;
}
export declare class AddShippingAddressRequestBodySelectedAddresses extends SpeakeasyBase {
    /**
     * Type of address. For example, `Residential` or `Pickup`, among others.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal Code.
     */
    postalCode?: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the shipping address.
     */
    street?: string;
}
export declare class AddShippingAddressRequestBody extends SpeakeasyBase {
    /**
     * This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information.
     */
    clearAddressIfPostalCodeNotFound?: boolean;
    /**
     * Array with logistics information on each item of the `items` array in the `orderForm`.
     */
    logisticsInfo?: AddShippingAddressRequestBodyLogisticsInfo[];
    /**
     * List of objects with addresses information.
     */
    selectedAddresses?: AddShippingAddressRequestBodySelectedAddresses[];
}
export declare class AddShippingAddressRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddShippingAddressRequestBody;
    /**
     * ID of the orderForm that will receive client profile information.
     */
    orderFormId: string;
}
export declare class AddShippingAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
