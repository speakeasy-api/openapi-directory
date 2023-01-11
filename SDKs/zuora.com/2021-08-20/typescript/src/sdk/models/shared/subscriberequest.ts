import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayOption } from "./gatewayoption";
import { RatePlanData } from "./rateplandata";



// SubscribeRequestPaymentMethodGatewayOptionData
/** 
 *  Use this field to pass gateway options.
 * 
 * 
 * **Character limit**: 255
 * 
 * 
 * **Values**: GatewayOption 
**/
export class SubscribeRequestPaymentMethodGatewayOptionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GatewayOption", elemType: GatewayOption })
  gatewayOption: GatewayOption[];
}

export enum SubscribeRequestPaymentMethodTypeEnum {
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


// SubscribeRequestPaymentMethod
/** 
 *  This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
 * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
 * Values: A valid electronic PaymentMethod.
**/
export class SubscribeRequestPaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAbaCode" })
  achAbaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountName" })
  achAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountNumber" })
  achAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountNumberMask" })
  achAccountNumberMask?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAccountType" })
  achAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAddress1" })
  achAddress1?: string;

  @SpeakeasyMetadata({ data: "json, name=AchAddress2" })
  achAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=AchBankName" })
  achBankName?: string;

  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountNumber" })
  bankTransferAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountNumberMask" })
  bankTransferAccountNumberMask?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferAccountType" })
  bankTransferAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=BankTransferType" })
  bankTransferType?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessIdentificationCode" })
  businessIdentificationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=CreditCardNumber" })
  creditCardNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardPostalCode" })
  creditCardPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardSecurityCode" })
  creditCardSecurityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardState" })
  creditCardState?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditCardType" })
  creditCardType?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceSessionId" })
  deviceSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExistingMandate" })
  existingMandate?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayOptionData" })
  gatewayOptionData?: SubscribeRequestPaymentMethodGatewayOptionData;

  @SpeakeasyMetadata({ data: "json, name=IBAN" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=IPAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

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

  @SpeakeasyMetadata({ data: "json, name=PaymentMethodStatus" })
  paymentMethodStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentRetryWindow" })
  paymentRetryWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=PaypalBaid" })
  paypalBaid?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalEmail" })
  paypalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalPreapprovalKey" })
  paypalPreapprovalKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PaypalType" })
  paypalType?: string;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondTokenId" })
  secondTokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=SkipValidation" })
  skipValidation?: boolean;

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
  type: SubscribeRequestPaymentMethodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UseDefaultRetryRule" })
  useDefaultRetryRule?: boolean;
}

export enum SubscribeRequestPreviewOptionsPreviewTypeEnum {
    InvoiceItem = "InvoiceItem",
    ChargeMetrics = "ChargeMetrics",
    InvoiceItemChargeMetrics = "InvoiceItemChargeMetrics"
}


// SubscribeRequestPreviewOptions
/** 
 * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
 * 
**/
export class SubscribeRequestPreviewOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnablePreviewMode" })
  enablePreviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=PreviewThroughTermEnd" })
  previewThroughTermEnd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreviewType" })
  previewType?: SubscribeRequestPreviewOptionsPreviewTypeEnum;
}


export class SubscribeRequestSubscribeOptionsElectronicPaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaymentMethodId" })
  paymentMethodId?: string;
}


export class SubscribeRequestSubscribeOptionsExternalPaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=GatewayOrderId" })
  gatewayOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: string;
}


export class SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceProcessingScope" })
  invoiceProcessingScope?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceTargetDate" })
  invoiceTargetDate?: Date;
}


// SubscribeRequestSubscribeOptions
/** 
 *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
 * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
 * 
 * 
 * **Values:** A valid SubscribeOptions object. 
**/
export class SubscribeRequestSubscribeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=ApplyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ApplyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ElectronicPaymentOptions" })
  electronicPaymentOptions?: SubscribeRequestSubscribeOptionsElectronicPaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=ExternalPaymentOptions" })
  externalPaymentOptions?: SubscribeRequestSubscribeOptionsExternalPaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=GenerateInvoice" })
  generateInvoice: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProcessPayments" })
  processPayments: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubscribeInvoiceProcessingOptions" })
  subscribeInvoiceProcessingOptions?: SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions;
}


// SubscribeRequestSubscriptionData
/** 
 *  This object contains the information on the contract's dates and terms.
 * 
 * 
 * **Values:** A valid SubscriptionData object. 
**/
export class SubscribeRequestSubscriptionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RatePlanData", elemType: RatePlanData })
  ratePlanData: RatePlanData[];

  @SpeakeasyMetadata({ data: "json, name=Subscription" })
  subscription: Record<string, any>;
}


export class SubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BillToContact" })
  billToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: SubscribeRequestPaymentMethod;

  @SpeakeasyMetadata({ data: "json, name=PreviewOptions" })
  previewOptions?: SubscribeRequestPreviewOptions;

  @SpeakeasyMetadata({ data: "json, name=SoldToContact" })
  soldToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SubscribeOptions" })
  subscribeOptions?: SubscribeRequestSubscribeOptions;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionData" })
  subscriptionData: SubscribeRequestSubscriptionData;
}
