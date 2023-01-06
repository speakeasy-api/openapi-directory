package shared

// RatePlanOverride1
// Rate plan associated with a subscription.
type RatePlanOverride1 struct {
	ChargeOverrides   []ChargeOverride1      `json:"chargeOverrides,omitempty"`
	CustomFields      map[string]interface{} `json:"customFields,omitempty"`
	NewRatePlanID     *string                `json:"newRatePlanId,omitempty"`
	ProductRatePlanID string                 `json:"productRatePlanId"`
	UniqueToken       *string                `json:"uniqueToken,omitempty"`
}
