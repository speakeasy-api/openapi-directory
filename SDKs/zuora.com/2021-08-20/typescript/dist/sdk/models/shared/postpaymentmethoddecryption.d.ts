import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
**/
export declare class PostPaymentMethodDecryptionCardHolderInfo extends SpeakeasyBase {
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
export declare enum PostPaymentMethodDecryptionMitConsentAgreementSrcEnum {
    External = "External"
}
export declare enum PostPaymentMethodDecryptionMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
export declare enum PostPaymentMethodDecryptionMitProfileTypeEnum {
    Recurring = "Recurring"
}
export declare class PostPaymentMethodDecryption extends SpeakeasyBase {
    accountID?: string;
    cardHolderInfo?: PostPaymentMethodDecryptionCardHolderInfo;
    integrationType: string;
    invoiceId?: string;
    merchantID: string;
    mitConsentAgreementSrc?: PostPaymentMethodDecryptionMitConsentAgreementSrcEnum;
    mitProfileAction?: PostPaymentMethodDecryptionMitProfileActionEnum;
    mitProfileType?: PostPaymentMethodDecryptionMitProfileTypeEnum;
    paymentGateway?: string;
    paymentToken: Record<string, any>;
    processPayment?: boolean;
}
