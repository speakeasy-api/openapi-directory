import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePaymentMethodCardholderInfo } from "./createpaymentmethodcardholderinfo";
export declare class POSTAccountTypePaymentMethodAccountHolderInfo extends SpeakeasyBase {
    /**
     * The full name of the bank account holder.
     *
     * @remarks
     *
     */
    accountHolderName: string;
    /**
     * The first line of the address for the account holder.
     *
     * @remarks
     *
     */
    addressLine1?: string;
    /**
     * The second line of the address for the account holder.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * The city where the account holder stays.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * The email address of the account holder.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * The first name of the account holder.
     *
     * @remarks
     *
     */
    firstName?: string;
    /**
     * The last name of the account holder.
     *
     * @remarks
     *
     */
    lastName?: string;
    /**
     * The phone number of the account holder.
     *
     * @remarks
     *
     */
    phone?: string;
    /**
     * The state where the account holder stays.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * The zip code for the address of the account holder.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
/**
 * The type of bank account associated with the ACH payment. This field is only required if the `type` field is set to `ACH`.
 *
 * @remarks
 *
 */
export declare enum POSTAccountTypePaymentMethodBankAccountTypeEnum {
    BusinessChecking = "BusinessChecking",
    Checking = "Checking",
    Saving = "Saving"
}
/**
 * Required if you set the `mitProfileAction` field.
 *
 * @remarks
 *
 */
export declare enum POSTAccountTypePaymentMethodMitConsentAgreementSrcEnum {
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
export declare enum POSTAccountTypePaymentMethodMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}
/**
 * Required if you set the `mitProfileAction` field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions.
 *
 * @remarks
 *
 */
export declare enum POSTAccountTypePaymentMethodMitProfileTypeEnum {
    Recurring = "Recurring",
    Unscheduled = "Unscheduled"
}
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class POSTAccountTypePaymentMethod extends SpeakeasyBase {
    /**
     * ID of a PayPal billing agreement. For example, I-1TJ3GAGG82Y9.
     *
     * @remarks
     *
     */
    baid?: string;
    /**
     * The International Bank Account Number. This field is used to create the SEPA payment method.
     *
     * @remarks
     *
     */
    iban?: string;
    accountHolderInfo?: POSTAccountTypePaymentMethodAccountHolderInfo;
    /**
     * Internal ID of the customer account that will own the payment method.
     *
     * @remarks
     *
     * To create an orphan payment method that is not associated with any customer account, you do not need to specify this field during creation. However, you must associate the orphan payment method with a customer account within 10 days. Otherwise, this orphan payment method will be deleted.
     *
     */
    accountKey?: string;
    /**
     * The number of the customer's bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * First address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine1?: string;
    /**
     * Second address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * Internal ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method.
     *
     * @remarks
     *
     * If you do not set this field, Zuora will use one of the following payment gateways instead:
     *
     * * The default payment gateway of the customer account that owns the payment method, if the `accountKey` field is set.
     * * The default payment gateway of your Zuora tenant, if the `accountKey` field is not set.
     *
     */
    authGateway?: string;
    /**
     * The nine-digit routing number or ABA number used by banks. This field is only required if the `type` field is set to `ACH`.
     *
     * @remarks
     *
     */
    bankABACode?: string;
    /**
     * The name of the account holder, which can be either a person or a company. This field is only required if the `type` field is set to `ACH`.
     *
     * @remarks
     *
     */
    bankAccountName?: string;
    /**
     * The bank account number associated with the ACH payment. This field is only required if the `type` field is set to `ACH`.
     *
     * @remarks
     *
     */
    bankAccountNumber?: string;
    /**
     * The type of bank account associated with the ACH payment. This field is only required if the `type` field is set to `ACH`.
     *
     * @remarks
     *
     */
    bankAccountType?: POSTAccountTypePaymentMethodBankAccountTypeEnum;
    /**
     * The sort code or number that identifies the bank. This is also known as the sort code.
     *
     * @remarks
     *
     */
    bankCode?: string;
    /**
     * The name of the bank where the ACH payment account is held. This field is only required if the `type` field is set to `ACH`.
     *
     * @remarks
     *
     */
    bankName?: string;
    /**
     * The branch code of the bank used for direct debit.
     *
     * @remarks
     *
     */
    branchCode?: string;
    /**
     * The BIC code used for SEPA.
     *
     * @remarks
     *
     */
    businessIdentificationCode?: string;
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
     * Credit card number.
     *
     * @remarks
     *
     */
    cardNumber?: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).
     *
     */
    cardType?: string;
    /**
     * Indicates whether the duplication check is performed when you create a new credit card payment method. The default value is `false`.
     *
     * @remarks
     *
     * With this field set to `true`, Zuora will check all active payment methods associated with the same billing account to ensure that no duplicate credit card payment methods are created. An error is returned if a duplicate payment method is found.
     *
     * The following fields are used for the duplication check:
     *   * `cardHolderName`
     *   * `expirationMonth`
     *   * `expirationYear`
     *   * `creditCardMaskNumber`. It is the masked credit card number generated by Zuora. For example, `****1234`.
     *
     */
    checkDuplicated?: boolean;
    /**
     * City, 40 characters or less.
     *
     * @remarks
     *
     *
     */
    city?: string;
    /**
     * Country, must be a valid country name or abbreviation.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * The currency used for payment method authorization.
     *
     * @remarks
     *
     * If this field is not specified, `currency` specified for the account is used for payment method authorization. If no currency is specified for the account, the default currency of the account is then used.
     *
     */
    currencyCode?: string;
    /**
     * Email address associated with the payment method. This field is required if you want to create a PayPal Express Checkout payment method or a PayPal Adaptive payment method.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * One or two digit expiration month (1-12) of the credit card.
     *
     * @remarks
     *
     */
    expirationMonth?: number;
    /**
     * Four-digit expiration year of the credit card.
     *
     * @remarks
     *
     */
    expirationYear?: number;
    /**
     * The identity number used for Bank Transfer.
     *
     * @remarks
     *
     */
    identityNumber?: string;
    /**
     * Specifies whether the payment method will be the default payment method of the customer account that owns the payment method. Only applicable if the `accountKey` field is set.
     *
     * @remarks
     *
     */
    makeDefault?: boolean;
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
    mitConsentAgreementSrc?: POSTAccountTypePaymentMethodMitConsentAgreementSrcEnum;
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
    mitProfileAction?: POSTAccountTypePaymentMethodMitProfileActionEnum;
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
    mitProfileType?: POSTAccountTypePaymentMethodMitProfileTypeEnum;
    /**
     * Phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    phone?: string;
    /**
     * The PayPal preapproval key.
     *
     * @remarks
     *
     */
    preapprovalKey?: string;
    /**
     * CVV or CVV2 security code of the credit card.
     *
     * @remarks
     *
     * To ensure PCI compliance, this value is not stored and cannot be queried.
     *
     */
    securityCode?: string;
    /**
     * State, must be a valid state name or 2-character abbreviation.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * Type of payment method. Possible values include:
     *
     * @remarks
     *
     * * `PayPalEC` - PayPal Express Checkout payment method. Use this type if you are using a [PayPal Payflow Pro Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Payflow_Pro%2C_Website_Payments_Payflow_Edition%2C_Website_Pro_Payment_Gateway) instance.
     * * `PayPalNativeEC` - PayPal Native Express Checkout payment method. Use this type if you are using a [PayPal Express Checkout Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Express_Checkout_Gateway) instance.
     * * `PayPalAdaptive` - PayPal Adaptive payment method. Use this type if you are using a [PayPal Adaptive Payment Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Adaptive_Payments_Gateway) instance.
     * * `CreditCard` - Credit card payment method.
     * * `ACH` - ACH payment method.
     * * `SEPA` - Single Euro Payments Area.
     * * `Betalingsservice` - Direct Debit DK.
     * * `Autogiro` - Direct Debit SE.
     * * `Bacs` - Direct Debit UK.
     * * You can also specify a custom payment method type. This type is only available if the Universal Payment Connector and Open Payment Method services are enabled. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
     *
     */
    type: string;
    /**
     * Zip code, 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
