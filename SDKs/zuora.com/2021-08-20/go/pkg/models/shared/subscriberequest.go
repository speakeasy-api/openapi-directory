package shared

import (
	"time"
)

// SubscribeRequestPaymentMethodGatewayOptionData
//
//	Use this field to pass gateway options.
//
// **Character limit**: 255
//
// **Values**: GatewayOption
type SubscribeRequestPaymentMethodGatewayOptionData struct {
	GatewayOption []GatewayOption `json:"GatewayOption"`
}

type SubscribeRequestPaymentMethodTypeEnum string

const (
	SubscribeRequestPaymentMethodTypeEnumAch                            SubscribeRequestPaymentMethodTypeEnum = "ACH"
	SubscribeRequestPaymentMethodTypeEnumApplePay                       SubscribeRequestPaymentMethodTypeEnum = "ApplePay"
	SubscribeRequestPaymentMethodTypeEnumBankTransfer                   SubscribeRequestPaymentMethodTypeEnum = "BankTransfer"
	SubscribeRequestPaymentMethodTypeEnumCash                           SubscribeRequestPaymentMethodTypeEnum = "Cash"
	SubscribeRequestPaymentMethodTypeEnumCheck                          SubscribeRequestPaymentMethodTypeEnum = "Check"
	SubscribeRequestPaymentMethodTypeEnumCreditCard                     SubscribeRequestPaymentMethodTypeEnum = "CreditCard"
	SubscribeRequestPaymentMethodTypeEnumCreditCardReferenceTransaction SubscribeRequestPaymentMethodTypeEnum = "CreditCardReferenceTransaction"
	SubscribeRequestPaymentMethodTypeEnumDebitCard                      SubscribeRequestPaymentMethodTypeEnum = "DebitCard"
	SubscribeRequestPaymentMethodTypeEnumOther                          SubscribeRequestPaymentMethodTypeEnum = "Other"
	SubscribeRequestPaymentMethodTypeEnumPayPal                         SubscribeRequestPaymentMethodTypeEnum = "PayPal"
	SubscribeRequestPaymentMethodTypeEnumWireTransfer                   SubscribeRequestPaymentMethodTypeEnum = "WireTransfer"
)

// SubscribeRequestPaymentMethod
//
//	This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
//
// Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
// Values: A valid electronic PaymentMethod.
type SubscribeRequestPaymentMethod struct {
	AccountID                      *string                                         `json:"AccountId,omitempty"`
	AchAbaCode                     *string                                         `json:"AchAbaCode,omitempty"`
	AchAccountName                 *string                                         `json:"AchAccountName,omitempty"`
	AchAccountNumber               *string                                         `json:"AchAccountNumber,omitempty"`
	AchAccountNumberMask           *string                                         `json:"AchAccountNumberMask,omitempty"`
	AchAccountType                 *string                                         `json:"AchAccountType,omitempty"`
	AchAddress1                    *string                                         `json:"AchAddress1,omitempty"`
	AchAddress2                    *string                                         `json:"AchAddress2,omitempty"`
	AchBankName                    *string                                         `json:"AchBankName,omitempty"`
	Active                         *bool                                           `json:"Active,omitempty"`
	BankBranchCode                 *string                                         `json:"BankBranchCode,omitempty"`
	BankCheckDigit                 *string                                         `json:"BankCheckDigit,omitempty"`
	BankCity                       *string                                         `json:"BankCity,omitempty"`
	BankCode                       *string                                         `json:"BankCode,omitempty"`
	BankIdentificationNumber       *string                                         `json:"BankIdentificationNumber,omitempty"`
	BankName                       *string                                         `json:"BankName,omitempty"`
	BankPostalCode                 *string                                         `json:"BankPostalCode,omitempty"`
	BankStreetName                 *string                                         `json:"BankStreetName,omitempty"`
	BankStreetNumber               *string                                         `json:"BankStreetNumber,omitempty"`
	BankTransferAccountName        *string                                         `json:"BankTransferAccountName,omitempty"`
	BankTransferAccountNumber      *string                                         `json:"BankTransferAccountNumber,omitempty"`
	BankTransferAccountNumberMask  *string                                         `json:"BankTransferAccountNumberMask,omitempty"`
	BankTransferAccountType        *string                                         `json:"BankTransferAccountType,omitempty"`
	BankTransferType               *string                                         `json:"BankTransferType,omitempty"`
	BusinessIdentificationCode     *string                                         `json:"BusinessIdentificationCode,omitempty"`
	City                           *string                                         `json:"City,omitempty"`
	Country                        *string                                         `json:"Country,omitempty"`
	CreatedByID                    *string                                         `json:"CreatedById,omitempty"`
	CreatedDate                    *time.Time                                      `json:"CreatedDate,omitempty"`
	CreditCardAddress1             *string                                         `json:"CreditCardAddress1,omitempty"`
	CreditCardAddress2             *string                                         `json:"CreditCardAddress2,omitempty"`
	CreditCardCity                 *string                                         `json:"CreditCardCity,omitempty"`
	CreditCardCountry              *string                                         `json:"CreditCardCountry,omitempty"`
	CreditCardExpirationMonth      *int32                                          `json:"CreditCardExpirationMonth,omitempty"`
	CreditCardExpirationYear       *int32                                          `json:"CreditCardExpirationYear,omitempty"`
	CreditCardHolderName           *string                                         `json:"CreditCardHolderName,omitempty"`
	CreditCardMaskNumber           *string                                         `json:"CreditCardMaskNumber,omitempty"`
	CreditCardNumber               *string                                         `json:"CreditCardNumber,omitempty"`
	CreditCardPostalCode           *string                                         `json:"CreditCardPostalCode,omitempty"`
	CreditCardSecurityCode         *string                                         `json:"CreditCardSecurityCode,omitempty"`
	CreditCardState                *string                                         `json:"CreditCardState,omitempty"`
	CreditCardType                 *string                                         `json:"CreditCardType,omitempty"`
	DeviceSessionID                *string                                         `json:"DeviceSessionId,omitempty"`
	Email                          *string                                         `json:"Email,omitempty"`
	ExistingMandate                *string                                         `json:"ExistingMandate,omitempty"`
	FirstName                      *string                                         `json:"FirstName,omitempty"`
	GatewayOptionData              *SubscribeRequestPaymentMethodGatewayOptionData `json:"GatewayOptionData,omitempty"`
	IBAN                           *string                                         `json:"IBAN,omitempty"`
	IPAddress                      *string                                         `json:"IPAddress,omitempty"`
	ID                             *string                                         `json:"Id,omitempty"`
	LastFailedSaleTransactionDate  *time.Time                                      `json:"LastFailedSaleTransactionDate,omitempty"`
	LastName                       *string                                         `json:"LastName,omitempty"`
	LastTransactionDateTime        *time.Time                                      `json:"LastTransactionDateTime,omitempty"`
	LastTransactionStatus          *string                                         `json:"LastTransactionStatus,omitempty"`
	MandateCreationDate            *time.Time                                      `json:"MandateCreationDate,omitempty"`
	MandateID                      *string                                         `json:"MandateID,omitempty"`
	MandateReceived                *string                                         `json:"MandateReceived,omitempty"`
	MandateUpdateDate              *time.Time                                      `json:"MandateUpdateDate,omitempty"`
	MaxConsecutivePaymentFailures  *int64                                          `json:"MaxConsecutivePaymentFailures,omitempty"`
	Name                           *string                                         `json:"Name,omitempty"`
	NumConsecutiveFailures         *int32                                          `json:"NumConsecutiveFailures,omitempty"`
	PaymentMethodStatus            *string                                         `json:"PaymentMethodStatus,omitempty"`
	PaymentRetryWindow             *int64                                          `json:"PaymentRetryWindow,omitempty"`
	PaypalBaid                     *string                                         `json:"PaypalBaid,omitempty"`
	PaypalEmail                    *string                                         `json:"PaypalEmail,omitempty"`
	PaypalPreapprovalKey           *string                                         `json:"PaypalPreapprovalKey,omitempty"`
	PaypalType                     *string                                         `json:"PaypalType,omitempty"`
	Phone                          *string                                         `json:"Phone,omitempty"`
	PostalCode                     *string                                         `json:"PostalCode,omitempty"`
	SecondTokenID                  *string                                         `json:"SecondTokenId,omitempty"`
	SkipValidation                 *bool                                           `json:"SkipValidation,omitempty"`
	State                          *string                                         `json:"State,omitempty"`
	StreetName                     *string                                         `json:"StreetName,omitempty"`
	StreetNumber                   *string                                         `json:"StreetNumber,omitempty"`
	TokenID                        *string                                         `json:"TokenId,omitempty"`
	TotalNumberOfErrorPayments     *int32                                          `json:"TotalNumberOfErrorPayments,omitempty"`
	TotalNumberOfProcessedPayments *int32                                          `json:"TotalNumberOfProcessedPayments,omitempty"`
	Type                           SubscribeRequestPaymentMethodTypeEnum           `json:"Type"`
	UpdatedByID                    *string                                         `json:"UpdatedById,omitempty"`
	UpdatedDate                    *time.Time                                      `json:"UpdatedDate,omitempty"`
	UseDefaultRetryRule            *bool                                           `json:"UseDefaultRetryRule,omitempty"`
}

type SubscribeRequestPreviewOptionsPreviewTypeEnum string

const (
	SubscribeRequestPreviewOptionsPreviewTypeEnumInvoiceItem              SubscribeRequestPreviewOptionsPreviewTypeEnum = "InvoiceItem"
	SubscribeRequestPreviewOptionsPreviewTypeEnumChargeMetrics            SubscribeRequestPreviewOptionsPreviewTypeEnum = "ChargeMetrics"
	SubscribeRequestPreviewOptionsPreviewTypeEnumInvoiceItemChargeMetrics SubscribeRequestPreviewOptionsPreviewTypeEnum = "InvoiceItemChargeMetrics"
)

// SubscribeRequestPreviewOptions
// Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
type SubscribeRequestPreviewOptions struct {
	EnablePreviewMode     *bool                                          `json:"EnablePreviewMode,omitempty"`
	NumberOfPeriods       *int64                                         `json:"NumberOfPeriods,omitempty"`
	PreviewThroughTermEnd *bool                                          `json:"PreviewThroughTermEnd,omitempty"`
	PreviewType           *SubscribeRequestPreviewOptionsPreviewTypeEnum `json:"PreviewType,omitempty"`
}

type SubscribeRequestSubscribeOptionsElectronicPaymentOptions struct {
	PaymentMethodID *string `json:"PaymentMethodId,omitempty"`
}

type SubscribeRequestSubscribeOptionsExternalPaymentOptions struct {
	Amount          *float64   `json:"Amount,omitempty"`
	EffectiveDate   *time.Time `json:"EffectiveDate,omitempty"`
	GatewayOrderID  *string    `json:"GatewayOrderId,omitempty"`
	PaymentMethodID *string    `json:"PaymentMethodId,omitempty"`
	ReferenceID     *string    `json:"ReferenceId,omitempty"`
}

type SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions struct {
	InvoiceDate            *time.Time `json:"InvoiceDate,omitempty"`
	InvoiceProcessingScope *string    `json:"InvoiceProcessingScope,omitempty"`
	InvoiceTargetDate      *time.Time `json:"InvoiceTargetDate,omitempty"`
}

// SubscribeRequestSubscribeOptions
//
//	This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
//
// The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
//
// **Values:** A valid SubscribeOptions object.
type SubscribeRequestSubscribeOptions struct {
	ApplicationOrder                  []string                                                           `json:"ApplicationOrder,omitempty"`
	ApplyCredit                       *bool                                                              `json:"ApplyCredit,omitempty"`
	ApplyCreditBalance                *bool                                                              `json:"ApplyCreditBalance,omitempty"`
	ElectronicPaymentOptions          *SubscribeRequestSubscribeOptionsElectronicPaymentOptions          `json:"ElectronicPaymentOptions,omitempty"`
	ExternalPaymentOptions            *SubscribeRequestSubscribeOptionsExternalPaymentOptions            `json:"ExternalPaymentOptions,omitempty"`
	GenerateInvoice                   bool                                                               `json:"GenerateInvoice"`
	ProcessPayments                   bool                                                               `json:"ProcessPayments"`
	SubscribeInvoiceProcessingOptions *SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions `json:"SubscribeInvoiceProcessingOptions,omitempty"`
}

// SubscribeRequestSubscriptionData
//
//	This object contains the information on the contract's dates and terms.
//
// **Values:** A valid SubscriptionData object.
type SubscribeRequestSubscriptionData struct {
	RatePlanData []RatePlanData         `json:"RatePlanData"`
	Subscription map[string]interface{} `json:"Subscription"`
}

type SubscribeRequest struct {
	Account          map[string]interface{}            `json:"Account"`
	BillToContact    map[string]interface{}            `json:"BillToContact,omitempty"`
	PaymentMethod    *SubscribeRequestPaymentMethod    `json:"PaymentMethod,omitempty"`
	PreviewOptions   *SubscribeRequestPreviewOptions   `json:"PreviewOptions,omitempty"`
	SoldToContact    map[string]interface{}            `json:"SoldToContact,omitempty"`
	SubscribeOptions *SubscribeRequestSubscribeOptions `json:"SubscribeOptions,omitempty"`
	SubscriptionData SubscribeRequestSubscriptionData  `json:"SubscriptionData"`
}
