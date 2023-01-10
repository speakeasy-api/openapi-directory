package shared

type UsagePerUnitPricingOverridePriceChangeOptionEnum string

const (
	UsagePerUnitPricingOverridePriceChangeOptionEnumNoChange                       UsagePerUnitPricingOverridePriceChangeOptionEnum = "NoChange"
	UsagePerUnitPricingOverridePriceChangeOptionEnumSpecificPercentageValue        UsagePerUnitPricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	UsagePerUnitPricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing UsagePerUnitPricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsagePerUnitPricingOverrideRatingGroupEnum string

const (
	UsagePerUnitPricingOverrideRatingGroupEnumByBillingPeriod  UsagePerUnitPricingOverrideRatingGroupEnum = "ByBillingPeriod"
	UsagePerUnitPricingOverrideRatingGroupEnumByUsageStartDate UsagePerUnitPricingOverrideRatingGroupEnum = "ByUsageStartDate"
	UsagePerUnitPricingOverrideRatingGroupEnumByUsageRecord    UsagePerUnitPricingOverrideRatingGroupEnum = "ByUsageRecord"
	UsagePerUnitPricingOverrideRatingGroupEnumByUsageUpload    UsagePerUnitPricingOverrideRatingGroupEnum = "ByUsageUpload"
)

// UsagePerUnitPricingOverride
// Pricing information about a usage charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit consumed.
type UsagePerUnitPricingOverride struct {
	ListPrice               *float64                                          `json:"listPrice,omitempty"`
	PriceChangeOption       *UsagePerUnitPricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                          `json:"priceIncreasePercentage,omitempty"`
	RatingGroup             *UsagePerUnitPricingOverrideRatingGroupEnum       `json:"ratingGroup,omitempty"`
}
