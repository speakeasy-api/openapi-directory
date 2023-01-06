package shared

type RecurringFlatFeePricingOverrideListPriceBaseEnum string

const (
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerBillingPeriod RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Billing_Period"
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerMonth         RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Month"
	RecurringFlatFeePricingOverrideListPriceBaseEnumPerWeek          RecurringFlatFeePricingOverrideListPriceBaseEnum = "Per_Week"
)

// RecurringFlatFeePricingOverride
// Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
type RecurringFlatFeePricingOverride struct {
	ListPrice     *float64                                          `json:"listPrice,omitempty"`
	ListPriceBase *RecurringFlatFeePricingOverrideListPriceBaseEnum `json:"listPriceBase,omitempty"`
}
