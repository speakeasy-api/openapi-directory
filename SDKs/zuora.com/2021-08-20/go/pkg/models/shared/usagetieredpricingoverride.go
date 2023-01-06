package shared

type UsageTieredPricingOverrideRatingGroupEnum string

const (
	UsageTieredPricingOverrideRatingGroupEnumByBillingPeriod  UsageTieredPricingOverrideRatingGroupEnum = "ByBillingPeriod"
	UsageTieredPricingOverrideRatingGroupEnumByUsageStartDate UsageTieredPricingOverrideRatingGroupEnum = "ByUsageStartDate"
	UsageTieredPricingOverrideRatingGroupEnumByUsageRecord    UsageTieredPricingOverrideRatingGroupEnum = "ByUsageRecord"
	UsageTieredPricingOverrideRatingGroupEnumByUsageUpload    UsageTieredPricingOverrideRatingGroupEnum = "ByUsageUpload"
)

// UsageTieredPricingOverride
// Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
type UsageTieredPricingOverride struct {
	RatingGroup *UsageTieredPricingOverrideRatingGroupEnum `json:"ratingGroup,omitempty"`
	Tiers       []ChargeTier                               `json:"tiers,omitempty"`
}
