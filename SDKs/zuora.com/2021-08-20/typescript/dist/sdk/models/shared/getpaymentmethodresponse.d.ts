import { SpeakeasyBase } from "../../../internal/utils";
import { GETPMAccountHolderInfo } from "./getpmaccountholderinfo";
import { POSTPMMandateInfo } from "./postpmmandateinfo";
/**
 * The type of bank account associated with the ACH payment. This field is only required if the `type` field is set to `ACH`.
 *
 * @remarks
 *
 */
export declare enum GETPaymentMethodResponseBankAccountTypeEnum {
    BusinessChecking = "BusinessChecking",
    Checking = "Checking",
    Saving = "Saving"
}
/**
 * The status of the payment method.
 *
 * @remarks
 *
 */
export declare enum GETPaymentMethodResponseStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Scrubbed = "Scrubbed"
}
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class GETPaymentMethodResponse extends SpeakeasyBase {
    /**
     * ID of a PayPal billing agreement. For example, I-1TJ3GAGG82Y9.
     *
     * @remarks
     *
     */
    baid?: string;
    /**
     * The International Bank Account Number used to create the SEPA payment method. The value is masked.
     *
     * @remarks
     *
     */
    iban?: string;
    /**
     * The account holder information.
     *
     * @remarks
     *
     */
    accountHolderInfo?: GETPMAccountHolderInfo;
    /**
     * The number of the customer's bank account and it is masked.
     *
     * @remarks
     *
     */
    accountNumber?: string;
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
    bankAccountType?: GETPaymentMethodResponseBankAccountTypeEnum;
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
     * The type of the Bank Transfer payment method. For example, `SEPA`.
     *
     * @remarks
     *
     */
    bankTransferType?: string;
    /**
     * The branch code of the bank used for Direct Debit.
     *
     * @remarks
     *
     */
    branchCode?: string;
    /**
     * The BIC code used for SEPA. The value is masked.
     *
     * @remarks
     *
     */
    businessIdentificationCode?: string;
    /**
     * The masked credit card number.
     *
     * @remarks
     *
     */
    cardNumber?: string;
    /**
     * Email address associated with the PayPal payment method.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * One or two digits expiration month (1-12).
     *
     * @remarks
     *
     *
     */
    expirationMonth?: number;
    /**
     * Four-digit expiration year.
     *
     * @remarks
     *
     */
    expirationYear?: number;
    /**
     * The payment method ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The identity number used for Bank Transfer.
     *
     * @remarks
     *
     */
    identityNumber?: string;
    /**
     * Indicates whether this payment method is the default payment method for the account.
     *
     * @remarks
     *
     */
    isDefault?: boolean;
    /**
     * The mandate information for the Credit Card, ACH, or Bank Transfer payment method.
     *
     * @remarks
     *
     * The following mandate fields are specific to the ACH and Bank Transfer payment methods:
     * * `mandateId`
     * * `mandateReceivedStatus`
     * * `existingMandateStatus`
     * * `mandateCreationDate`
     * * `mandateUpdateDate`
     * * `mandateStatus`
     * * `mandateReason`
     *
     * The following mandate fields are specific to the Credit Card payment method:
     * * `mitTransactionId`
     * * `mitProfileAgreedOn`
     * * `mitConsentAgreementRef`
     * * `mitConsentAgreementSrc`
     * * `mitProfileType`
     * * `mitProfileAction`
     *
     */
    mandateInfo?: POSTPMMandateInfo;
    /**
     * The PayPal preapproval key.
     *
     * @remarks
     *
     */
    preapprovalKey?: string;
    /**
     * The CVV or CVV2 security code for the credit card or debit card.
     *
     * @remarks
     *             Only required if changing expirationMonth, expirationYear, or cardHolderName.
     *             To ensure PCI compliance, this value isn''t stored and can''t be queried.
     *
     */
    securityCode?: string;
    /**
     * The status of the payment method.
     *
     * @remarks
     *
     */
    status?: GETPaymentMethodResponseStatusEnum;
    /**
     * The type of the payment method. For example, `CreditCard`.
     *
     * @remarks
     *
     */
    type?: string;
}
