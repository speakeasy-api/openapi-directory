package shared

type RecurringFlatFeePricingOverrideListPriceBaseEnum string

const (
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerBillingPeriod RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Billing_Period"
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerMonth         RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Month"
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerWeek          RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Week"
)

type RecurringFlatFeePricingOverridePriceChangeOptionEnum string

const (
	RecurringFlatFeePricingOverridePriceChangeOptionEnumNoChange                       RecurringFlatFeePricingOverridePriceChangeOptionEnum = "NoChange"
	RecurringFlatFeePricingOverridePriceChangeOptionEnumSpecificPercentageValue        RecurringFlatFeePricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringFlatFeePricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringFlatFeePricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// RecurringFlatFeePricingOverride
// Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
type RecurringFlatFeePricingOverride struct {
	ListPrice               *float64                                              `json:"listPrice,omitempty"`
	ListPriceBase           *RecurringFlatFeePricingOverrideListPriceBaseEnum     `json:"listPriceBase,omitempty"`
	PriceChangeOption       *RecurringFlatFeePricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                              `json:"priceIncreasePercentage,omitempty"`
}
