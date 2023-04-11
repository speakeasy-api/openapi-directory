import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
 */
export declare class POSTPaymentMethodDecryptionCardHolderInfo extends SpeakeasyBase {
    /**
     * First address line, 255 characters or less.
     */
    addressLine1?: string;
    /**
     * Second address line, 255 characters or less.
     */
    addressLine2?: string;
    /**
     * The card holder's full name as it appears on the card, e.g., "John J Smith", 50 characters or less.
     */
    cardHolderName?: string;
    /**
     * City, 40 characters or less.
     */
    city?: string;
    /**
     * Country, must be a valid country name or abbreviation.
     */
    country?: string;
    /**
     * Card holder's email address, 80 characters or less.
     */
    email?: string;
    /**
     * Phone number, 40 characters or less.
     */
    phone?: string;
    /**
     * State; must be a valid state name or 2-character abbreviation.
     */
    state?: string;
    /**
     * Zip code, 20 characters or less.
     */
    zipCode?: string;
}
/**
 * Required if you set the `mitProfileAction` field.
 *
 * @remarks
 *
 */
export declare enum POSTPaymentMethodDecryptionMitConsentAgreementSrcEnum {
    External = "External"
}
/**
 * If you specify this field, Zuora creates a stored credential profile within the payment method.
 *
 * @remarks
 *
 * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
 *
 * * `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent. Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile. If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
 *
 * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
 *
 *
 */
export declare enum POSTPaymentMethodDecryptionMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
/**
 * Required if you set the `mitProfileAction` field.
 *
 * @remarks
 *
 */
export declare enum POSTPaymentMethodDecryptionMitProfileTypeEnum {
    Recurring = "Recurring"
}
export declare class POSTPaymentMethodDecryption extends SpeakeasyBase {
    /**
     * The ID of the customer account associated with this payment method.
     *
     * @remarks
     * To create an orphan payment method that is not associated with any customer account, you do not need to specify this field during creation. However, you must associate the orphan payment method with a customer account within 10 days. Otherwise, this orphan payment method will be deleted.
     */
    accountID?: string;
    /**
     * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
     */
    cardHolderInfo?: POSTPaymentMethodDecryptionCardHolderInfo;
    /**
     * Field to identify the token decryption type.
     *
     * @remarks
     *
     * **Note:** The only value at this time is `ApplePay`.
     *
     *
     */
    integrationType: string;
    /**
     * The id of invoice this payment will apply to.
     *
     * @remarks
     *
     * **Note:** When `processPayment` is `true`, this field is required.
     * Only one invoice can be paid; for scenarios where you want to pay for multiple invoices, set `processPayment` to `false` and call payment API separately.
     *
     */
    invoiceId?: string;
    /**
     * The Merchant ID that was configured for use with Apple Pay in the Apple iOS Developer Center.
     *
     * @remarks
     *
     */
    merchantID: string;
    /**
     * Required if you set the `mitProfileAction` field.
     *
     * @remarks
     *
     */
    mitConsentAgreementSrc?: POSTPaymentMethodDecryptionMitConsentAgreementSrcEnum;
    /**
     * If you specify this field, Zuora creates a stored credential profile within the payment method.
     *
     * @remarks
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     * * `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent. Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile. If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
     *
     * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
     *
     *
     */
    mitProfileAction?: POSTPaymentMethodDecryptionMitProfileActionEnum;
    /**
     * Required if you set the `mitProfileAction` field.
     *
     * @remarks
     *
     */
    mitProfileType?: POSTPaymentMethodDecryptionMitProfileTypeEnum;
    /**
     * The label name of the gateway instance configured in Zuora that should process the payment. When creating a Payment, this must be a valid gateway instance ID and this gateway must support the specific payment method. If not specified, the default gateway on the Account will be used.
     *
     * @remarks
     *
     * **Note:** When `processPayment` is `true`, this field is required.
     *
     */
    paymentGateway?: string;
    /**
     * The complete JSON Object representing the encrypted payment token payload returned in the response from the Apple Pay session.
     *
     * @remarks
     *
     *
     */
    paymentToken: Record<string, any>;
    /**
     * A boolean flag to control whether a payment should be processed after creating payment method. The payment amount will be equivalent to the amount the merchant supplied in the ApplePay session. Default is false.
     *
     * @remarks
     *
     * When `processPayment` is set to `false`, it must be followed by a separate subscribe or payment API call.
     *
     *
     * **Note:** If you set this field to `true`, you must specify the `paymentGateway` field with the payment gateway instance name. If you set this field to `false`, you must select the **Verify new credit card** check box on the gateway instance settings page. Otherwise, the cryptogram will not be sent to the gateway.
     *
     */
    processPayment?: boolean;
}
