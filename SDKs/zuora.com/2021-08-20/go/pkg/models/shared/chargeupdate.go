package shared

// ChargeUpdate
// The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
type ChargeUpdate struct {
	Billing       *BillingUpdate         `json:"billing,omitempty"`
	ChargeNumber  *string                `json:"chargeNumber,omitempty"`
	CustomFields  map[string]interface{} `json:"customFields,omitempty"`
	Description   *string                `json:"description,omitempty"`
	EffectiveDate *TriggerParams         `json:"effectiveDate,omitempty"`
	Pricing       *PricingUpdate         `json:"pricing,omitempty"`
	UniqueToken   *string                `json:"uniqueToken,omitempty"`
}
