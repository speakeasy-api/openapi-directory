package shared

import (
	"time"
)

type GetInvoiceTaxItemTypeTaxRateTypeEnum string

const (
	GETInvoiceTaxItemTypeTaxRateTypeEnumPercentage GetInvoiceTaxItemTypeTaxRateTypeEnum = "Percentage"
	GETInvoiceTaxItemTypeTaxRateTypeEnumFlatFee    GetInvoiceTaxItemTypeTaxRateTypeEnum = "FlatFee"
)

type GetInvoiceTaxItemType struct {
	AvailableToCreditAmount *float64                              `json:"availableToCreditAmount,omitempty"`
	Balance                 *float64                              `json:"balance,omitempty"`
	CreditAmount            *float64                              `json:"creditAmount,omitempty"`
	ExemptAmount            *float64                              `json:"exemptAmount,omitempty"`
	ID                      *string                               `json:"id,omitempty"`
	Jurisdiction            *string                               `json:"jurisdiction,omitempty"`
	LocationCode            *string                               `json:"locationCode,omitempty"`
	Name                    *string                               `json:"name,omitempty"`
	PaymentAmount           *float64                              `json:"paymentAmount,omitempty"`
	TaxAmount               *float64                              `json:"taxAmount,omitempty"`
	TaxCode                 *string                               `json:"taxCode,omitempty"`
	TaxCodeDescription      *string                               `json:"taxCodeDescription,omitempty"`
	TaxDate                 *time.Time                            `json:"taxDate,omitempty"`
	TaxRate                 *float64                              `json:"taxRate,omitempty"`
	TaxRateDescription      *string                               `json:"taxRateDescription,omitempty"`
	TaxRateType             *GetInvoiceTaxItemTypeTaxRateTypeEnum `json:"taxRateType,omitempty"`
}
