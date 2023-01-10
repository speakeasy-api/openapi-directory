package shared

type RecurringVolumePricingUpdatePriceChangeOptionEnum string

const (
	RecurringVolumePricingUpdatePriceChangeOptionEnumNoChange                       RecurringVolumePricingUpdatePriceChangeOptionEnum = "NoChange"
	RecurringVolumePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        RecurringVolumePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringVolumePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringVolumePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type RecurringVolumePricingUpdate struct {
	PriceChangeOption       *RecurringVolumePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                           `json:"priceIncreasePercentage,omitempty"`
	Quantity                *float64                                           `json:"quantity,omitempty"`
	Tiers                   []ChargeTier                                       `json:"tiers,omitempty"`
}
