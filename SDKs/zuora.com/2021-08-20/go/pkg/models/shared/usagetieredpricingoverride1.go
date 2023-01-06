package shared

type UsageTieredPricingOverridePriceChangeOptionEnum string

const (
	UsageTieredPricingOverridePriceChangeOptionEnumNoChange                       UsageTieredPricingOverridePriceChangeOptionEnum = "NoChange"
	UsageTieredPricingOverridePriceChangeOptionEnumSpecificPercentageValue        UsageTieredPricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageTieredPricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing UsageTieredPricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// UsageTieredPricingOverride1
// Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
type UsageTieredPricingOverride1 struct {
	PriceChangeOption       *UsageTieredPricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                         `json:"priceIncreasePercentage,omitempty"`
}
