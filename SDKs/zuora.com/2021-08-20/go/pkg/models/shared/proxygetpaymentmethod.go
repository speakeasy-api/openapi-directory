package shared

import (
	"time"
)

type ProxyGetPaymentMethodTypeEnum string

const (
	ProxyGetPaymentMethodTypeEnumAch                            ProxyGetPaymentMethodTypeEnum = "ACH"
	ProxyGetPaymentMethodTypeEnumApplePay                       ProxyGetPaymentMethodTypeEnum = "ApplePay"
	ProxyGetPaymentMethodTypeEnumBankTransfer                   ProxyGetPaymentMethodTypeEnum = "BankTransfer"
	ProxyGetPaymentMethodTypeEnumCash                           ProxyGetPaymentMethodTypeEnum = "Cash"
	ProxyGetPaymentMethodTypeEnumCheck                          ProxyGetPaymentMethodTypeEnum = "Check"
	ProxyGetPaymentMethodTypeEnumCreditCard                     ProxyGetPaymentMethodTypeEnum = "CreditCard"
	ProxyGetPaymentMethodTypeEnumCreditCardReferenceTransaction ProxyGetPaymentMethodTypeEnum = "CreditCardReferenceTransaction"
	ProxyGetPaymentMethodTypeEnumDebitCard                      ProxyGetPaymentMethodTypeEnum = "DebitCard"
	ProxyGetPaymentMethodTypeEnumOther                          ProxyGetPaymentMethodTypeEnum = "Other"
	ProxyGetPaymentMethodTypeEnumPayPal                         ProxyGetPaymentMethodTypeEnum = "PayPal"
	ProxyGetPaymentMethodTypeEnumWireTransfer                   ProxyGetPaymentMethodTypeEnum = "WireTransfer"
)

type ProxyGetPaymentMethod struct {
	AccountID                      *string                        `json:"AccountId,omitempty"`
	AchAbaCode                     *string                        `json:"AchAbaCode,omitempty"`
	AchAccountName                 *string                        `json:"AchAccountName,omitempty"`
	AchAccountNumberMask           *string                        `json:"AchAccountNumberMask,omitempty"`
	AchAccountType                 *string                        `json:"AchAccountType,omitempty"`
	AchAddress1                    *string                        `json:"AchAddress1,omitempty"`
	AchAddress2                    *string                        `json:"AchAddress2,omitempty"`
	AchBankName                    *string                        `json:"AchBankName,omitempty"`
	Active                         *bool                          `json:"Active,omitempty"`
	BankBranchCode                 *string                        `json:"BankBranchCode,omitempty"`
	BankCheckDigit                 *string                        `json:"BankCheckDigit,omitempty"`
	BankCity                       *string                        `json:"BankCity,omitempty"`
	BankCode                       *string                        `json:"BankCode,omitempty"`
	BankIdentificationNumber       *string                        `json:"BankIdentificationNumber,omitempty"`
	BankName                       *string                        `json:"BankName,omitempty"`
	BankPostalCode                 *string                        `json:"BankPostalCode,omitempty"`
	BankStreetName                 *string                        `json:"BankStreetName,omitempty"`
	BankStreetNumber               *string                        `json:"BankStreetNumber,omitempty"`
	BankTransferAccountName        *string                        `json:"BankTransferAccountName,omitempty"`
	BankTransferAccountNumber      *string                        `json:"BankTransferAccountNumber,omitempty"`
	BankTransferAccountNumberMask  *string                        `json:"BankTransferAccountNumberMask,omitempty"`
	BankTransferAccountType        *string                        `json:"BankTransferAccountType,omitempty"`
	BankTransferType               *string                        `json:"BankTransferType,omitempty"`
	BusinessIdentificationCode     *string                        `json:"BusinessIdentificationCode,omitempty"`
	City                           *string                        `json:"City,omitempty"`
	CompanyName                    *string                        `json:"CompanyName,omitempty"`
	Country                        *string                        `json:"Country,omitempty"`
	CreatedByID                    *string                        `json:"CreatedById,omitempty"`
	CreatedDate                    *time.Time                     `json:"CreatedDate,omitempty"`
	CreditCardAddress1             *string                        `json:"CreditCardAddress1,omitempty"`
	CreditCardAddress2             *string                        `json:"CreditCardAddress2,omitempty"`
	CreditCardCity                 *string                        `json:"CreditCardCity,omitempty"`
	CreditCardCountry              *string                        `json:"CreditCardCountry,omitempty"`
	CreditCardExpirationMonth      *int32                         `json:"CreditCardExpirationMonth,omitempty"`
	CreditCardExpirationYear       *int32                         `json:"CreditCardExpirationYear,omitempty"`
	CreditCardHolderName           *string                        `json:"CreditCardHolderName,omitempty"`
	CreditCardMaskNumber           *string                        `json:"CreditCardMaskNumber,omitempty"`
	CreditCardPostalCode           *string                        `json:"CreditCardPostalCode,omitempty"`
	CreditCardState                *string                        `json:"CreditCardState,omitempty"`
	CreditCardType                 *string                        `json:"CreditCardType,omitempty"`
	DeviceSessionID                *string                        `json:"DeviceSessionId,omitempty"`
	Email                          *string                        `json:"Email,omitempty"`
	ExistingMandate                *string                        `json:"ExistingMandate,omitempty"`
	FirstName                      *string                        `json:"FirstName,omitempty"`
	IBAN                           *string                        `json:"IBAN,omitempty"`
	IPAddress                      *string                        `json:"IPAddress,omitempty"`
	ID                             *string                        `json:"Id,omitempty"`
	IdentityNumber                 *string                        `json:"IdentityNumber,omitempty"`
	IsCompany                      *bool                          `json:"IsCompany,omitempty"`
	LastFailedSaleTransactionDate  *time.Time                     `json:"LastFailedSaleTransactionDate,omitempty"`
	LastName                       *string                        `json:"LastName,omitempty"`
	LastTransactionDateTime        *time.Time                     `json:"LastTransactionDateTime,omitempty"`
	LastTransactionStatus          *string                        `json:"LastTransactionStatus,omitempty"`
	MandateCreationDate            *time.Time                     `json:"MandateCreationDate,omitempty"`
	MandateID                      *string                        `json:"MandateID,omitempty"`
	MandateReceived                *string                        `json:"MandateReceived,omitempty"`
	MandateUpdateDate              *time.Time                     `json:"MandateUpdateDate,omitempty"`
	MaxConsecutivePaymentFailures  *int64                         `json:"MaxConsecutivePaymentFailures,omitempty"`
	Name                           *string                        `json:"Name,omitempty"`
	NumConsecutiveFailures         *int32                         `json:"NumConsecutiveFailures,omitempty"`
	PaymentMethodStatus            *string                        `json:"PaymentMethodStatus,omitempty"`
	PaymentRetryWindow             *int64                         `json:"PaymentRetryWindow,omitempty"`
	PaypalBaid                     *string                        `json:"PaypalBaid,omitempty"`
	PaypalEmail                    *string                        `json:"PaypalEmail,omitempty"`
	PaypalPreapprovalKey           *string                        `json:"PaypalPreapprovalKey,omitempty"`
	PaypalType                     *string                        `json:"PaypalType,omitempty"`
	Phone                          *string                        `json:"Phone,omitempty"`
	PostalCode                     *string                        `json:"PostalCode,omitempty"`
	SecondTokenID                  *string                        `json:"SecondTokenId,omitempty"`
	State                          *string                        `json:"State,omitempty"`
	StreetName                     *string                        `json:"StreetName,omitempty"`
	StreetNumber                   *string                        `json:"StreetNumber,omitempty"`
	TokenID                        *string                        `json:"TokenId,omitempty"`
	TotalNumberOfErrorPayments     *int32                         `json:"TotalNumberOfErrorPayments,omitempty"`
	TotalNumberOfProcessedPayments *int32                         `json:"TotalNumberOfProcessedPayments,omitempty"`
	Type                           *ProxyGetPaymentMethodTypeEnum `json:"Type,omitempty"`
	UpdatedByID                    *string                        `json:"UpdatedById,omitempty"`
	UpdatedDate                    *time.Time                     `json:"UpdatedDate,omitempty"`
	UseDefaultRetryRule            *bool                          `json:"UseDefaultRetryRule,omitempty"`
}
