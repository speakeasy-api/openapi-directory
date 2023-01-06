package shared

type RecurringTieredPricingOverrideListPriceBaseEnum string

const (
	RecurringTieredPricingOverrideListPriceBaseEnumPerBillingPeriod RecurringTieredPricingOverrideListPriceBaseEnum = "Per_Billing_Period"
	RecurringTieredPricingOverrideListPriceBaseEnumPerMonth         RecurringTieredPricingOverrideListPriceBaseEnum = "Per_Month"
	RecurringTieredPricingOverrideListPriceBaseEnumPerWeek          RecurringTieredPricingOverrideListPriceBaseEnum = "Per_Week"
)

// RecurringTieredPricingOverride
// Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
type RecurringTieredPricingOverride struct {
	ListPriceBase *RecurringTieredPricingOverrideListPriceBaseEnum `json:"listPriceBase,omitempty"`
	Quantity      *float64                                         `json:"quantity,omitempty"`
	Tiers         []ChargeTier                                     `json:"tiers,omitempty"`
}
