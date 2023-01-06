package shared

import (
	"time"
)

// RatePlanUpdate
// Information about an order action of type `UpdateProduct`.
type RatePlanUpdate struct {
	ChargeUpdates      []ChargeUpdate         `json:"chargeUpdates,omitempty"`
	CustomFields       map[string]interface{} `json:"customFields,omitempty"`
	NewRatePlanID      *string                `json:"newRatePlanId,omitempty"`
	RatePlanID         *string                `json:"ratePlanId,omitempty"`
	SpecificUpdateDate *time.Time             `json:"specificUpdateDate,omitempty"`
	UniqueToken        *string                `json:"uniqueToken,omitempty"`
}
