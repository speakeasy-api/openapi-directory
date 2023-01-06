package shared

// CreateOrderChargeUpdate
// The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
type CreateOrderChargeUpdate struct {
	Billing       *BillingUpdate                         `json:"billing,omitempty"`
	ChargeNumber  *string                                `json:"chargeNumber,omitempty"`
	CustomFields  map[string]interface{}                 `json:"customFields,omitempty"`
	Description   *string                                `json:"description,omitempty"`
	EffectiveDate *CreateOrderUpdateProductTriggerParams `json:"effectiveDate,omitempty"`
	Pricing       *CreateOrderPricingUpdate              `json:"pricing,omitempty"`
	UniqueToken   *string                                `json:"uniqueToken,omitempty"`
}
