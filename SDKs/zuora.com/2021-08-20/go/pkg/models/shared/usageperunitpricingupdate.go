package shared

type UsagePerUnitPricingUpdatePriceChangeOptionEnum string

const (
	UsagePerUnitPricingUpdatePriceChangeOptionEnumNoChange                       UsagePerUnitPricingUpdatePriceChangeOptionEnum = "NoChange"
	UsagePerUnitPricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsagePerUnitPricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsagePerUnitPricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsagePerUnitPricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsagePerUnitPricingUpdate struct {
	ListPrice               *float64                                        `json:"listPrice,omitempty"`
	PriceChangeOption       *UsagePerUnitPricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                        `json:"priceIncreasePercentage,omitempty"`
}
