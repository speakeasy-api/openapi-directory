import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePaymentMethodCardholderInfo } from "./createpaymentmethodcardholderinfo";
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
export declare class POSTPaymentMethodTypeGatewayOptions extends SpeakeasyBase {
    /**
     * The name of a gateway-specific parameter.
     *
     * @remarks
     *
     */
    key?: string;
    /**
     * The value of the gateway-specific parameter.
     *
     * @remarks
     *
     */
    value?: string;
}
/**
 * Required if you set the `mitProfileAction` field.
 *
 * @remarks
 *
 */
export declare enum POSTPaymentMethodTypeMitConsentAgreementSrcEnum {
    External = "External"
}
/**
 * If you set this field, Zuora creates a stored credential profile within the payment method.
 *
 * @remarks
 *
 * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
 *
 * * `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent.
 *
 *   Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.
 *
 *   If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
 *
 *
 * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
 *
 */
export declare enum POSTPaymentMethodTypeMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
/**
 * Required if you set the `mitProfileAction` field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions.
 *
 * @remarks
 *
 */
export declare enum POSTPaymentMethodTypeMitProfileTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class POSTPaymentMethodType extends SpeakeasyBase {
    /**
     * ID of the customer account.
     *
     * @remarks
     * To create an orphan payment method that is not associated with any customer account, you do not need to specify this field during creation. However, you must associate the orphan payment method with a customer account within 10 days. Otherwise, this orphan payment method will be deleted.
     */
    accountKey?: string;
    /**
     * Container for cardholder information. If provided, Zuora will
     *
     * @remarks
     * only use this information for this card. Otherwise, Zuora will use
     * the account''s existing bill-to contact information for this card.
     *
     */
    cardHolderInfo?: CreatePaymentMethodCardholderInfo;
    /**
     * Credit card number, a string of up to 16 characters. This field can only be set when creating a new payment method; it cannot be queried or updated.
     *
     * @remarks
     *
     */
    creditCardNumber: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).
     *
     */
    creditCardType: string;
    /**
     * Specify true to make this card the default payment method; otherwise, omit this parameter to keep the current default payment method.
     *
     * @remarks
     *
     */
    defaultPaymentMethod?: boolean;
    /**
     * One or two digits expiration month (1-12).
     *
     * @remarks
     *
     */
    expirationMonth: number;
    /**
     * Four-digit expiration year.
     *
     * @remarks
     *
     */
    expirationYear: number;
    /**
     * The field used to pass gateway-specific parameters and parameter values.
     *
     * @remarks
     *
     */
    gatewayOptions?: POSTPaymentMethodTypeGatewayOptions;
    /**
     * Specifies your reference for the stored credential consent agreement that you have established with the customer. Only applicable if you set the `mitProfileAction` field.
     *
     * @remarks
     *
     */
    mitConsentAgreementRef?: string;
    /**
     * Required if you set the `mitProfileAction` field.
     *
     * @remarks
     *
     */
    mitConsentAgreementSrc?: POSTPaymentMethodTypeMitConsentAgreementSrcEnum;
    /**
     * Specifies the ID of a network transaction. Only applicable if you set the `mitProfileAction` field to `Persist`.
     *
     * @remarks
     *
     */
    mitNetworkTransactionId?: string;
    /**
     * If you set this field, Zuora creates a stored credential profile within the payment method.
     *
     * @remarks
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     * * `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent.
     *
     *   Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.
     *
     *   If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.
     *
     *
     * * `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.
     *
     */
    mitProfileAction?: POSTPaymentMethodTypeMitProfileActionEnum;
    /**
     * The date on which the profile is agreed. The date format is `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    mitProfileAgreedOn?: Date;
    /**
     * Required if you set the `mitProfileAction` field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions.
     *
     * @remarks
     *
     */
    mitProfileType?: POSTPaymentMethodTypeMitProfileTypeEnum;
    /**
     * The number of consecutive failed payments for this payment method. It is reset to `0` upon successful payment.
     *
     * @remarks
     *
     */
    numConsecutiveFailures?: number;
    /**
     * The CVV or CVV2 security code for the credit card or debit card. Only required if changing expirationMonth, expirationYear, or cardHolderName. To ensure PCI compliance, this value isn't stored and can't be queried.
     *
     * @remarks
     *
     */
    securityCode?: string;
}
