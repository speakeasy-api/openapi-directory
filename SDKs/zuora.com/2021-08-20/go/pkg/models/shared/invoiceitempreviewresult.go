package shared

import (
	"time"
)

type InvoiceItemPreviewResultAdditionalInfo struct {
	Quantity      *float64 `json:"quantity,omitempty"`
	UnitOfMeasure *string  `json:"unitOfMeasure,omitempty"`
}

type InvoiceItemPreviewResultProcessingTypeEnum string

const (
	InvoiceItemPreviewResultProcessingTypeEnumCharge   InvoiceItemPreviewResultProcessingTypeEnum = "Charge"
	InvoiceItemPreviewResultProcessingTypeEnumDiscount InvoiceItemPreviewResultProcessingTypeEnum = "Discount"
	InvoiceItemPreviewResultProcessingTypeEnumTax      InvoiceItemPreviewResultProcessingTypeEnum = "Tax"
)

type InvoiceItemPreviewResult struct {
	AdditionalInfo          *InvoiceItemPreviewResultAdditionalInfo     `json:"additionalInfo,omitempty"`
	AmountWithoutTax        *float64                                    `json:"amountWithoutTax,omitempty"`
	AppliedToChargeNumber   *string                                     `json:"appliedToChargeNumber,omitempty"`
	ChargeDescription       *string                                     `json:"chargeDescription,omitempty"`
	ChargeName              *string                                     `json:"chargeName,omitempty"`
	ChargeNumber            *string                                     `json:"chargeNumber,omitempty"`
	ProcessingType          *InvoiceItemPreviewResultProcessingTypeEnum `json:"processingType,omitempty"`
	ProductName             *string                                     `json:"productName,omitempty"`
	ProductRatePlanChargeID *string                                     `json:"productRatePlanChargeId,omitempty"`
	ServiceEndDate          *time.Time                                  `json:"serviceEndDate,omitempty"`
	ServiceStartDate        *time.Time                                  `json:"serviceStartDate,omitempty"`
	SubscriptionNumber      *string                                     `json:"subscriptionNumber,omitempty"`
	TaxAmount               *float64                                    `json:"taxAmount,omitempty"`
}
