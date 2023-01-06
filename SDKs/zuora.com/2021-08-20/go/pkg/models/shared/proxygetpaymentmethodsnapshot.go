package shared

import (
	"time"
)

type ProxyGetPaymentMethodSnapshotAchAccountTypeEnum string

const (
	ProxyGetPaymentMethodSnapshotAchAccountTypeEnumBusinessChecking ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = "BusinessChecking"
	ProxyGetPaymentMethodSnapshotAchAccountTypeEnumChecking         ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = "Checking"
	ProxyGetPaymentMethodSnapshotAchAccountTypeEnumSaving           ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = "Saving"
)

type ProxyGetPaymentMethodSnapshotBankTransferTypeEnum string

const (
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumAutomatischIncasso   ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "AutomatischIncasso"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumLastschriftDe        ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "LastschriftDE"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumLastschriftAt        ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "LastschriftAT"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumDemandeDePrelevement ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "DemandeDePrelevement"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumDirectDebitUk        ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "DirectDebitUK"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumDomicil              ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "Domicil"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumLastschriftCh        ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "LastschriftCH"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumRid                  ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "RID"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumOrdenDeDomiciliacion ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "OrdenDeDomiciliacion"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumAutogiro             ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "Autogiro"
	ProxyGetPaymentMethodSnapshotBankTransferTypeEnumBetalingsservice     ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = "Betalingsservice"
)

type ProxyGetPaymentMethodSnapshotCreditCardTypeEnum string

const (
	ProxyGetPaymentMethodSnapshotCreditCardTypeEnumAmericanExpress ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = "AmericanExpress"
	ProxyGetPaymentMethodSnapshotCreditCardTypeEnumDiscover        ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = "Discover"
	ProxyGetPaymentMethodSnapshotCreditCardTypeEnumMasterCard      ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = "MasterCard"
	ProxyGetPaymentMethodSnapshotCreditCardTypeEnumVisa            ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = "Visa"
)

type ProxyGetPaymentMethodSnapshotExistingMandateEnum string

const (
	ProxyGetPaymentMethodSnapshotExistingMandateEnumYes ProxyGetPaymentMethodSnapshotExistingMandateEnum = "Yes"
	ProxyGetPaymentMethodSnapshotExistingMandateEnumNo  ProxyGetPaymentMethodSnapshotExistingMandateEnum = "No"
)

type ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum string

const (
	ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnumActive ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum = "Active"
	ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnumClosed ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum = "Closed"
)

type ProxyGetPaymentMethodSnapshotPaypalTypeEnum string

const (
	ProxyGetPaymentMethodSnapshotPaypalTypeEnumExpressCheckout  ProxyGetPaymentMethodSnapshotPaypalTypeEnum = "ExpressCheckout"
	ProxyGetPaymentMethodSnapshotPaypalTypeEnumAdaptivePayments ProxyGetPaymentMethodSnapshotPaypalTypeEnum = "AdaptivePayments"
)

type ProxyGetPaymentMethodSnapshotTypeEnum string

const (
	ProxyGetPaymentMethodSnapshotTypeEnumAch                            ProxyGetPaymentMethodSnapshotTypeEnum = "ACH"
	ProxyGetPaymentMethodSnapshotTypeEnumApplePay                       ProxyGetPaymentMethodSnapshotTypeEnum = "ApplePay"
	ProxyGetPaymentMethodSnapshotTypeEnumBankTransfer                   ProxyGetPaymentMethodSnapshotTypeEnum = "BankTransfer"
	ProxyGetPaymentMethodSnapshotTypeEnumCash                           ProxyGetPaymentMethodSnapshotTypeEnum = "Cash"
	ProxyGetPaymentMethodSnapshotTypeEnumCheck                          ProxyGetPaymentMethodSnapshotTypeEnum = "Check"
	ProxyGetPaymentMethodSnapshotTypeEnumCreditCard                     ProxyGetPaymentMethodSnapshotTypeEnum = "CreditCard"
	ProxyGetPaymentMethodSnapshotTypeEnumCreditCardReferenceTransaction ProxyGetPaymentMethodSnapshotTypeEnum = "CreditCardReferenceTransaction"
	ProxyGetPaymentMethodSnapshotTypeEnumDebitCard                      ProxyGetPaymentMethodSnapshotTypeEnum = "DebitCard"
	ProxyGetPaymentMethodSnapshotTypeEnumOther                          ProxyGetPaymentMethodSnapshotTypeEnum = "Other"
	ProxyGetPaymentMethodSnapshotTypeEnumPayPal                         ProxyGetPaymentMethodSnapshotTypeEnum = "PayPal"
	ProxyGetPaymentMethodSnapshotTypeEnumWireTransfer                   ProxyGetPaymentMethodSnapshotTypeEnum = "WireTransfer"
)

type ProxyGetPaymentMethodSnapshot struct {
	AccountID                      *string                                               `json:"AccountId,omitempty"`
	AchAbaCode                     *string                                               `json:"AchAbaCode,omitempty"`
	AchAccountName                 *string                                               `json:"AchAccountName,omitempty"`
	AchAccountNumberMask           *string                                               `json:"AchAccountNumberMask,omitempty"`
	AchAccountType                 *ProxyGetPaymentMethodSnapshotAchAccountTypeEnum      `json:"AchAccountType,omitempty"`
	AchBankName                    *string                                               `json:"AchBankName,omitempty"`
	BankBranchCode                 *string                                               `json:"BankBranchCode,omitempty"`
	BankCheckDigit                 *string                                               `json:"BankCheckDigit,omitempty"`
	BankCity                       *string                                               `json:"BankCity,omitempty"`
	BankCode                       *string                                               `json:"BankCode,omitempty"`
	BankIdentificationNumber       *string                                               `json:"BankIdentificationNumber,omitempty"`
	BankName                       *string                                               `json:"BankName,omitempty"`
	BankPostalCode                 *string                                               `json:"BankPostalCode,omitempty"`
	BankStreetName                 *string                                               `json:"BankStreetName,omitempty"`
	BankStreetNumber               *string                                               `json:"BankStreetNumber,omitempty"`
	BankTransferAccountName        *string                                               `json:"BankTransferAccountName,omitempty"`
	BankTransferAccountNumberMask  *string                                               `json:"BankTransferAccountNumberMask,omitempty"`
	BankTransferAccountType        *string                                               `json:"BankTransferAccountType,omitempty"`
	BankTransferType               *ProxyGetPaymentMethodSnapshotBankTransferTypeEnum    `json:"BankTransferType,omitempty"`
	BusinessIdentificationCode     *string                                               `json:"BusinessIdentificationCode,omitempty"`
	City                           *string                                               `json:"City,omitempty"`
	CompanyName                    *string                                               `json:"CompanyName,omitempty"`
	Country                        *string                                               `json:"Country,omitempty"`
	CreditCardAddress1             *string                                               `json:"CreditCardAddress1,omitempty"`
	CreditCardAddress2             *string                                               `json:"CreditCardAddress2,omitempty"`
	CreditCardCity                 *string                                               `json:"CreditCardCity,omitempty"`
	CreditCardCountry              *string                                               `json:"CreditCardCountry,omitempty"`
	CreditCardExpirationMonth      *int32                                                `json:"CreditCardExpirationMonth,omitempty"`
	CreditCardExpirationYear       *int32                                                `json:"CreditCardExpirationYear,omitempty"`
	CreditCardHolderName           *string                                               `json:"CreditCardHolderName,omitempty"`
	CreditCardMaskNumber           *string                                               `json:"CreditCardMaskNumber,omitempty"`
	CreditCardPostalCode           *string                                               `json:"CreditCardPostalCode,omitempty"`
	CreditCardState                *string                                               `json:"CreditCardState,omitempty"`
	CreditCardType                 *ProxyGetPaymentMethodSnapshotCreditCardTypeEnum      `json:"CreditCardType,omitempty"`
	DeviceSessionID                *string                                               `json:"DeviceSessionId,omitempty"`
	Email                          *string                                               `json:"Email,omitempty"`
	ExistingMandate                *ProxyGetPaymentMethodSnapshotExistingMandateEnum     `json:"ExistingMandate,omitempty"`
	FirstName                      *string                                               `json:"FirstName,omitempty"`
	IBAN                           *string                                               `json:"IBAN,omitempty"`
	IPAddress                      *string                                               `json:"IPAddress,omitempty"`
	ID                             *string                                               `json:"Id,omitempty"`
	IdentityNumber                 *string                                               `json:"IdentityNumber,omitempty"`
	IsCompany                      *bool                                                 `json:"IsCompany,omitempty"`
	LastFailedSaleTransactionDate  *time.Time                                            `json:"LastFailedSaleTransactionDate,omitempty"`
	LastName                       *string                                               `json:"LastName,omitempty"`
	LastTransactionDateTime        *time.Time                                            `json:"LastTransactionDateTime,omitempty"`
	LastTransactionStatus          *string                                               `json:"LastTransactionStatus,omitempty"`
	MandateCreationDate            *time.Time                                            `json:"MandateCreationDate,omitempty"`
	MandateID                      *string                                               `json:"MandateID,omitempty"`
	MandateReceived                *string                                               `json:"MandateReceived,omitempty"`
	MandateUpdateDate              *time.Time                                            `json:"MandateUpdateDate,omitempty"`
	MaxConsecutivePaymentFailures  *int64                                                `json:"MaxConsecutivePaymentFailures,omitempty"`
	Name                           *string                                               `json:"Name,omitempty"`
	NumConsecutiveFailures         *int32                                                `json:"NumConsecutiveFailures,omitempty"`
	PaymentMethodID                *string                                               `json:"PaymentMethodId,omitempty"`
	PaymentMethodStatus            *ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum `json:"PaymentMethodStatus,omitempty"`
	PaymentRetryWindow             *int64                                                `json:"PaymentRetryWindow,omitempty"`
	PaypalBaid                     *string                                               `json:"PaypalBaid,omitempty"`
	PaypalEmail                    *string                                               `json:"PaypalEmail,omitempty"`
	PaypalPreapprovalKey           *string                                               `json:"PaypalPreapprovalKey,omitempty"`
	PaypalType                     *ProxyGetPaymentMethodSnapshotPaypalTypeEnum          `json:"PaypalType,omitempty"`
	Phone                          *string                                               `json:"Phone,omitempty"`
	PostalCode                     *string                                               `json:"PostalCode,omitempty"`
	SecondTokenID                  *string                                               `json:"SecondTokenId,omitempty"`
	State                          *string                                               `json:"State,omitempty"`
	StreetName                     *string                                               `json:"StreetName,omitempty"`
	StreetNumber                   *string                                               `json:"StreetNumber,omitempty"`
	TokenID                        *string                                               `json:"TokenId,omitempty"`
	TotalNumberOfErrorPayments     *int32                                                `json:"TotalNumberOfErrorPayments,omitempty"`
	TotalNumberOfProcessedPayments *int32                                                `json:"TotalNumberOfProcessedPayments,omitempty"`
	Type                           *ProxyGetPaymentMethodSnapshotTypeEnum                `json:"Type,omitempty"`
	UseDefaultRetryRule            *bool                                                 `json:"UseDefaultRetryRule,omitempty"`
}
