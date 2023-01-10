package shared

type UsageFlatFeePricingOverridePriceChangeOptionEnum string

const (
	UsageFlatFeePricingOverridePriceChangeOptionEnumNoChange                       UsageFlatFeePricingOverridePriceChangeOptionEnum = "NoChange"
	UsageFlatFeePricingOverridePriceChangeOptionEnumSpecificPercentageValue        UsageFlatFeePricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageFlatFeePricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing UsageFlatFeePricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// UsageFlatFeePricingOverride
// Pricing information about a usage charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
type UsageFlatFeePricingOverride struct {
	ListPrice               *float64                                          `json:"listPrice,omitempty"`
	PriceChangeOption       *UsageFlatFeePricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                          `json:"priceIncreasePercentage,omitempty"`
}
