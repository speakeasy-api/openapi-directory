package shared

import (
	"time"
)

// OrderDeltaMrr
// Order Delta Mrr. This is a metric that reflects the change to the TCV on rate plan charge object as the result of the order.
type OrderDeltaMrr struct {
	ChargeNumber            *string    `json:"chargeNumber,omitempty"`
	Currency                *string    `json:"currency,omitempty"`
	EndDate                 *time.Time `json:"endDate,omitempty"`
	GrossAmount             *float64   `json:"grossAmount,omitempty"`
	NetAmount               *float64   `json:"netAmount,omitempty"`
	OrderActionID           *string    `json:"orderActionId,omitempty"`
	OrderActionSequence     *string    `json:"orderActionSequence,omitempty"`
	OrderActionType         *string    `json:"orderActionType,omitempty"`
	ProductRatePlanChargeID *string    `json:"productRatePlanChargeId,omitempty"`
	RatePlanChargeID        *string    `json:"ratePlanChargeId,omitempty"`
	StartDate               *time.Time `json:"startDate,omitempty"`
	SubscriptionNumber      *string    `json:"subscriptionNumber,omitempty"`
}
