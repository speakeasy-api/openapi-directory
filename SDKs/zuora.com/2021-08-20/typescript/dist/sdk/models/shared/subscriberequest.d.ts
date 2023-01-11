import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayOption } from "./gatewayoption";
import { RatePlanData } from "./rateplandata";
/**
 *  Use this field to pass gateway options.
 *
 *
 * **Character limit**: 255
 *
 *
 * **Values**: GatewayOption
**/
export declare class SubscribeRequestPaymentMethodGatewayOptionData extends SpeakeasyBase {
    gatewayOption: GatewayOption[];
}
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
 * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
 * Values: A valid electronic PaymentMethod.
**/
export declare class SubscribeRequestPaymentMethod extends SpeakeasyBase {
    accountId?: string;
    achAbaCode?: string;
    achAccountName?: string;
    achAccountNumber?: string;
    achAccountNumberMask?: string;
    achAccountType?: string;
    achAddress1?: string;
    achAddress2?: string;
    achBankName?: string;
    active?: boolean;
    bankBranchCode?: string;
    bankCheckDigit?: string;
    bankCity?: string;
    bankCode?: string;
    bankIdentificationNumber?: string;
    bankName?: string;
    bankPostalCode?: string;
    bankStreetName?: string;
    bankStreetNumber?: string;
    bankTransferAccountName?: string;
    bankTransferAccountNumber?: string;
    bankTransferAccountNumberMask?: string;
    bankTransferAccountType?: string;
    bankTransferType?: string;
    businessIdentificationCode?: string;
    city?: string;
    country?: string;
    createdById?: string;
    createdDate?: Date;
    creditCardAddress1?: string;
    creditCardAddress2?: string;
    creditCardCity?: string;
    creditCardCountry?: string;
    creditCardExpirationMonth?: number;
    creditCardExpirationYear?: number;
    creditCardHolderName?: string;
    creditCardMaskNumber?: string;
    creditCardNumber?: string;
    creditCardPostalCode?: string;
    creditCardSecurityCode?: string;
    creditCardState?: string;
    creditCardType?: string;
    deviceSessionId?: string;
    email?: string;
    existingMandate?: string;
    firstName?: string;
    gatewayOptionData?: SubscribeRequestPaymentMethodGatewayOptionData;
    iban?: string;
    ipAddress?: string;
    id?: string;
    lastFailedSaleTransactionDate?: Date;
    lastName?: string;
    lastTransactionDateTime?: Date;
    lastTransactionStatus?: string;
    mandateCreationDate?: Date;
    mandateID?: string;
    mandateReceived?: string;
    mandateUpdateDate?: Date;
    maxConsecutivePaymentFailures?: number;
    name?: string;
    numConsecutiveFailures?: number;
    paymentMethodStatus?: string;
    paymentRetryWindow?: number;
    paypalBaid?: string;
    paypalEmail?: string;
    paypalPreapprovalKey?: string;
    paypalType?: string;
    phone?: string;
    postalCode?: string;
    secondTokenId?: string;
    skipValidation?: boolean;
    state?: string;
    streetName?: string;
    streetNumber?: string;
    tokenId?: string;
    totalNumberOfErrorPayments?: number;
    totalNumberOfProcessedPayments?: number;
    type: SubscribeRequestPaymentMethodTypeEnum;
    updatedById?: string;
    updatedDate?: Date;
    useDefaultRetryRule?: boolean;
}
export declare enum SubscribeRequestPreviewOptionsPreviewTypeEnum {
    InvoiceItem = "InvoiceItem",
    ChargeMetrics = "ChargeMetrics",
    InvoiceItemChargeMetrics = "InvoiceItemChargeMetrics"
}
/**
 * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
 *
**/
export declare class SubscribeRequestPreviewOptions extends SpeakeasyBase {
    enablePreviewMode?: boolean;
    numberOfPeriods?: number;
    previewThroughTermEnd?: boolean;
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
    invoiceProcessingScope?: string;
    invoiceTargetDate?: Date;
}
/**
 *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
 * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
 *
 *
 * **Values:** A valid SubscribeOptions object.
**/
export declare class SubscribeRequestSubscribeOptions extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    electronicPaymentOptions?: SubscribeRequestSubscribeOptionsElectronicPaymentOptions;
    externalPaymentOptions?: SubscribeRequestSubscribeOptionsExternalPaymentOptions;
    generateInvoice: boolean;
    processPayments: boolean;
    subscribeInvoiceProcessingOptions?: SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions;
}
/**
 *  This object contains the information on the contract's dates and terms.
 *
 *
 * **Values:** A valid SubscriptionData object.
**/
export declare class SubscribeRequestSubscriptionData extends SpeakeasyBase {
    ratePlanData: RatePlanData[];
    subscription: Record<string, any>;
}
export declare class SubscribeRequest extends SpeakeasyBase {
    account: Record<string, any>;
    billToContact?: Record<string, any>;
    paymentMethod?: SubscribeRequestPaymentMethod;
    previewOptions?: SubscribeRequestPreviewOptions;
    soldToContact?: Record<string, any>;
    subscribeOptions?: SubscribeRequestSubscribeOptions;
    subscriptionData: SubscribeRequestSubscriptionData;
}
