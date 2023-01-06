package shared

import (
	"time"
)

// GetAccountSummaryTypeTaxInfo
// Container for tax exempt information, used to establish the tax exempt status of a customer account.
type GetAccountSummaryTypeTaxInfo struct {
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

type GetAccountSummaryType struct {
	BasicInfo     map[string]interface{}         `json:"basicInfo,omitempty"`
	BillToContact map[string]interface{}         `json:"billToContact,omitempty"`
	Invoices      []GetAccountSummaryInvoiceType `json:"invoices,omitempty"`
	Payments      []GetAccountSummaryPaymentType `json:"payments,omitempty"`
	SoldToContact map[string]interface{}         `json:"soldToContact,omitempty"`
	Subscriptions []map[string]interface{}       `json:"subscriptions,omitempty"`
	Success       *bool                          `json:"success,omitempty"`
	TaxInfo       *GetAccountSummaryTypeTaxInfo  `json:"taxInfo,omitempty"`
	Usage         []GetAccountSummaryUsageType   `json:"usage,omitempty"`
}
