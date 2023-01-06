package shared

// RatePlanOverride
// Rate plan associated with a subscription.
type RatePlanOverride struct {
	ChargeOverrides   []ChargeOverride       `json:"chargeOverrides,omitempty"`
	CustomFields      map[string]interface{} `json:"customFields,omitempty"`
	NewRatePlanID     *string                `json:"newRatePlanId,omitempty"`
	ProductRatePlanID string                 `json:"productRatePlanId"`
	UniqueToken       *string                `json:"uniqueToken,omitempty"`
}
