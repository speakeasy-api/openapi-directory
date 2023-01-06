package shared

import (
	"time"
)

// RatePlanUpdateForEvergreen
// Information about an order action of type `UpdateProduct`.
type RatePlanUpdateForEvergreen struct {
	ChargeUpdates      []ChargeUpdateForEvergreen `json:"chargeUpdates,omitempty"`
	CustomFields       map[string]interface{}     `json:"customFields,omitempty"`
	NewRatePlanID      *string                    `json:"newRatePlanId,omitempty"`
	RatePlanID         *string                    `json:"ratePlanId,omitempty"`
	SpecificUpdateDate *time.Time                 `json:"specificUpdateDate,omitempty"`
	UniqueToken        *string                    `json:"uniqueToken,omitempty"`
}
