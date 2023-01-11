import { SpeakeasyBase } from "../../../internal/utils";
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
    accountId?: string;
    achAbaCode?: string;
    achAccountName?: string;
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
    companyName?: string;
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
    creditCardPostalCode?: string;
    creditCardState?: string;
    creditCardType?: string;
    deviceSessionId?: string;
    email?: string;
    existingMandate?: string;
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
    paymentMethodStatus?: string;
    paymentRetryWindow?: number;
    paypalBaid?: string;
    paypalEmail?: string;
    paypalPreapprovalKey?: string;
    paypalType?: string;
    phone?: string;
    postalCode?: string;
    secondTokenId?: string;
    state?: string;
    streetName?: string;
    streetNumber?: string;
    tokenId?: string;
    totalNumberOfErrorPayments?: number;
    totalNumberOfProcessedPayments?: number;
    type?: ProxyGetPaymentMethodTypeEnum;
    updatedById?: string;
    updatedDate?: Date;
    useDefaultRetryRule?: boolean;
}
