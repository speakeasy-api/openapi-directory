package shared

// PreviewOrderRatePlanOverride1
// Rate plan associated with a subscription.
type PreviewOrderRatePlanOverride1 struct {
	ChargeOverrides   []PreviewOrderChargeOverride1 `json:"chargeOverrides,omitempty"`
	CustomFields      map[string]interface{}        `json:"customFields,omitempty"`
	ProductRatePlanID string                        `json:"productRatePlanId"`
	UniqueToken       *string                       `json:"uniqueToken,omitempty"`
}
