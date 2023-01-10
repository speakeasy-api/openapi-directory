package shared

import (
	"time"
)

// OrderDeltaTcb
// Order Delta Tcb. This is a metric that reflects the change to the estimated billing on Rate Plan Charge object, or the estimated billing for an Order Line Item as the result of the order
type OrderDeltaTcb struct {
	ChargeNumber            *string    `json:"chargeNumber,omitempty"`
	Currency                *string    `json:"currency,omitempty"`
	EndDate                 *time.Time `json:"endDate,omitempty"`
	GrossAmount             *float64   `json:"grossAmount,omitempty"`
	NetAmount               *float64   `json:"netAmount,omitempty"`
	OrderActionID           *string    `json:"orderActionId,omitempty"`
	OrderActionSequence     *string    `json:"orderActionSequence,omitempty"`
	OrderActionType         *string    `json:"orderActionType,omitempty"`
	OrderLineItemID         *string    `json:"orderLineItemId,omitempty"`
	ProductRatePlanChargeID *string    `json:"productRatePlanChargeId,omitempty"`
	RatePlanChargeID        *string    `json:"ratePlanChargeId,omitempty"`
	StartDate               *time.Time `json:"startDate,omitempty"`
	SubscriptionNumber      *string    `json:"subscriptionNumber,omitempty"`
}
