package shared

type DiscountPricingOverrideApplyDiscountToEnum string

const (
	DiscountPricingOverrideApplyDiscountToEnumOnetime               DiscountPricingOverrideApplyDiscountToEnum = "ONETIME"
	DiscountPricingOverrideApplyDiscountToEnumRecurring             DiscountPricingOverrideApplyDiscountToEnum = "RECURRING"
	DiscountPricingOverrideApplyDiscountToEnumUsage                 DiscountPricingOverrideApplyDiscountToEnum = "USAGE"
	DiscountPricingOverrideApplyDiscountToEnumOnetimerecurring      DiscountPricingOverrideApplyDiscountToEnum = "ONETIMERECURRING"
	DiscountPricingOverrideApplyDiscountToEnumOnetimeusage          DiscountPricingOverrideApplyDiscountToEnum = "ONETIMEUSAGE"
	DiscountPricingOverrideApplyDiscountToEnumRecurringusage        DiscountPricingOverrideApplyDiscountToEnum = "RECURRINGUSAGE"
	DiscountPricingOverrideApplyDiscountToEnumOnetimerecurringusage DiscountPricingOverrideApplyDiscountToEnum = "ONETIMERECURRINGUSAGE"
)

type DiscountPricingOverrideDiscountLevelEnum string

const (
	DiscountPricingOverrideDiscountLevelEnumRateplan     DiscountPricingOverrideDiscountLevelEnum = "rateplan"
	DiscountPricingOverrideDiscountLevelEnumSubscription DiscountPricingOverrideDiscountLevelEnum = "subscription"
	DiscountPricingOverrideDiscountLevelEnumAccount      DiscountPricingOverrideDiscountLevelEnum = "account"
)

type DiscountPricingOverridePriceChangeOptionEnum string

const (
	DiscountPricingOverridePriceChangeOptionEnumNoChange                       DiscountPricingOverridePriceChangeOptionEnum = "NoChange"
	DiscountPricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing DiscountPricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// DiscountPricingOverride
// Pricing information about a discount charge.
type DiscountPricingOverride struct {
	ApplyDiscountTo    *DiscountPricingOverrideApplyDiscountToEnum   `json:"applyDiscountTo,omitempty"`
	DiscountAmount     *float64                                      `json:"discountAmount,omitempty"`
	DiscountLevel      *DiscountPricingOverrideDiscountLevelEnum     `json:"discountLevel,omitempty"`
	DiscountPercentage *float64                                      `json:"discountPercentage,omitempty"`
	PriceChangeOption  *DiscountPricingOverridePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
}
