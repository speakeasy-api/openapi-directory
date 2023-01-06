package shared

// PostPaymentMethodDecryptionCardHolderInfo
// Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
type PostPaymentMethodDecryptionCardHolderInfo struct {
	AddressLine1   *string `json:"addressLine1,omitempty"`
	AddressLine2   *string `json:"addressLine2,omitempty"`
	CardHolderName *string `json:"cardHolderName,omitempty"`
	City           *string `json:"city,omitempty"`
	Country        *string `json:"country,omitempty"`
	Email          *string `json:"email,omitempty"`
	Phone          *string `json:"phone,omitempty"`
	State          *string `json:"state,omitempty"`
	ZipCode        *string `json:"zipCode,omitempty"`
}

type PostPaymentMethodDecryptionMitConsentAgreementSrcEnum string

const (
	POSTPaymentMethodDecryptionMitConsentAgreementSrcEnumExternal PostPaymentMethodDecryptionMitConsentAgreementSrcEnum = "External"
)

type PostPaymentMethodDecryptionMitProfileActionEnum string

const (
	POSTPaymentMethodDecryptionMitProfileActionEnumActivate PostPaymentMethodDecryptionMitProfileActionEnum = "Activate"
	POSTPaymentMethodDecryptionMitProfileActionEnumPersist  PostPaymentMethodDecryptionMitProfileActionEnum = "Persist"
)

type PostPaymentMethodDecryptionMitProfileTypeEnum string

const (
	POSTPaymentMethodDecryptionMitProfileTypeEnumRecurring PostPaymentMethodDecryptionMitProfileTypeEnum = "Recurring"
)

type PostPaymentMethodDecryption struct {
	AccountID              *string                                                `json:"accountID,omitempty"`
	CardHolderInfo         *PostPaymentMethodDecryptionCardHolderInfo             `json:"cardHolderInfo,omitempty"`
	IntegrationType        string                                                 `json:"integrationType"`
	InvoiceID              *string                                                `json:"invoiceId,omitempty"`
	MerchantID             string                                                 `json:"merchantID"`
	MitConsentAgreementSrc *PostPaymentMethodDecryptionMitConsentAgreementSrcEnum `json:"mitConsentAgreementSrc,omitempty"`
	MitProfileAction       *PostPaymentMethodDecryptionMitProfileActionEnum       `json:"mitProfileAction,omitempty"`
	MitProfileType         *PostPaymentMethodDecryptionMitProfileTypeEnum         `json:"mitProfileType,omitempty"`
	PaymentGateway         *string                                                `json:"paymentGateway,omitempty"`
	PaymentToken           map[string]interface{}                                 `json:"paymentToken"`
	ProcessPayment         *bool                                                  `json:"processPayment,omitempty"`
}
