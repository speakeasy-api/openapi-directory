package shared

type UsageVolumePricingUpdatePriceChangeOptionEnum string

const (
	UsageVolumePricingUpdatePriceChangeOptionEnumNoChange                       UsageVolumePricingUpdatePriceChangeOptionEnum = "NoChange"
	UsageVolumePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsageVolumePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageVolumePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsageVolumePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsageVolumePricingUpdate struct {
	PriceChangeOption       *UsageVolumePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                       `json:"priceIncreasePercentage,omitempty"`
	Tiers                   []ChargeTier                                   `json:"tiers,omitempty"`
}
