package shared

type UsageFlatFeePricingUpdatePriceChangeOptionEnum string

const (
	UsageFlatFeePricingUpdatePriceChangeOptionEnumNoChange                       UsageFlatFeePricingUpdatePriceChangeOptionEnum = "NoChange"
	UsageFlatFeePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsageFlatFeePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageFlatFeePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsageFlatFeePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsageFlatFeePricingUpdate struct {
	ListPrice               *float64                                        `json:"listPrice,omitempty"`
	PriceChangeOption       *UsageFlatFeePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                        `json:"priceIncreasePercentage,omitempty"`
}
