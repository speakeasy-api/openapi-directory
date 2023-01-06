package shared

type RecurringPerUnitPricingOverrideListPriceBaseEnum string

const (
	RecurringPerUnitPricingOverrideListPriceBaseEnumPerBillingPeriod RecurringPerUnitPricingOverrideListPriceBaseEnum = "Per_Billing_Period"
	RecurringPerUnitPricingOverrideListPriceBaseEnumPerMonth         RecurringPerUnitPricingOverrideListPriceBaseEnum = "Per_Month"
	RecurringPerUnitPricingOverrideListPriceBaseEnumPerWeek          RecurringPerUnitPricingOverrideListPriceBaseEnum = "Per_Week"
)

// RecurringPerUnitPricingOverride
// Pricing information about a recurring charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
type RecurringPerUnitPricingOverride struct {
	ListPrice     *float64                                          `json:"listPrice,omitempty"`
	ListPriceBase *RecurringPerUnitPricingOverrideListPriceBaseEnum `json:"listPriceBase,omitempty"`
	Quantity      *float64                                          `json:"quantity,omitempty"`
}
