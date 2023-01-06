package shared

type PreviewOrderChargeUpdate struct {
	Billing       *BillingUpdate             `json:"billing,omitempty"`
	ChargeNumber  *string                    `json:"chargeNumber,omitempty"`
	CustomFields  map[string]interface{}     `json:"customFields,omitempty"`
	Description   *string                    `json:"description,omitempty"`
	EffectiveDate *PreviewOrderTriggerParams `json:"effectiveDate,omitempty"`
	Pricing       *PreviewOrderPricingUpdate `json:"pricing,omitempty"`
	UniqueToken   *string                    `json:"uniqueToken,omitempty"`
}
