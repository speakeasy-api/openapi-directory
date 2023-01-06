package shared

import (
	"time"
)

// GetAccountTypeBillingAndPayment
// Container for billing and payment information for the account.
type GetAccountTypeBillingAndPayment struct {
	AdditionalEmailAddresses  []string `json:"additionalEmailAddresses,omitempty"`
	BillCycleDay              *string  `json:"billCycleDay,omitempty"`
	Currency                  *string  `json:"currency,omitempty"`
	InvoiceDeliveryPrefsEmail *bool    `json:"invoiceDeliveryPrefsEmail,omitempty"`
	InvoiceDeliveryPrefsPrint *bool    `json:"invoiceDeliveryPrefsPrint,omitempty"`
	PaymentGateway            *string  `json:"paymentGateway,omitempty"`
	PaymentTerm               *string  `json:"paymentTerm,omitempty"`
}

// GetAccountTypeMetrics
// Container for account metrics.
type GetAccountTypeMetrics struct {
	Balance                   *string `json:"balance,omitempty"`
	ContractedMrr             *string `json:"contractedMrr,omitempty"`
	CreditBalance             *string `json:"creditBalance,omitempty"`
	TotalDebitMemoBalance     *string `json:"totalDebitMemoBalance,omitempty"`
	TotalInvoiceBalance       *string `json:"totalInvoiceBalance,omitempty"`
	UnappliedCreditMemoAmount *string `json:"unappliedCreditMemoAmount,omitempty"`
	UnappliedPaymentAmount    *string `json:"unappliedPaymentAmount,omitempty"`
}

// GetAccountTypeTaxInfo
// Container for tax exempt information, used to establish the tax exempt status of a customer account.
type GetAccountTypeTaxInfo struct {
	VATID                     *string    `json:"VATId,omitempty"`
	CompanyCode               *string    `json:"companyCode,omitempty"`
	ExemptCertificateID       *string    `json:"exemptCertificateId,omitempty"`
	ExemptCertificateType     *string    `json:"exemptCertificateType,omitempty"`
	ExemptDescription         *string    `json:"exemptDescription,omitempty"`
	ExemptEffectiveDate       *time.Time `json:"exemptEffectiveDate,omitempty"`
	ExemptEntityUseCode       *string    `json:"exemptEntityUseCode,omitempty"`
	ExemptExpirationDate      *time.Time `json:"exemptExpirationDate,omitempty"`
	ExemptIssuingJurisdiction *string    `json:"exemptIssuingJurisdiction,omitempty"`
	ExemptStatus              *string    `json:"exemptStatus,omitempty"`
}

type GetAccountType struct {
	BasicInfo         map[string]interface{}           `json:"basicInfo,omitempty"`
	BillToContact     map[string]interface{}           `json:"billToContact,omitempty"`
	BillingAndPayment *GetAccountTypeBillingAndPayment `json:"billingAndPayment,omitempty"`
	Metrics           *GetAccountTypeMetrics           `json:"metrics,omitempty"`
	SoldToContact     map[string]interface{}           `json:"soldToContact,omitempty"`
	Success           *bool                            `json:"success,omitempty"`
	TaxInfo           *GetAccountTypeTaxInfo           `json:"taxInfo,omitempty"`
}
