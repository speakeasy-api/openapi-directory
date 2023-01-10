package shared

type UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum string

const (
	UsageTieredWithOveragePricingUpdatePriceChangeOptionEnumNoChange                       UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = "NoChange"
	UsageTieredWithOveragePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageTieredWithOveragePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type UsageTieredWithOveragePricingUpdate struct {
	OveragePrice            *float64                                                  `json:"overagePrice,omitempty"`
	PriceChangeOption       *UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                                  `json:"priceIncreasePercentage,omitempty"`
	Tiers                   []ChargeTier                                              `json:"tiers,omitempty"`
}
