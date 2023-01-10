package shared

type UsageOveragePricingUpdatePriceChangeOptionEnum string

const (
	UsageOveragePricingUpdatePriceChangeOptionEnumNoChange                       UsageOveragePricingUpdatePriceChangeOptionEnum = "NoChange"
	UsageOveragePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsageOveragePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageOveragePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsageOveragePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsageOveragePricingUpdate struct {
	IncludedUnits           *float64                                        `json:"includedUnits,omitempty"`
	OveragePrice            *float64                                        `json:"overagePrice,omitempty"`
	PriceChangeOption       *UsageOveragePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                        `json:"priceIncreasePercentage,omitempty"`
}
