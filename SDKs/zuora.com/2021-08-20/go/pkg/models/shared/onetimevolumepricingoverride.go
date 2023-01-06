package shared

// OneTimeVolumePricingOverride
// Pricing information about a one-time charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
type OneTimeVolumePricingOverride struct {
	Quantity *float64     `json:"quantity,omitempty"`
	Tiers    []ChargeTier `json:"tiers,omitempty"`
}
