package shared

// UsageFlatFeePricingOverride
// Pricing information about a usage charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
type UsageFlatFeePricingOverride struct {
	ListPrice *float64 `json:"listPrice,omitempty"`
}
