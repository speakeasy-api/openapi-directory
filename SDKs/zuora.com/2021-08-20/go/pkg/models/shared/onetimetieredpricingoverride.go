package shared

// OneTimeTieredPricingOverride
// Pricing information about a one-time charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
type OneTimeTieredPricingOverride struct {
	Quantity *float64     `json:"quantity,omitempty"`
	Tiers    []ChargeTier `json:"tiers,omitempty"`
}
