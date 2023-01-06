package shared

import (
	"time"
)

type ActionSubscribeCreditMemoItem struct {
	AmountWithoutTax        *float64   `json:"AmountWithoutTax,omitempty"`
	ChargeName              *string    `json:"ChargeName,omitempty"`
	Description             *string    `json:"Description,omitempty"`
	ProductRatePlanChargeID *string    `json:"ProductRatePlanChargeId,omitempty"`
	Quantity                *int64     `json:"Quantity,omitempty"`
	ServiceEndDate          *time.Time `json:"ServiceEndDate,omitempty"`
	ServiceStartDate        *time.Time `json:"ServiceStartDate,omitempty"`
	TaxAmount               *float64   `json:"TaxAmount,omitempty"`
	UnitOfMeasure           *string    `json:"UnitOfMeasure,omitempty"`
}
