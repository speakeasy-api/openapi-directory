package shared

import (
	"time"
)

type ActionAmendInvoiceItem struct {
	AccountingCode          *string    `json:"AccountingCode,omitempty"`
	AppliedToInvoiceItemID  *string    `json:"AppliedToInvoiceItemId,omitempty"`
	ChargeAmount            *float64   `json:"ChargeAmount,omitempty"`
	ChargeDate              *time.Time `json:"ChargeDate,omitempty"`
	ChargeDescription       *string    `json:"ChargeDescription,omitempty"`
	ChargeID                *string    `json:"ChargeId,omitempty"`
	ChargeName              *string    `json:"ChargeName,omitempty"`
	ChargeNumber            *string    `json:"ChargeNumber,omitempty"`
	ChargeType              *string    `json:"ChargeType,omitempty"`
	CreatedByID             *string    `json:"CreatedById,omitempty"`
	CreatedDate             *time.Time `json:"CreatedDate,omitempty"`
	InvoiceID               *string    `json:"InvoiceId,omitempty"`
	ProcessingType          *float64   `json:"ProcessingType,omitempty"`
	ProductDescription      *string    `json:"ProductDescription,omitempty"`
	ProductID               *string    `json:"ProductId,omitempty"`
	ProductName             *string    `json:"ProductName,omitempty"`
	ProductRatePlanChargeID *string    `json:"ProductRatePlanChargeId,omitempty"`
	Quantity                *float64   `json:"Quantity,omitempty"`
	RatePlanChargeID        *string    `json:"RatePlanChargeId,omitempty"`
	RevRecCode              *string    `json:"RevRecCode,omitempty"`
	RevRecStartDate         *time.Time `json:"RevRecStartDate,omitempty"`
	RevRecTriggerCondition  *string    `json:"RevRecTriggerCondition,omitempty"`
	SKU                     *string    `json:"SKU,omitempty"`
	ServiceEndDate          *time.Time `json:"ServiceEndDate,omitempty"`
	ServiceStartDate        *time.Time `json:"ServiceStartDate,omitempty"`
	SubscriptionID          *string    `json:"SubscriptionId,omitempty"`
	SubscriptionNumber      *string    `json:"SubscriptionNumber,omitempty"`
	TaxAmount               *float64   `json:"TaxAmount,omitempty"`
	TaxCode                 *string    `json:"TaxCode,omitempty"`
	TaxExemptAmount         *float64   `json:"TaxExemptAmount,omitempty"`
	TaxMode                 *string    `json:"TaxMode,omitempty"`
	UOM                     *string    `json:"UOM,omitempty"`
	UnitPrice               *float64   `json:"UnitPrice,omitempty"`
	UpdatedByID             *string    `json:"UpdatedById,omitempty"`
	UpdatedDate             *time.Time `json:"UpdatedDate,omitempty"`
}
