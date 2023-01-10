package shared

type UsageTieredPricingUpdatePriceChangeOptionEnum string

const (
	UsageTieredPricingUpdatePriceChangeOptionEnumNoChange                       UsageTieredPricingUpdatePriceChangeOptionEnum = "NoChange"
	UsageTieredPricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsageTieredPricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageTieredPricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsageTieredPricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsageTieredPricingUpdate struct {
	PriceChangeOption       *UsageTieredPricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                       `json:"priceIncreasePercentage,omitempty"`
	Tiers                   []ChargeTier                                   `json:"tiers,omitempty"`
}
