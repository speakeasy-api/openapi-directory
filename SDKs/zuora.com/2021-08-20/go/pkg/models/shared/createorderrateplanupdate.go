package shared

import (
	"time"
)

// CreateOrderRatePlanUpdate
// Information about an order action of type `UpdateProduct`.
type CreateOrderRatePlanUpdate struct {
	ChargeUpdates      []CreateOrderChargeUpdate `json:"chargeUpdates,omitempty"`
	CustomFields       map[string]interface{}    `json:"customFields,omitempty"`
	RatePlanID         *string                   `json:"ratePlanId,omitempty"`
	SpecificUpdateDate *time.Time                `json:"specificUpdateDate,omitempty"`
	UniqueToken        *string                   `json:"uniqueToken,omitempty"`
}
