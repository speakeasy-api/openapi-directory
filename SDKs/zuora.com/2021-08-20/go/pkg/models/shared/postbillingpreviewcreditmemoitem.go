package shared

import (
	"time"
)

type PostBillingPreviewCreditMemoItem struct {
	Amount             *float64   `json:"amount,omitempty"`
	AmountWithoutTax   *float64   `json:"amountWithoutTax,omitempty"`
	AppliedToItemID    *string    `json:"appliedToItemId,omitempty"`
	ChargeDate         *time.Time `json:"chargeDate,omitempty"`
	ChargeNumber       *string    `json:"chargeNumber,omitempty"`
	ChargeType         *string    `json:"chargeType,omitempty"`
	Comment            *string    `json:"comment,omitempty"`
	ID                 *string    `json:"id,omitempty"`
	ProcessingType     *string    `json:"processingType,omitempty"`
	Quantity           *string    `json:"quantity,omitempty"`
	RatePlanChargeID   *string    `json:"ratePlanChargeId,omitempty"`
	ServiceEndDate     *time.Time `json:"serviceEndDate,omitempty"`
	ServiceStartDate   *time.Time `json:"serviceStartDate,omitempty"`
	Sku                *string    `json:"sku,omitempty"`
	SkuName            *string    `json:"skuName,omitempty"`
	SubscriptionID     *string    `json:"subscriptionId,omitempty"`
	SubscriptionNumber *string    `json:"subscriptionNumber,omitempty"`
	UnitOfMeasure      *string    `json:"unitOfMeasure,omitempty"`
}
