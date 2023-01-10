package shared

type RecurringFlatFeePricingUpdatePriceChangeOptionEnum string

const (
	RecurringFlatFeePricingUpdatePriceChangeOptionEnumNoChange                       RecurringFlatFeePricingUpdatePriceChangeOptionEnum = "NoChange"
	RecurringFlatFeePricingUpdatePriceChangeOptionEnumSpecificPercentageValue        RecurringFlatFeePricingUpdatePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringFlatFeePricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringFlatFeePricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type RecurringFlatFeePricingUpdate struct {
	ListPrice               *float64                                            `json:"listPrice,omitempty"`
	PriceChangeOption       *RecurringFlatFeePricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                            `json:"priceIncreasePercentage,omitempty"`
}
