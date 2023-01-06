package shared

// OneTimePerUnitPricingOverride
// Pricing information about a one-time charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
type OneTimePerUnitPricingOverride struct {
	ListPrice *float64 `json:"listPrice,omitempty"`
	Quantity  *float64 `json:"quantity,omitempty"`
}
