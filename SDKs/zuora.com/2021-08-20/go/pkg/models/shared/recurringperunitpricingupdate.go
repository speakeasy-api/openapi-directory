package shared

type RecurringPerUnitPricingUpdatePriceChangeOptionEnum string

const (
	RecurringPerUnitPricingUpdatePriceChangeOptionEnumNoChange                       RecurringPerUnitPricingUpdatePriceChangeOptionEnum = "NoChange"
	RecurringPerUnitPricingUpdatePriceChangeOptionEnumSpecificPercentageValue        RecurringPerUnitPricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringPerUnitPricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringPerUnitPricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type RecurringPerUnitPricingUpdate struct {
	ListPrice               *float64                                            `json:"listPrice,omitempty"`
	PriceChangeOption       *RecurringPerUnitPricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                            `json:"priceIncreasePercentage,omitempty"`
	Quantity                *float64                                            `json:"quantity,omitempty"`
}
