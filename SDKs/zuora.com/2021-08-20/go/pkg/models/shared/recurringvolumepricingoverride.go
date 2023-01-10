package shared

type RecurringVolumePricingOverrideListPriceBaseEnum string

const (
	RecurringVolumePricingOverrideListPriceBaseEnumPerBillingPeriod RecurringVolumePricingOverrideListPriceBaseEnum = "Per_Billing_Period"
	RecurringVolumePricingOverrideListPriceBaseEnumPerMonth         RecurringVolumePricingOverrideListPriceBaseEnum = "Per_Month"
	RecurringVolumePricingOverrideListPriceBaseEnumPerWeek          RecurringVolumePricingOverrideListPriceBaseEnum = "Per_Week"
)

type RecurringVolumePricingOverridePriceChangeOptionEnum string

const (
	RecurringVolumePricingOverridePriceChangeOptionEnumNoChange                       RecurringVolumePricingOverridePriceChangeOptionEnum = "NoChange"
	RecurringVolumePricingOverridePriceChangeOptionEnumSpecificPercentageValue        RecurringVolumePricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	RecurringVolumePricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing RecurringVolumePricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// RecurringVolumePricingOverride
// Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
type RecurringVolumePricingOverride struct {
	ListPriceBase           *RecurringVolumePricingOverrideListPriceBaseEnum     `json:"listPriceBase,omitempty"`
	PriceChangeOption       *RecurringVolumePricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage *float64                                             `json:"priceIncreasePercentage,omitempty"`
	Quantity                *float64                                             `json:"quantity,omitempty"`
	Tiers                   []ChargeTier                                         `json:"tiers,omitempty"`
}
