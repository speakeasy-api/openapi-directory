package shared

import (
	"time"
)

type PostSubscriptionPreviewCreditMemoItemsType struct {
	AmountWithoutTax        *float64   `json:"amountWithoutTax,omitempty"`
	ChargeAmount            *float64   `json:"chargeAmount,omitempty"`
	ChargeDescription       *string    `json:"chargeDescription,omitempty"`
	ChargeName              *string    `json:"chargeName,omitempty"`
	ProductName             *string    `json:"productName,omitempty"`
	ProductRatePlanChargeID *string    `json:"productRatePlanChargeId,omitempty"`
	Quantity                *int64     `json:"quantity,omitempty"`
	ServiceEndDate          *time.Time `json:"serviceEndDate,omitempty"`
	ServiceStartDate        *time.Time `json:"serviceStartDate,omitempty"`
	TaxAmount               *float64   `json:"taxAmount,omitempty"`
	UnitOfMeasure           *string    `json:"unitOfMeasure,omitempty"`
}
