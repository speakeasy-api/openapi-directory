import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyGetPaymentMethodSnapshotAchAccountTypeEnum {
    BusinessChecking = "BusinessChecking",
    Checking = "Checking",
    Saving = "Saving"
}

export enum ProxyGetPaymentMethodSnapshotBankTransferTypeEnum {
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

export enum ProxyGetPaymentMethodSnapshotCreditCardTypeEnum {
    AmericanExpress = "AmericanExpress",
    Discover = "Discover",
    MasterCard = "MasterCard",
    Visa = "Visa"
}

export enum ProxyGetPaymentMethodSnapshotExistingMandateEnum {
    Yes = "Yes",
    No = "No"
}

export enum ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum {
    Active = "Active",
    Closed = "Closed"
}

export enum ProxyGetPaymentMethodSnapshotPaypalTypeEnum {
    ExpressCheckout = "ExpressCheckout",
    AdaptivePayments = "AdaptivePayments"
}

export enum ProxyGetPaymentMethodSnapshotTypeEnum {
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


export class ProxyGetPaymentMethodSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAbaCode" })
  achAbaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountName" })
  achAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountNumberMask" })
  achAccountNumberMask?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountType" })
  achAccountType?: ProxyGetPaymentMethodSnapshotAchAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AchBankName" })
  achBankName?: string;

  @SpeakeasyMetadata({ data: "json, name=BankBranchCode" })
  bankBranchCode?: string;

  @SpeakeasyMetadata({ data: "json, name=BankCheckDigit" })
  bankCheckDigit?: string;

  @SpeakeasyMetadata({ data: "json, name=BankCity" })
  bankCity?: string;

  @SpeakeasyMetadata({ data: "json, name=BankCode" })
  bankCode?: string;

  @SpeakeasyMetadata({ data: "json, name=BankIdentificationNumber" })
  bankIdentificationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BankName" })
  bankName?: string;

  @SpeakeasyMetadata({ data: "json, name=BankPostalCode" })
  bankPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=BankStreetName" })
  bankStreetName?: string;

  @SpeakeasyMetadata({ data: "json, name=BankStreetNumber" })
  bankStreetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountName" })
  bankTransferAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountNumberMask" })
  bankTransferAccountNumberMask?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountType" })
  bankTransferAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferType" })
  bankTransferType?: ProxyGetPaymentMethodSnapshotBankTransferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=BusinessIdentificationCode" })
  businessIdentificationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardAddress1" })
  creditCardAddress1?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardAddress2" })
  creditCardAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardCity" })
  creditCardCity?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardCountry" })
  creditCardCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardExpirationMonth" })
  creditCardExpirationMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=CreditCardExpirationYear" })
  creditCardExpirationYear?: number;

  @SpeakeasyMetadata({ data: "json, name=CreditCardHolderName" })
  creditCardHolderName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardMaskNumber" })
  creditCardMaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardPostalCode" })
  creditCardPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardState" })
  creditCardState?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardType" })
  creditCardType?: ProxyGetPaymentMethodSnapshotCreditCardTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceSessionId" })
  deviceSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExistingMandate" })
  existingMandate?: ProxyGetPaymentMethodSnapshotExistingMandateEnum;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=IBAN" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=IPAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityNumber" })
  identityNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=IsCompany" })
  isCompany?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastFailedSaleTransactionDate" })
  lastFailedSaleTransactionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastTransactionDateTime" })
  lastTransactionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastTransactionStatus" })
  lastTransactionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=MandateCreationDate" })
  mandateCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MandateID" })
  mandateID?: string;

  @SpeakeasyMetadata({ data: "json, name=MandateReceived" })
  mandateReceived?: string;

  @SpeakeasyMetadata({ data: "json, name=MandateUpdateDate" })
  mandateUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxConsecutivePaymentFailures" })
  maxConsecutivePaymentFailures?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumConsecutiveFailures" })
  numConsecutiveFailures?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethodStatus" })
  paymentMethodStatus?: ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentRetryWindow" })
  paymentRetryWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=PaypalBaid" })
  paypalBaid?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalEmail" })
  paypalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalPreapprovalKey" })
  paypalPreapprovalKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalType" })
  paypalType?: ProxyGetPaymentMethodSnapshotPaypalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondTokenId" })
  secondTokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=StreetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=StreetNumber" })
  streetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalNumberOfErrorPayments" })
  totalNumberOfErrorPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalNumberOfProcessedPayments" })
  totalNumberOfProcessedPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ProxyGetPaymentMethodSnapshotTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UseDefaultRetryRule" })
  useDefaultRetryRule?: boolean;
}
