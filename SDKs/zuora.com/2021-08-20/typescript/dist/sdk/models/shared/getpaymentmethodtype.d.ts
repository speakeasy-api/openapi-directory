import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the name and billing address for the card holder.
 *
**/
export declare class GetPaymentMethodTypeCardHolderInfo extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    cardHolderName?: string;
    city?: string;
    country?: string;
    email?: string;
    phone?: string;
    state?: string;
    zipCode?: string;
}
export declare class GetPaymentMethodType extends SpeakeasyBase {
    cardHolderInfo?: GetPaymentMethodTypeCardHolderInfo;
    cardNumber?: string;
    cardType?: string;
    defaultPaymentMethod?: boolean;
    expirationMonth?: number;
    expirationYear?: number;
    id?: string;
}
