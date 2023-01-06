package shared

type UsageVolumePricingOverrideRatingGroupEnum string

const (
	UsageVolumePricingOverrideRatingGroupEnumByBillingPeriod  UsageVolumePricingOverrideRatingGroupEnum = "ByBillingPeriod"
	UsageVolumePricingOverrideRatingGroupEnumByUsageStartDate UsageVolumePricingOverrideRatingGroupEnum = "ByUsageStartDate"
	UsageVolumePricingOverrideRatingGroupEnumByUsageRecord    UsageVolumePricingOverrideRatingGroupEnum = "ByUsageRecord"
	UsageVolumePricingOverrideRatingGroupEnumByUsageUpload    UsageVolumePricingOverrideRatingGroupEnum = "ByUsageUpload"
)

// UsageVolumePricingOverride
// Pricing information about a usage charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are consumed.
type UsageVolumePricingOverride struct {
	RatingGroup *UsageVolumePricingOverrideRatingGroupEnum `json:"ratingGroup,omitempty"`
	Tiers       []ChargeTier                               `json:"tiers,omitempty"`
}
