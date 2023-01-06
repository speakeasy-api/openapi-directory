package shared

// OneTimeFlatFeePricingOverride
// Pricing information about a one-time charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
type OneTimeFlatFeePricingOverride struct {
	ListPrice float64 `json:"listPrice"`
}
