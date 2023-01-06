package shared

import (
	"time"
)

type PostSubscriptionPreviewInvoiceItemsType struct {
	ChargeAmount            *float64   `json:"chargeAmount,omitempty"`
	ChargeDescription       *string    `json:"chargeDescription,omitempty"`
	ChargeName              *string    `json:"chargeName,omitempty"`
	ProductName             *string    `json:"productName,omitempty"`
	ProductRatePlanChargeID *string    `json:"productRatePlanChargeId,omitempty"`
	Quantity                *float64   `json:"quantity,omitempty"`
	ServiceEndDate          *time.Time `json:"serviceEndDate,omitempty"`
	ServiceStartDate        *time.Time `json:"serviceStartDate,omitempty"`
	TaxAmount               *float64   `json:"taxAmount,omitempty"`
	UnitOfMeasure           *string    `json:"unitOfMeasure,omitempty"`
}
