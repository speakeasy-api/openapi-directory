import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of payment method.
 */
export declare enum ProxyGetPaymentMethodTypeEnum {
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
export declare class ProxyGetPaymentMethod extends SpeakeasyBase {
    /**
     *  The ID of the customer account associated with this payment method. This field is not required for the account ID.
     */
    accountId?: string;
    /**
     *  The nine-digit routing number or ABA number used by banks. Use this field for ACH payment methods.
     *
     * @remarks
     * **Character limit**: 9 **Values**: a string of 9 characters or fewer
     */
    achAbaCode?: string;
    /**
     *  The name of the account holder, which can be either a person or a company. Use this field for ACH payment methods.
     *
     * @remarks
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    achAccountName?: string;
    /**
     *  This is a masked displayable version of the ACH account number, used for security purposes. For example: `XXXXXXXXX54321`. Use this field for ACH payment methods.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    achAccountNumberMask?: string;
    /**
     *  The type of bank account associated with the ACH payment. Use this field for ACH payment methods.
     *
     * @remarks
     * **Character limit**: 16 **Values**:
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
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    achBankName?: string;
    /**
     *  Specifies whether a payment method is available in Zuora. This field is used to indicate if a payment method is loaded by the system or created by the customer.
     *
     * @remarks
     * - `true`: System loaded payment method.
     * - `false`: Customer created payment method.
     *
     * The default value is `false`.
     * **Character limit**: 5 **Values**: `true`, `false`
     */
    active?: boolean;
    /**
     *  The branch code of the bank used for direct debit. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 10 **Values**:  string of 10 characters or fewer
     */
    bankBranchCode?: string;
    /**
     * The check digit in the international bank account number, which confirms the validity of the account. Use this field for direct debit payment methods. **Character limit**: 4 **Values**:  string of 4 characters or fewer
     */
    bankCheckDigit?: string;
    /**
     *  The city of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:70 **Values**:  string of 70 characters or fewer
     */
    bankCity?: string;
    /**
     *  The sort code or number that identifies the bank. This is also known as the sort code. This field is required for direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 18 **Values**:  string of 18 characters or fewer
     */
    bankCode?: string;
    /**
     *  The first six digits of the payment method's number, such as the credit card number or account number. Banks use this number to identify a payment method.
     *
     * @remarks
     * **Character limit**: 6 **Values**:  string of 6 characters or fewer
     */
    bankIdentificationNumber?: string;
    /**
     *  The name of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:80 **Values**:  string of 80 characters or fewer
     */
    bankName?: string;
    /**
     *  The zip code or postal code of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:20 **Values**:  string of 20 characters or fewer
     */
    bankPostalCode?: string;
    /**
     *  The name of the street of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:60 **Values**:  string of 60 characters or fewer
     */
    bankStreetName?: string;
    /**
     *  The number of the direct debit bank. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:10 **Values**:  string of 10 characters or fewer
     */
    bankStreetNumber?: string;
    /**
     *  The name on the direct debit bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 60 **Values**:  string of 60 characters or fewer
     */
    bankTransferAccountName?: string;
    /**
     * The number of the customer's bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 30
     * **Values**: a string of 30 characters or fewer
     *
     */
    bankTransferAccountNumber?: string;
    /**
     *  This is a masked displayable version of the bank account number, used for security purposes. For example: `XXXXXXXXX54321`.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    bankTransferAccountNumberMask?: string;
    /**
     *  The type of the customer's bank account. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 11 **Values**: `DirectDebit`
     */
    bankTransferAccountType?: string;
    /**
     * The type of direct debit transfer. The value of this field is dependent on the country of the user. This field is only required if the `Type` field is set to `BankTransfer`.
     *
     * @remarks
     *
     *  **Values**:
     *
     *    - `SEPA`
     *
     *    - `AutomatischIncasso` (NL)
     *
     *    - `LastschriftDE` (Germany)
     *
     *    - `LastschriftAT` (Austria)
     *
     *    - `DemandeDePrelevement` (FR)
     *
     *    - `DirectDebitUK` (UK)
     *
     *    - `Domicil` (Belgium)
     *
     *    - `LastschriftCH` (CH)
     *
     *    - `RID` (Italy)
     *
     *    - `OrdenDeDomiciliacion` (Spain)
     *    - `Autogiro` (Sweden)
     *    - `Betalingsservice` (Denmark)
     *
     */
    bankTransferType?: string;
    /**
     *  The business identification code for Swiss direct payment methods that use the Global Collect payment gateway. Use this field only for direct debit payments in Switzerland with Global Collect.
     *
     * @remarks
     * **Character limit**: 11 **Values**: string of 11 characters or fewer
     */
    businessIdentificationCode?: string;
    /**
     *  The city of the customer's address. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**:80 **Values**:  string of 80 characters or fewer
     */
    city?: string;
    /**
     * The name of the company.
     *
     * @remarks
     *
     */
    companyName?: string;
    /**
     *  The two-letter country code of the customer's address. Use this field for direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 2 **Values**: a valid country code
     */
    country?: string;
    /**
     *  The user ID of the person who created the `PaymentMethod` object when there is a login user in the user session. In Hosted Payment Method and Zuora Checkout pages, this field is set to 3 as there is no login user to initiate a user session.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the `PaymentMethod` object was created in the Zuora system.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The first line of the card holder's address, which is often a street address or business name. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    creditCardAddress1?: string;
    /**
     *  The second line of the card holder's address. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    creditCardAddress2?: string;
    /**
     *  The city of the card holder's address. Use this field for credit card and direct debit payment methods **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    creditCardCity?: string;
    /**
     *  The country of the card holder's address.
     */
    creditCardCountry?: string;
    /**
     *  The expiration month of the credit card or debit card. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 2 **Values**: a two-digit number, 01 - 12
     */
    creditCardExpirationMonth?: number;
    /**
     *  The expiration month of the credit card or debit card. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 4 **Values**: a four-digit number
     */
    creditCardExpirationYear?: number;
    /**
     *  The full name of the card holder. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     * **Character limit**: 50 **Values**: a string of 50 characters or fewer
     */
    creditCardHolderName?: string;
    /**
     *  A masked version of the credit or debit card number.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    creditCardMaskNumber?: string;
    /**
     *  The billing address's zip code. This field is required only when you define a debit card or credit card payment.
     *
     * @remarks
     * **Character limit**: 20 **Values**: a string of 20 characters or fewer
     */
    creditCardPostalCode?: string;
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
     * **Character limit**: 255
     */
    deviceSessionId?: string;
    /**
     *  An email address for the payment method in addition to the bill to contact email address.
     *
     * @remarks
     * **Character limit**: 80 **Values**: a string of 80 characters or fewer
     */
    email?: string;
    /**
     *  Indicates if the customer has an existing mandate or a new mandate. A mandate is a signed authorization for UK and NL customers. When you are migrating mandates from another system, be sure to set this field correctly. If you indicate that a new mandate is an existing mandate or vice-versa, then transactions fail. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 3 **Values**: `Yes` or `No`
     */
    existingMandate?: string;
    /**
     *  The customer's first name. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 30 **Values**: a string of 30 characters or fewer
     */
    firstName?: string;
    /**
     *  The International Bank Account Number. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 42 **Values**: a string of 42 characters or fewer
     */
    iban?: string;
    /**
     *  The IP address of the user when the payment method was created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, then Zuora passes this field to supported gateways. Currently PayPal, CyberSource, Authorize.Net, Verifi, and WorldPay support this field.
     *
     * @remarks
     * **Character limit**: 15 **Values**: a string of 15 characters or fewer
     */
    ipAddress?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     * The unique identity number of the customer account.
     *
     * @remarks
     *
     */
    identityNumber?: string;
    /**
     * Whether the customer account is a company.
     *
     * @remarks
     *
     */
    isCompany?: boolean;
    /**
     *  The date of the last failed attempt to collect payment with this payment method.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    lastFailedSaleTransactionDate?: Date;
    /**
     *  The customer's last name. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    lastName?: string;
    /**
     *  The date of the most recent transaction.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    lastTransactionDateTime?: Date;
    /**
     *  The status of the most recent transaction.
     *
     * @remarks
     * **Character limit**: 39 **Values**: automatically generated
     */
    lastTransactionStatus?: string;
    /**
     *  The date when the mandate was created, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 29
     */
    mandateCreationDate?: Date;
    /**
     *  The ID of the mandate. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 36 **Values**: a string of 36 characters or fewer
     */
    mandateID?: string;
    /**
     *  Indicates if  the mandate was received. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 3 **Values**: `Yes` or `No `(case-sensitive)
     */
    mandateReceived?: string;
    /**
     *  The date when the mandate was last updated, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 29
     */
    mandateUpdateDate?: Date;
    /**
     *  Specifies the number of allowable consecutive failures Zuora attempts with the payment method before stopping.
     *
     * @remarks
     * **Values**: a valid number
     */
    maxConsecutivePaymentFailures?: number;
    /**
     * The name of the payment method.
     */
    name?: string;
    /**
     * The number of consecutive failed payments for this payment method. It is reset to `0` upon successful payment.
     *
     * @remarks
     *
     */
    numConsecutiveFailures?: number;
    /**
     *  This field is used to indicate the status of the payment method created within an account. It is set to `Active` on creation.
     *
     * @remarks
     * **Character limit**: 6 **Values**: `Active` or `Closed`
     *
     */
    paymentMethodStatus?: string;
    /**
     *  The retry interval setting, which prevents making a payment attempt if the last failed attempt was within the last specified number of hours. This field is required if the `UseDefaultRetryRule` field value is set to `false`.
     *
     * @remarks
     * **Character limit**: 4 **Values**: a whole number between 1 and 1000, exclusive
     */
    paymentRetryWindow?: number;
    /**
     *  The PayPal billing agreement ID, which is a contract between two PayPal accounts. Typically, the selling party initiates a request to create a BAID, and sends it to buying party for acceptance. The seller can keep track of the BAID and use it for future charges against the buyer. This field is required when defining a PayPal payment method.
     *
     * @remarks
     * **Character limit**: 64 **Values**: a string of 64 characters or fewer
     */
    paypalBaid?: string;
    /**
     *  The email address associated with the account holder's PayPal account or of the PayPal account of the person paying for the service. This field is required only when you define a PayPal payment method.
     *
     * @remarks
     * **Character limit**: 80 **Values**: a string of 80 characters or fewer
     */
    paypalEmail?: string;
    /**
     *  PayPal's Adaptive Payments API key. Zuora does not create this key, nor does it call PayPal to generate it. You must use PayPal's Adaptive Payments' API to generate this key, and then pass it to Zuora. Zuora uses this key to authorize future payments to PayPal's Adaptive Payments API. This field is required when you use PayPal Adaptive Payments gateway.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid PayPal Adaptive Payment pre-approval key
     */
    paypalPreapprovalKey?: string;
    /**
     *  Specifies the PayPal gateway: PayFlow Pro (Express Checkout) or Adaptive Payments. This field is required when you use PayPal Adaptive Payments or Payflow Pro (Express Checkout) gateways.
     *
     * @remarks
     * **Character limit**: 32 **Values**: `ExpressCheckout` or `AdaptivePayments`
     */
    paypalType?: string;
    /**
     *  The phone number that the account holder registered with the bank. This field is used for credit card validation when passing to a gateway.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    phone?: string;
    /**
     *  The zip code of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 20 **Values**: a string of 20 characters or fewer
     */
    postalCode?: string;
    /**
     *  A gateway unique identifier that replaces sensitive payment method data. `SecondTokenId` is conditionally required only when `TokenId` is being used to represent a gateway customer profile. `SecondTokenId` is used in the CC Reference Transaction payment method. **Character limit**: 64 **Values**: a string of 64 characters or fewer
     */
    secondTokenId?: string;
    /**
     *  The state of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    state?: string;
    /**
     *  The street name of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    streetName?: string;
    /**
     *  The street number of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 30 **Values**: a string of 30 characters or fewer
     */
    streetNumber?: string;
    /**
     *  A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile. `TokenId` is required for the CC Reference Transaction payment method.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    tokenId?: string;
    /**
     *  The number of error payments that used this payment method.
     *
     * @remarks
     * **Character limit**: **Values**: automatically generated
     */
    totalNumberOfErrorPayments?: number;
    /**
     *  The number of successful payments that used this payment method.
     *
     * @remarks
     * **Character limit**: **Values**: automatically generated
     */
    totalNumberOfProcessedPayments?: number;
    /**
     * The type of payment method.
     */
    type?: ProxyGetPaymentMethodTypeEnum;
    /**
     *  The ID of the user who last updated the payment method.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the payment method was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
    /**
     *  Determines whether to use the default retry rules configured in the Zuora Payments settings. Set this to `true` to use the default retry rules. Set this to `false` to set the specific rules for this payment method. If you set this value to `false`, then the fields, `PaymentRetryWindow` and `MaxConsecutivePaymentFailures`, are required.
     *
     * @remarks
     * **Character limit**: 5 **Values**: `t``rue`, `false`
     */
    useDefaultRetryRule?: boolean;
}
