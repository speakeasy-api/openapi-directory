package shared

import (
	"time"
)

type PostBillingPreviewInvoiceItem struct {
	AppliedToItemID    *string    `json:"appliedToItemId,omitempty"`
	ChargeAmount       *string    `json:"chargeAmount,omitempty"`
	ChargeDate         *time.Time `json:"chargeDate,omitempty"`
	ChargeDescription  *string    `json:"chargeDescription,omitempty"`
	ChargeID           *string    `json:"chargeId,omitempty"`
	ChargeName         *string    `json:"chargeName,omitempty"`
	ChargeNumber       *string    `json:"chargeNumber,omitempty"`
	ChargeType         *string    `json:"chargeType,omitempty"`
	ID                 *string    `json:"id,omitempty"`
	ProcessingType     *string    `json:"processingType,omitempty"`
	ProductName        *string    `json:"productName,omitempty"`
	Quantity           *string    `json:"quantity,omitempty"`
	ServiceEndDate     *time.Time `json:"serviceEndDate,omitempty"`
	ServiceStartDate   *time.Time `json:"serviceStartDate,omitempty"`
	SubscriptionID     *string    `json:"subscriptionId,omitempty"`
	SubscriptionName   *string    `json:"subscriptionName,omitempty"`
	SubscriptionNumber *string    `json:"subscriptionNumber,omitempty"`
	TaxAmount          *string    `json:"taxAmount,omitempty"`
	UnitOfMeasure      *string    `json:"unitOfMeasure,omitempty"`
}
