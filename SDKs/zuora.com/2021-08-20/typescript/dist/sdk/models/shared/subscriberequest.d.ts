import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayOption } from "./gatewayoption";
import { RatePlanData } from "./rateplandata";
import { SubscribeRequestAccount } from "./subscriberequestaccount";
import { SubscribeRequestBillToContact } from "./subscriberequestbilltocontact";
import { SubscribeRequestSoldToContact } from "./subscriberequestsoldtocontact";
import { SubscribeRequestSubscriptionDataSubscription } from "./subscriberequestsubscriptiondatasubscription";
/**
 *  Use this field to pass gateway options.
 *
 * @remarks
 *
 *
 * **Character limit**: 255
 *
 *
 * **Values**: GatewayOption
 */
export declare class SubscribeRequestPaymentMethodGatewayOptionData extends SpeakeasyBase {
    gatewayOption: GatewayOption[];
}
/**
 * The type of payment method. If you want to create an Amazon Pay payment method, specify `CreditCardReferenceTransaction` for this field.
 */
export declare enum SubscribeRequestPaymentMethodTypeEnum {
    Ach = "ACH",
    ApplePay = "ApplePay",
    BankTransfer = "BankTransfer",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    CreditCardReferenceTransaction = "CreditCardReferenceTransaction",
    DebitCard = "DebitCard",
    Other = "Other",
    PayPal = "PayPal",
    WireTransfer = "WireTransfer"
}
/**
 *  This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
 *
 * @remarks
 * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
 * Values: A valid electronic PaymentMethod.
 */
export declare class SubscribeRequestPaymentMethod extends SpeakeasyBase {
    /**
     *  The ID of the customer account associated with this payment method.
     */
    accountId?: string;
    /**
     *  The nine-digit routing number or ABA number used by banks.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `ACH`.
     *
     *
     * **Character limit**: 9
     *
     *
     * **Values**: a string of 9 characters or fewer
     */
    achAbaCode?: string;
    /**
     *  The name of the account holder, which can be either a person or a company.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `ACH`.
     *
     *
     * **Character limit**: 70
     *
     *
     * **Values**: a string of 70 characters or fewer
     */
    achAccountName?: string;
    /**
     *  The bank account number associated with the ACH payment.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `ACH`.
     *
     *
     * **Character limit**: 30
     *
     *
     * **Values**: a string of 30 numeric characters or fewer
     */
    achAccountNumber?: string;
    /**
     *  This is a masked displayable version of the ACH account number, used for security purposes. For example: `XXXXXXXXX54321`. Use this field for ACH payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    achAccountNumberMask?: string;
    /**
     *  The type of bank account associated with the ACH payment.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `ACH`.
     *
     *
     * **Character limit**: 16
     *
     *
     * **Values**:
     *
     * - `BusinessChecking`
     * - `Checking`
     * - `Saving`
     *
     */
    achAccountType?: string;
    /**
     *  Line 1 for the ACH address. Required on create for the Vantiv payment gateway. Optional for other gateways.
     *
     * @remarks
     * **Character limit:** **Values:** an address
     */
    achAddress1?: string;
    /**
     *  Line 2 for the ACH address. Required on create for the Vantiv payment gateway. Optional for other gateways.
     *
     * @remarks
     * **Character limit:** **Values:** an address
     */
    achAddress2?: string;
    /**
     *  The name of the bank where the ACH payment account is held. Use this field for ACH payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 70
     *
     *
     * **Values**: a string of 70 characters or fewer
     */
    achBankName?: string;
    /**
     *  Specifies whether a payment method is available in Zuora. The default value is `false`.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `true`, `false`
     */
    active?: boolean;
    /**
     *  The branch code of the bank used for direct debit. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 10
     *
     *
     * **Values**:  string of 10 characters or fewer
     */
    bankBranchCode?: string;
    /**
     * The check digit in the international bank account number, which confirms the validity of the account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 4
     *
     *
     * **Values**:  string of 4 characters or fewer
     */
    bankCheckDigit?: string;
    /**
     *  The city of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:70
     *
     *
     * **Values**:  string of 70 characters or fewer
     */
    bankCity?: string;
    /**
     *  The sort code or number that identifies the bank. This is also known as the sort code. This field is required for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 18
     *
     *
     * **Values**:  string of 18 characters or fewer
     */
    bankCode?: string;
    /**
     *  The first six digits of the payment method's number, such as the credit card number or account number. Banks use this number to identify a payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 6
     *
     *
     * **Values**:  string of 6 characters or fewer
     */
    bankIdentificationNumber?: string;
    /**
     *  The name of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:80
     *
     *
     * **Values**:  string of 80 characters or fewer
     */
    bankName?: string;
    /**
     *  The zip code or postal code of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:20
     *
     *
     * **Values**:  string of 20 characters or fewer
     */
    bankPostalCode?: string;
    /**
     *  The name of the street of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:60
     *
     *
     * **Values**:  string of 60 characters or fewer
     */
    bankStreetName?: string;
    /**
     *  The number of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:10
     *
     *
     * **Values**:  string of 10 characters or fewer
     */
    bankStreetNumber?: string;
    /**
     *  The name on the direct debit bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 60
     *
     *
     * **Values**:  string of 60 characters or fewer
     */
    bankTransferAccountName?: string;
    /**
     *  The number of the customer's bank account.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `BankTransfer`.
     *
     *
     * **Character limit**:30
     *
     *
     * **Values**:  string of 30 characters or fewer
     */
    bankTransferAccountNumber?: string;
    /**
     *  This is a masked displayable version of the ACH account number, used for security purposes. For example: `XXXXXXXXX54321`.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    bankTransferAccountNumberMask?: string;
    /**
     *  The type of the customer's bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 11
     *
     *
     * **Values**: `DirectDebit`
     */
    bankTransferAccountType?: string;
    /**
     *  Specifies the type of direct debit transfer. The value of this field is dependent on the country of the user.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `BankTransfer`.
     *
     *
     * **Character limit**: 20
     *
     *
     * **Values**:
     *
     * - `AutomatischIncasso` (NL)
     * - `LastschriftDE` (Germany)
     * - `LastschriftAT` (Austria)
     * - `DemandeDePrelevement` (FR)
     * - `DirectDebitUK` (UK)
     * - `Domicil` (Belgium)
     * - `LastschriftCH` (CH)
     * - `RID` (Italy)
     * - `OrdenDeDomiciliacion` (Spain)
     *
     */
    bankTransferType?: string;
    /**
     *  The business identification code for Swiss direct payment methods that use the Global Collect payment gateway. Use this field only for direct debit payments in Switzerland with Global Collect.
     *
     * @remarks
     *
     *
     * **Character limit**: 11
     *
     *
     * **Values**: string of 11 characters or fewer
     */
    businessIdentificationCode?: string;
    /**
     *  The city of the customer's address. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**:80
     *
     *
     * **Values**:  string of 80 characters or fewer
     */
    city?: string;
    /**
     *  The two-letter country code of the customer's address.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `BankTransfer`, and the `BankTransferType` field is set to either `DirectDebitUK`, `DirectEntryAU`, or `DirectDebitNZ`.
     *
     *
     * **Character limit**: 2
     *
     *
     * **Values**: a valid country code
     */
    country?: string;
    /**
     *  The user ID of the person who created the `PaymentMethod` object when there is a login user in the user session. In Hosted Payment Method and Z-Checkout pages, this field is set to 3 as there is no login user to initiate a user session.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the `PaymentMethod` object was created in the Zuora system.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The first line of the card holder's address, which is often a street address or business name. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 255
     *
     *
     * **Values**: a string of 255 characters or fewer
     */
    creditCardAddress1?: string;
    /**
     *  The second line of the card holder's address. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     *
     * **Character limit**: 255
     *
     *
     * **Values**: a string of 255 characters or fewer
     */
    creditCardAddress2?: string;
    /**
     *  The city of the card holder's address. Use this field for credit card and direct debit payment methods
     *
     * @remarks
     *
     * **Character limit**: 40
     *
     *
     * **Values**: a string of 40 characters or fewer
     */
    creditCardCity?: string;
    /**
     *  The country of the card holder's address.
     */
    creditCardCountry?: string;
    /**
     *  The expiration month of the credit card or debit card.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `CreditCard` or `DebitCard`.
     *
     * **Character limit**: 2
     *
     *
     * **Values**: a two-digit number, 01 - 12
     */
    creditCardExpirationMonth?: number;
    /**
     *  The expiration month of the credit card or debit card.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `CreditCard` or `DebitCard`.
     *
     *
     * **Character limit**: 4
     *
     *
     * **Values**: a four-digit number
     */
    creditCardExpirationYear?: number;
    /**
     *  The full name of the card holder.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `CreditCard` or `DebitCard`.
     *
     *
     * **Character limit**: 50
     *
     *
     * **Values**: a string of 50 characters or fewer
     */
    creditCardHolderName?: string;
    /**
     *  A masked version of the credit or debit card number.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    creditCardMaskNumber?: string;
    /**
     *  The credit card or debit card number. This is an insert-only field; it cannot be updated nor queried for security purposes.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `CreditCard` or `DebitCard`.
     *
     *
     * **Character limit**: 16
     *
     *
     * **Values**: a string of 16 characters or fewer
     */
    creditCardNumber?: string;
    /**
     *  The billing address's zip code. This field is required only when you define a debit card or credit card payment.
     *
     * @remarks
     *
     *
     * **Character limit**: 20
     *
     *
     * **Values**: a string of 20 characters or fewer
     */
    creditCardPostalCode?: string;
    /**
     *  The CVV or CVV2 security code. See [How do I control what information Zuora sends over to the Payment Gateway?](https://knowledgecenter.zuora.com/kb/How_do_I_control_information_sent_to_payment_gateways_when_verifying_payment_methods%3F) for more information. To ensure PCI compliance, this value is not stored and cannot be queried.
     *
     * @remarks
     *
     *
     * **Character limit**:
     *
     *
     * **Values**: a valid CVV or CVV2 security code
     */
    creditCardSecurityCode?: string;
    /**
     *  The billing address's state. Use this field is if the `CreditCardCountry` value is either Canada or the US. State names must be spelled in full.
     */
    creditCardState?: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).
     *
     */
    creditCardType?: string;
    /**
     *  The session ID of the user when the `PaymentMethod` was created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, then Zuora passes this field to supported gateways. Currently only Verifi supports this field.
     *
     * @remarks
     *
     *
     * **Character limit**: 255
     *
     *
     * **Values**:
     */
    deviceSessionId?: string;
    /**
     *  An email address for the payment method in addition to the bill to contact email address.
     *
     * @remarks
     *
     *
     * **Character limit**: 80
     *
     *
     * **Values**: a string of 80 characters or fewer
     */
    email?: string;
    /**
     *  Indicates if the customer has an existing mandate or a new mandate. A mandate is a signed authorization for UK and NL customers. When you are migrating mandates from another system, be sure to set this field correctly. If you indicate that a new mandate is an existing mandate or vice-versa, then transactions fail. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 3
     *
     *
     * **Values**: `Yes`, `No`
     */
    existingMandate?: string;
    /**
     *  The customer's first name. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 30
     *
     *
     * **Values**: a string of 30 characters or fewer
     */
    firstName?: string;
    /**
     *  Use this field to pass gateway options.
     *
     * @remarks
     *
     *
     * **Character limit**: 255
     *
     *
     * **Values**: GatewayOption
     */
    gatewayOptionData?: SubscribeRequestPaymentMethodGatewayOptionData;
    /**
     *  The International Bank Account Number. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 42
     *
     *
     * **Values**: a string of 42 characters or fewer
     */
    iban?: string;
    /**
     *  The IP address of the user when the payment method was created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, then Zuora passes this field to supported gateways. Currently PayPal, CyberSource, Authorize.Net, and Verifi support this field.
     *
     * @remarks
     *
     *
     * **Character limit**: 15
     *
     *
     * **Values**: a string of 15 characters or fewer
     */
    ipAddress?: string;
    /**
     *  The ID of this object. Upon creation, the ID of this object is `PaymentMethodId`.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    id?: string;
    /**
     *  The date of the last failed attempt to collect payment with this payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    lastFailedSaleTransactionDate?: Date;
    /**
     *  The customer's last name. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 70
     *
     *
     * **Values**: a string of 70 characters or fewer
     */
    lastName?: string;
    /**
     *  The date of the most recent transaction.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: a valid date and time value
     */
    lastTransactionDateTime?: Date;
    /**
     *  The status of the most recent transaction.
     *
     * @remarks
     *
     *
     * **Character limit**: 39
     *
     *
     * **Values**: automatically generated
     */
    lastTransactionStatus?: string;
    /**
     *  The date when the mandate was created, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     *
     */
    mandateCreationDate?: Date;
    /**
     *  The ID of the mandate. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 36
     *
     *
     * **Values**: a string of 36 characters or fewer
     */
    mandateID?: string;
    /**
     *  Indicates if  the mandate was received. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 3
     *
     *
     * **Values**: `Yes`, `No `(case-sensitive)
     */
    mandateReceived?: string;
    /**
     *  The date when the mandate was last updated, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     *
     */
    mandateUpdateDate?: Date;
    /**
     *  Specifies the number of allowable consecutive failures Zuora attempts with the payment method before stopping.
     *
     * @remarks
     * When the `UseDefaultRetryRule` field is set to `false`, this field is only required if the `PaymentRetryWindow` field is not defined.
     *
     *
     *
     * **Values**: a valid number
     */
    maxConsecutivePaymentFailures?: number;
    /**
     *  Create Query Delete Filter
     */
    name?: string;
    /**
     *  The number of consecutive failed payment for this payment method. It is reset to 0 upon successful payment. You can use the API to update the field value to 0.
     *
     * @remarks
     *
     *
     * **Character limit**:
     *
     *
     * **Values**: a positive whole number
     */
    numConsecutiveFailures?: number;
    /**
     *  Specifies the status of the payment method. It is set to Active on creation.
     *
     * @remarks
     *
     *
     * **Character limit**: 6
     *
     *
     * **Values**: `Active` or `Closed` PaymentMethodStatus should not be used in the `create
     * ` call. You can only set this field to **Closed** via the `update
     * ` call.
     */
    paymentMethodStatus?: string;
    /**
     *  The retry interval setting, which prevents making a payment attempt if the last failed attempt was within the last specified number of hours.
     *
     * @remarks
     * When the `UseDefaultRetryRule` field is set to `false`, this field is only required if the `MaxConsecutivePaymentFailures` field is not defined.
     *
     *
     * **Character limit**: 4
     *
     *
     * **Values**: a whole number between 1 and 1000, exclusive
     */
    paymentRetryWindow?: number;
    /**
     *  The PayPal billing agreement ID, which is a contract between two PayPal accounts. Typically, the selling party initiates a request to create a BAID, and sends it to buying party for acceptance. The seller can keep track of the BAID and use it for future charges against the buyer.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `PayPal`.
     *
     *
     * **Character limit**: 64
     *
     *
     * **Values**: a string of 64 characters or fewer
     */
    paypalBaid?: string;
    /**
     *  The email address associated with the account holder's PayPal account or of the PayPal account of the person paying for the service.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `PayPal`.
     *
     *
     * **Character limit**: 80
     *
     *
     * **Values**: a string of 80 characters or fewer
     */
    paypalEmail?: string;
    /**
     *  PayPal's Adaptive Payments API key. Zuora does not create this key, nor does it call PayPal to generate it. You must use PayPal's Adaptive Payments' API to generate this key, and then pass it to Zuora. Zuora uses this key to authorize future payments to PayPal's Adaptive Payments API.
     *
     * @remarks
     * This field is only required if you use PayPal Adaptive Payments gateway.
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: a valid PayPal Adaptive Payment pre-approval key
     */
    paypalPreapprovalKey?: string;
    /**
     *  Specifies the PayPal gateway: PayFlow Pro, Express Checkout, or Adaptive Payments.
     *
     * @remarks
     * This field is only required if you use the PayPal Adaptive Payments, Payflow Pro, or Express Checkout gateway.
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: `ExpressCheckout`, `NativeExpressCheckout`, `AdaptivePayments`
     */
    paypalType?: string;
    /**
     *  The phone number that the account holder registered with the bank. This field is used for credit card validation when passing to a gateway.
     *
     * @remarks
     *
     *
     * **Character limit**: 40
     *
     *
     * **Values**: a string of 40 characters or fewer
     */
    phone?: string;
    /**
     *  The zip code of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 20
     *
     *
     * **Values**: a string of 20 characters or fewer
     */
    postalCode?: string;
    /**
     *  A gateway unique identifier that replaces sensitive payment method data. SecondTokenId is conditionally required only when TokenID is being used to represent a gateway customer profile. SecondTokenId is used in the CC Reference Transaction payment method.
     *
     * @remarks
     *
     * **Character limit**: 64
     *
     *
     * **Values**: a string of 64 characters or fewer
     */
    secondTokenId?: string;
    /**
     *  Creates the payment method even if authorization fails with the payment gateway.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `t``rue`, `false`
     */
    skipValidation?: boolean;
    /**
     *  The state of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 70
     *
     *
     * **Values**: a string of 70 characters or fewer
     */
    state?: string;
    /**
     *  The street name of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 100
     *
     *
     * **Values**: a string of 100 characters or fewer
     */
    streetName?: string;
    /**
     *  The street number of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 30
     *
     *
     * **Values**: a string of 30 characters or fewer
     */
    streetNumber?: string;
    /**
     * A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile. If you want to create an Amazon Pay payment method, specify `AmazonBillingAgreementId` for this field.
     *
     * @remarks
     *
     * While `TokenId` is used to represent a customer profile, `SecondTokenId` is conditionally required for representing the underlying tokenized payment method. When the `Type` field is set to `CreditCardReferenceTransaction`, this field is required if the `CreditCardNumber` field is not specified.
     *
     * **Character limit**: 255
     * **Values**: a string of 255 characters or fewer
     *
     */
    tokenId?: string;
    /**
     *  The number of error payments that used this payment method.
     *
     * @remarks
     *
     *
     * **Character limit**:
     *
     *
     * **Values**: automatically generated
     */
    totalNumberOfErrorPayments?: number;
    /**
     *  The number of successful payments that used this payment method.
     *
     * @remarks
     *
     *
     * **Character limit**:
     *
     *
     * **Values**: automatically generated
     */
    totalNumberOfProcessedPayments?: number;
    /**
     * The type of payment method. If you want to create an Amazon Pay payment method, specify `CreditCardReferenceTransaction` for this field.
     */
    type: SubscribeRequestPaymentMethodTypeEnum;
    /**
     *  The ID of the user who last updated the payment method.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the payment method was last updated.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    updatedDate?: Date;
    /**
     *  Determines whether to use the default retry rules configured in the [Z-Payments settings](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/H_Configure_Payment_Method_Retry_Rules). Set this to `true` to use the default retry rules. Set this to `false` to set the specific rules for this payment method. If you set this value to `false`, then the fields, `PaymentRetryWindow` and `MaxConsecutivePaymentFailures`, are required.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     *
     * **Values**: `t``rue`, `false`
     */
    useDefaultRetryRule?: boolean;
}
/**
 * The type of preview to return:
 *
 * @remarks
 *
 *  * `InvoiceItem` - Return an invoice item preview
 *  * `ChargeMetrics` - Return a charge metrics preview
 *  * `InvoiceItemChargeMetrics` - Return an invoice item and charge metrics of that item
 *
 */
export declare enum SubscribeRequestPreviewOptionsPreviewTypeEnum {
    InvoiceItem = "InvoiceItem",
    ChargeMetrics = "ChargeMetrics",
    InvoiceItemChargeMetrics = "InvoiceItemChargeMetrics"
}
/**
 * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
 *
 * @remarks
 *
 */
export declare class SubscribeRequestPreviewOptions extends SpeakeasyBase {
    /**
     * Specifies whether the call should create a subscription/amendment, or whether it should return a preview of the order. Used with either NumberOfPeriods or PreviewThroughTermEnd.
     *
     * @remarks
     *
     * If the preview mode is enabled, Zuora recommends that you set the `subscribes` > `SubscribeOptions` > `ProcessPayments` field to `false` and skip setting the `subscribes` > `PaymentMethod` field in your request so that no charge occurs for payment method validation in a preview.
     *
     */
    enablePreviewMode?: boolean;
    /**
     * The number of invoice periods to show in a preview.
     *
     * @remarks
     *
     */
    numberOfPeriods?: number;
    /**
     * Specifies whether to preview the charge through the end of the subscription term. Applicable to termed subscriptions only.
     *
     * @remarks
     *
     */
    previewThroughTermEnd?: boolean;
    /**
     * The type of preview to return:
     *
     * @remarks
     *
     *  * `InvoiceItem` - Return an invoice item preview
     *  * `ChargeMetrics` - Return a charge metrics preview
     *  * `InvoiceItemChargeMetrics` - Return an invoice item and charge metrics of that item
     *
     */
    previewType?: SubscribeRequestPreviewOptionsPreviewTypeEnum;
}
export declare class SubscribeRequestSubscribeOptionsElectronicPaymentOptions extends SpeakeasyBase {
    paymentMethodId?: string;
}
export declare class SubscribeRequestSubscribeOptionsExternalPaymentOptions extends SpeakeasyBase {
    amount?: number;
    effectiveDate?: Date;
    gatewayOrderId?: string;
    paymentMethodId?: string;
    referenceId?: string;
}
export declare class SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions extends SpeakeasyBase {
    invoiceDate?: Date;
    /**
     * A string specifying the scope of the requested invoice. Possible values:
     *
     * @remarks
     * * `Account` invoice for all subscriptions within the account - the default value
     * * `Subscription` invoice for only the subscription being created in this call
     *
     */
    invoiceProcessingScope?: string;
    invoiceTargetDate?: Date;
}
/**
 *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
 *
 * @remarks
 * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
 *
 *
 * **Values:** A valid SubscribeOptions object.
 */
export declare class SubscribeRequestSubscribeOptions extends SpeakeasyBase {
    /**
     * The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.
     *
     * @remarks
     *
     * **Note:**
     *   - This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
     *   - This field is valid only if the `applyCredit` field is set to `true`.
     *   - If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.
     *   - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `["CreditMemo"]`, only credit memos are used to apply to invoices.
     *
     */
    applicationOrder?: string[];
    /**
     * Whether to automatically apply credit memos or unapplied payments, or both to an invoice.
     *
     * @remarks
     *
     * If the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken.
     *
     * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
     *
     */
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    electronicPaymentOptions?: SubscribeRequestSubscribeOptionsElectronicPaymentOptions;
    externalPaymentOptions?: SubscribeRequestSubscribeOptionsExternalPaymentOptions;
    generateInvoice: boolean;
    /**
     * Use this when you are using electronic payment types.
     *
     * @remarks
     *
     * If `GenerateInvoice` is true, specifies whether payment should be applied when the subscription is created. If the `Account` > `AutoPay` flag is true and `GenerateInvoice` is true and `ProcessPayments` is true, then the payment is created for the invoice balance and charged. The default value is `true`.
     *
     * If a temporary error that Zuora cannot create or submit a payment to the gateway is seen, Zuora will automatically retry the action to collect the payment. You can contact [Zuora Global Support](https://support.zuora.com/) to set the maximum number of retries that Zuora can perform. The number can range from 0 to 2 with a default value of 0. However, retrying the request can make the API call take longer than expected. Zuora does not guarantee the retry could be completed within the timeout limit.
     *
     * **Note:** The retry mechanism only supports the case that one single subscription is created by the Subscribe action. Also, the retry mechanism does not support the preview mode of the Subscribe action.
     *
     * **Note:** If you have the [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) feature enabled, Zuora does not support using this field to collect payments against invoices.
     *
     */
    processPayments: boolean;
    subscribeInvoiceProcessingOptions?: SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions;
}
/**
 *  This object contains the information on the contract's dates and terms.
 *
 * @remarks
 *
 *
 * **Values:** A valid SubscriptionData object.
 */
export declare class SubscribeRequestSubscriptionData extends SpeakeasyBase {
    ratePlanData: RatePlanData[];
    subscription: SubscribeRequestSubscriptionDataSubscription;
}
export declare class SubscribeRequest extends SpeakeasyBase {
    /**
     *  This is the Account object containing the information for this particular subscription. It has all the information needed to create an account for a subscription.
     *
     * @remarks
     *
     * **Values:** A valid account.
     */
    account: SubscribeRequestAccount;
    /**
     *  This is the object that contains the contact associated with this account in the Account's `BillToId` field.
     *
     * @remarks
     * This field is only required if the account does not exist.
     * Values: A valid contact for the account.
     */
    billToContact?: SubscribeRequestBillToContact;
    /**
     *  This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
     *
     * @remarks
     * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
     * Values: A valid electronic PaymentMethod.
     */
    paymentMethod?: SubscribeRequestPaymentMethod;
    /**
     * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
     *
     * @remarks
     *
     */
    previewOptions?: SubscribeRequestPreviewOptions;
    /**
     *  Unless otherwise specified, this field defaults to the information in the `BillToContact` field.
     *
     * @remarks
     *
     * **Values:** A valid contact.
     */
    soldToContact?: SubscribeRequestSoldToContact;
    /**
     *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
     *
     * @remarks
     * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
     *
     *
     * **Values:** A valid SubscribeOptions object.
     */
    subscribeOptions?: SubscribeRequestSubscribeOptions;
    /**
     *  This object contains the information on the contract's dates and terms.
     *
     * @remarks
     *
     *
     * **Values:** A valid SubscriptionData object.
     */
    subscriptionData: SubscribeRequestSubscriptionData;
}
