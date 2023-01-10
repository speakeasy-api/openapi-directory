package shared

type RecurringTieredPricingUpdatePriceChangeOptionEnum string

const (
	RecurringTieredPricingUpdatePriceChangeOptionEnumNoChange                       RecurringTieredPricingUpdatePriceChangeOptionEnum = "NoChange"
	RecurringTieredPricingUpdatePriceChangeOptionEnumSpecificPercentageValue        RecurringTieredPricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringTieredPricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringTieredPricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type RecurringTieredPricingUpdate struct {
	PriceChangeOption       *RecurringTieredPricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                           `json:"priceIncreasePercentage,omitempty"`
	Quantity                *float64                                           `json:"quantity,omitempty"`
	Tiers                   []ChargeTier                                       `json:"tiers,omitempty"`
}
