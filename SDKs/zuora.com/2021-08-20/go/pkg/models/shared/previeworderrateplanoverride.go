package shared

// PreviewOrderRatePlanOverride
// Rate plan associated with a subscription.
type PreviewOrderRatePlanOverride struct {
	ChargeOverrides   []PreviewOrderChargeOverride `json:"chargeOverrides,omitempty"`
	CustomFields      map[string]interface{}       `json:"customFields,omitempty"`
	ProductRatePlanID string                       `json:"productRatePlanId"`
	UniqueToken       *string                      `json:"uniqueToken,omitempty"`
}
