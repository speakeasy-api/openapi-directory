package shared

type UsageVolumePricingOverridePriceChangeOptionEnum string

const (
	UsageVolumePricingOverridePriceChangeOptionEnumNoChange                       UsageVolumePricingOverridePriceChangeOptionEnum = "NoChange"
	UsageVolumePricingOverridePriceChangeOptionEnumSpecificPercentageValue        UsageVolumePricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageVolumePricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing UsageVolumePricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

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
	PriceChangeOption       *UsageVolumePricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                         `json:"priceIncreasePercentage,omitempty"`
	RatingGroup             *UsageVolumePricingOverrideRatingGroupEnum       `json:"ratingGroup,omitempty"`
	Tiers                   []ChargeTier                                     `json:"tiers,omitempty"`
}
