import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyGetPaymentMethodSnapshotAchAccountTypeEnum {
    BusinessChecking = "BusinessChecking",
    Checking = "Checking",
    Saving = "Saving"
}
export declare enum ProxyGetPaymentMethodSnapshotBankTransferTypeEnum {
    AutomatischIncasso = "AutomatischIncasso",
    LastschriftDe = "LastschriftDE",
    LastschriftAt = "LastschriftAT",
    DemandeDePrelevement = "DemandeDePrelevement",
    DirectDebitUk = "DirectDebitUK",
    Domicil = "Domicil",
    LastschriftCh = "LastschriftCH",
    Rid = "RID",
    OrdenDeDomiciliacion = "OrdenDeDomiciliacion",
    Autogiro = "Autogiro",
    Betalingsservice = "Betalingsservice"
}
export declare enum ProxyGetPaymentMethodSnapshotCreditCardTypeEnum {
    AmericanExpress = "AmericanExpress",
    Discover = "Discover",
    MasterCard = "MasterCard",
    Visa = "Visa"
}
export declare enum ProxyGetPaymentMethodSnapshotExistingMandateEnum {
    Yes = "Yes",
    No = "No"
}
export declare enum ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum {
    Active = "Active",
    Closed = "Closed"
}
export declare enum ProxyGetPaymentMethodSnapshotPaypalTypeEnum {
    ExpressCheckout = "ExpressCheckout",
    AdaptivePayments = "AdaptivePayments"
}
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
    accountId?: string;
    achAbaCode?: string;
    achAccountName?: string;
    achAccountNumberMask?: string;
    achAccountType?: ProxyGetPaymentMethodSnapshotAchAccountTypeEnum;
    achBankName?: string;
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
    bankTransferAccountNumberMask?: string;
    bankTransferAccountType?: string;
    bankTransferType?: ProxyGetPaymentMethodSnapshotBankTransferTypeEnum;
    businessIdentificationCode?: string;
    city?: string;
    companyName?: string;
    country?: string;
    creditCardAddress1?: string;
    creditCardAddress2?: string;
    creditCardCity?: string;
    creditCardCountry?: string;
    creditCardExpirationMonth?: number;
    creditCardExpirationYear?: number;
    creditCardHolderName?: string;
    creditCardMaskNumber?: string;
    creditCardPostalCode?: string;
    creditCardState?: string;
    creditCardType?: ProxyGetPaymentMethodSnapshotCreditCardTypeEnum;
    deviceSessionId?: string;
    email?: string;
    existingMandate?: ProxyGetPaymentMethodSnapshotExistingMandateEnum;
    firstName?: string;
    iban?: string;
    ipAddress?: string;
    id?: string;
    identityNumber?: string;
    isCompany?: boolean;
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
    paymentMethodId?: string;
    paymentMethodStatus?: ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum;
    paymentRetryWindow?: number;
    paypalBaid?: string;
    paypalEmail?: string;
    paypalPreapprovalKey?: string;
    paypalType?: ProxyGetPaymentMethodSnapshotPaypalTypeEnum;
    phone?: string;
    postalCode?: string;
    secondTokenId?: string;
    state?: string;
    streetName?: string;
    streetNumber?: string;
    tokenId?: string;
    totalNumberOfErrorPayments?: number;
    totalNumberOfProcessedPayments?: number;
    type?: ProxyGetPaymentMethodSnapshotTypeEnum;
    useDefaultRetryRule?: boolean;
}
