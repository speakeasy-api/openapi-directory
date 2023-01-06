package shared

import (
	"time"
)

type TaxInfoExemptStatusEnum string

const (
	TaxInfoExemptStatusEnumNo                  TaxInfoExemptStatusEnum = "No"
	TaxInfoExemptStatusEnumYes                 TaxInfoExemptStatusEnum = "Yes"
	TaxInfoExemptStatusEnumPendingVerification TaxInfoExemptStatusEnum = "PendingVerification"
)

// TaxInfo
// Information about the tax exempt status of a customer account.
type TaxInfo struct {
	VATID                     *string                  `json:"VATId,omitempty"`
	CompanyCode               *string                  `json:"companyCode,omitempty"`
	ExemptCertificateID       *string                  `json:"exemptCertificateId,omitempty"`
	ExemptCertificateType     *string                  `json:"exemptCertificateType,omitempty"`
	ExemptDescription         *string                  `json:"exemptDescription,omitempty"`
	ExemptEffectiveDate       *time.Time               `json:"exemptEffectiveDate,omitempty"`
	ExemptExpirationDate      *time.Time               `json:"exemptExpirationDate,omitempty"`
	ExemptIssuingJurisdiction *string                  `json:"exemptIssuingJurisdiction,omitempty"`
	ExemptStatus              *TaxInfoExemptStatusEnum `json:"exemptStatus,omitempty"`
}
