package shared

// ChargeUpdateForEvergreen
// The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
type ChargeUpdateForEvergreen struct {
	Billing       *BillingUpdate             `json:"billing,omitempty"`
	ChargeNumber  *string                    `json:"chargeNumber,omitempty"`
	CustomFields  map[string]interface{}     `json:"customFields,omitempty"`
	Description   *string                    `json:"description,omitempty"`
	EffectiveDate *TriggerParams             `json:"effectiveDate,omitempty"`
	Pricing       *PricingUpdateForEvergreen `json:"pricing,omitempty"`
	UniqueToken   *string                    `json:"uniqueToken,omitempty"`
}
