import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of bank account associated with the ACH payment.
 */
export declare enum ProxyGetPaymentMethodSnapshotAchAccountTypeEnum {
    BusinessChecking = "BusinessChecking",
    Checking = "Checking",
    Saving = "Saving"
}
/**
 * Specifies the type of direct debit transfer. The value of this field is dependent on the country of the user.
 *
 * @remarks
 *
 * Possible Values:
 *
 *
 * * `AutomatischIncasso` (NL)
 *
 * * `LastschriftDE` (Germany)
 *
 * * `LastschriftAT` (Austria)
 *
 * * `DemandeDePrelevement` (FR)
 *
 * * `DirectDebitUK` (UK)
 *
 * * `Domicil` (Belgium)
 *
 * * `LastschriftCH` (CH)
 *
 * * `RID` (Italy)
 *
 * * `OrdenDeDomiciliacion` (Spain)
 * * `Autogiro` (Sweden)
 * * `Betalingsservice` (Denmark)
 *
 */
export declare enum ProxyGetPaymentMethodSnapshotBankTransferTypeEnum {
    AutomatischIncasso = "AutomatischIncasso",
    LastschriftDE = "LastschriftDE",
    LastschriftAT = "LastschriftAT",
    DemandeDePrelevement = "DemandeDePrelevement",
    DirectDebitUK = "DirectDebitUK",
    Domicil = "Domicil",
    LastschriftCH = "LastschriftCH",
    Rid = "RID",
    OrdenDeDomiciliacion = "OrdenDeDomiciliacion",
    Autogiro = "Autogiro",
    Betalingsservice = "Betalingsservice"
}
/**
 * The type of credit card or debit card.
 */
export declare enum ProxyGetPaymentMethodSnapshotCreditCardTypeEnum {
    AmericanExpress = "AmericanExpress",
    Discover = "Discover",
    MasterCard = "MasterCard",
    Visa = "Visa"
}
/**
 * Indicates if the customer has an existing mandate or a new mandate. Only applicable to direct debit payment methods.
 */
export declare enum ProxyGetPaymentMethodSnapshotExistingMandateEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Specifies the status of the payment method.
 */
export declare enum ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum {
    Active = "Active",
    Closed = "Closed"
}
/**
 * Specifies the PayPal gateway: PayFlow Pro (Express Checkout) or Adaptive Payments.
 */
export declare enum ProxyGetPaymentMethodSnapshotPaypalTypeEnum {
    ExpressCheckout = "ExpressCheckout",
    AdaptivePayments = "AdaptivePayments"
}
/**
 * The type of payment method.
 */
export declare enum ProxyGetPaymentMethodSnapshotTypeEnum {
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
export declare class ProxyGetPaymentMethodSnapshot extends SpeakeasyBase {
    /**
     * The ID of the customer account associated with this payment method.
     */
    accountId?: string;
    /**
     * The nine-digit routing number or ABA number used by banks. Applicable to ACH payment methods.
     */
    achAbaCode?: string;
    /**
     * The name of the account holder, which can be either a person or a company. Applicable to ACH payment methods.
     */
    achAccountName?: string;
    /**
     * This is a masked displayable version of the ACH account number, used for security purposes. For example: `XXXXXXXXX54321`.
     */
    achAccountNumberMask?: string;
    /**
     * The type of bank account associated with the ACH payment.
     */
    achAccountType?: ProxyGetPaymentMethodSnapshotAchAccountTypeEnum;
    /**
     * The name of the bank where the ACH payment account is held.
     */
    achBankName?: string;
    /**
     * The branch code of the bank used for direct debit.
     */
    bankBranchCode?: string;
    /**
     * The check digit in the international bank account number, which confirms the validity of the account. Applicable to direct debit payment methods.
     */
    bankCheckDigit?: string;
    /**
     * The city of the direct debit bank.
     */
    bankCity?: string;
    /**
     * The sort code or number that identifies the bank. This is also known as the sort code.
     */
    bankCode?: string;
    /**
     * The first six digits of the payment method's number, such as the credit card number or account number. Banks use this number to identify a payment method.
     */
    bankIdentificationNumber?: string;
    /**
     * The name of the direct debit bank.
     */
    bankName?: string;
    /**
     * The zip code or postal code of the direct debit bank.
     */
    bankPostalCode?: string;
    /**
     * The name of the street of the direct debit bank.
     */
    bankStreetName?: string;
    /**
     * The number of the direct debit bank.
     */
    bankStreetNumber?: string;
    /**
     * The name on the direct debit bank account.
     */
    bankTransferAccountName?: string;
    /**
     * This is a masked displayable version of the bank account number, used for security purposes. For example: `XXXXXXXXX54321`.
     */
    bankTransferAccountNumberMask?: string;
    /**
     * The type of the customer's bank account. Applicable to direct debit payment methods.
     */
    bankTransferAccountType?: string;
    /**
     * Specifies the type of direct debit transfer. The value of this field is dependent on the country of the user.
     *
     * @remarks
     *
     * Possible Values:
     *
     *
     * * `AutomatischIncasso` (NL)
     *
     * * `LastschriftDE` (Germany)
     *
     * * `LastschriftAT` (Austria)
     *
     * * `DemandeDePrelevement` (FR)
     *
     * * `DirectDebitUK` (UK)
     *
     * * `Domicil` (Belgium)
     *
     * * `LastschriftCH` (CH)
     *
     * * `RID` (Italy)
     *
     * * `OrdenDeDomiciliacion` (Spain)
     * * `Autogiro` (Sweden)
     * * `Betalingsservice` (Denmark)
     *
     */
    bankTransferType?: ProxyGetPaymentMethodSnapshotBankTransferTypeEnum;
    /**
     * The business identification code for Swiss direct payment methods that use the Global Collect payment gateway. Only applicable to direct debit payments in Switzerland with Global Collect.
     */
    businessIdentificationCode?: string;
    /**
     * The city of the customer's address. Applicable to debit payment methods.
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
     * The two-letter country code of the customer's address. Applicable to direct debit payment methods.
     */
    country?: string;
    /**
     * The first line of the card holder's address, which is often a street address or business name. Applicable to credit card and direct debit payment methods.
     */
    creditCardAddress1?: string;
    /**
     * The second line of the card holder's address. Applicable to credit card and direct debit payment methods.
     */
    creditCardAddress2?: string;
    /**
     * The city of the card holder's address. Applicable to credit card and direct debit payment methods.
     */
    creditCardCity?: string;
    /**
     * The country of the card holder's address.
     */
    creditCardCountry?: string;
    /**
     * The expiration month of the credit card or debit card. Applicable to credit card and direct debit payment methods.
     */
    creditCardExpirationMonth?: number;
    /**
     * The expiration month of the credit card or debit card. Applicable to credit card and direct debit payment methods.
     */
    creditCardExpirationYear?: number;
    /**
     * The full name of the card holder. Applicable to credit card and direct debit payment methods.
     */
    creditCardHolderName?: string;
    /**
     * A masked version of the credit or debit card number.
     */
    creditCardMaskNumber?: string;
    /**
     * The billing address's zip code.
     */
    creditCardPostalCode?: string;
    /**
     * The billing address's state. Applicable if `CreditCardCountry` is either Canada or the US.
     */
    creditCardState?: string;
    /**
     * The type of credit card or debit card.
     */
    creditCardType?: ProxyGetPaymentMethodSnapshotCreditCardTypeEnum;
    /**
     * The session ID of the user when the `PaymentMethod` was created or updated.
     */
    deviceSessionId?: string;
    /**
     * An email address for the payment method in addition to the bill to contact email address.
     */
    email?: string;
    /**
     * Indicates if the customer has an existing mandate or a new mandate. Only applicable to direct debit payment methods.
     */
    existingMandate?: ProxyGetPaymentMethodSnapshotExistingMandateEnum;
    /**
     * The customer's first name. Only applicable to direct debit payment methods.
     */
    firstName?: string;
    /**
     * The International Bank Account Number. Only applicable to direct debit payment methods.
     */
    iban?: string;
    /**
     * The IP address of the user when the payment method was created or updated.
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
     * The date of the last failed attempt to collect payment with this payment method.
     */
    lastFailedSaleTransactionDate?: Date;
    /**
     * The customer's last name. Only applicable to direct debit payment methods.
     */
    lastName?: string;
    /**
     * The date of the most recent transaction.
     */
    lastTransactionDateTime?: Date;
    /**
     * The status of the most recent transaction.
     */
    lastTransactionStatus?: string;
    /**
     * The date when the mandate was created, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. Only applicable to direct debit payment methods.
     */
    mandateCreationDate?: Date;
    /**
     * The ID of the mandate. A mandate is a signed authorization for UK and NL customers. Only applicable to direct debit payment methods.
     */
    mandateID?: string;
    /**
     * Indicates if  the mandate was received. A mandate is a signed authorization for UK and NL customers. Only applicable to direct debit payment methods.
     */
    mandateReceived?: string;
    /**
     * The date when the mandate was last updated, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. Only applicable to direct debit payment methods.
     */
    mandateUpdateDate?: Date;
    /**
     * The number of allowable consecutive failures Zuora attempts with the payment method before stopping.
     */
    maxConsecutivePaymentFailures?: number;
    /**
     * The name of the payment method.
     */
    name?: string;
    /**
     * The number of consecutive failed payment for the payment method.
     */
    numConsecutiveFailures?: number;
    /**
     * Object identifier of the payment method.
     */
    paymentMethodId?: string;
    /**
     * Specifies the status of the payment method.
     */
    paymentMethodStatus?: ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum;
    /**
     * The retry interval setting, which prevents making a payment attempt if the last failed attempt was within the last specified number of hours.
     */
    paymentRetryWindow?: number;
    /**
     * The PayPal billing agreement ID, which is a contract between two PayPal accounts.
     */
    paypalBaid?: string;
    /**
     * The email address associated with the account holder's PayPal account or of the PayPal account of the person paying for the service.
     */
    paypalEmail?: string;
    /**
     * PayPal's Adaptive Payments API key.
     */
    paypalPreapprovalKey?: string;
    /**
     * Specifies the PayPal gateway: PayFlow Pro (Express Checkout) or Adaptive Payments.
     */
    paypalType?: ProxyGetPaymentMethodSnapshotPaypalTypeEnum;
    /**
     * The phone number that the account holder registered with the bank. This field is used for credit card validation when passing to a gateway.
     */
    phone?: string;
    /**
     * The zip code of the customer's address. Only applicable to direct debit payment methods.
     */
    postalCode?: string;
    /**
     * A gateway unique identifier that replaces sensitive payment method data. Applicable to CC Reference Transaction payment methods.
     */
    secondTokenId?: string;
    /**
     * The state of the customer's address. Only applicable to direct debit payment methods.
     */
    state?: string;
    /**
     * The street name of the customer's address. Only applicable to direct debit payment methods.
     */
    streetName?: string;
    /**
     * The street number of the customer's address. Only applicable to direct debit payment methods.
     */
    streetNumber?: string;
    /**
     * A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile. Applicable to CC Reference Transaction payment methods.
     */
    tokenId?: string;
    /**
     * The number of error payments that used this payment method.
     */
    totalNumberOfErrorPayments?: number;
    /**
     * The number of successful payments that used this payment method.
     */
    totalNumberOfProcessedPayments?: number;
    /**
     * The type of payment method.
     */
    type?: ProxyGetPaymentMethodSnapshotTypeEnum;
    /**
     * Determines whether to use the default retry rules configured in the Zuora Payments settings.
     */
    useDefaultRetryRule?: boolean;
}
