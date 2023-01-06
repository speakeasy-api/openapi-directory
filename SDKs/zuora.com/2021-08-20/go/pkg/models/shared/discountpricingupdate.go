package shared

type DiscountPricingUpdateApplyDiscountToEnum string

const (
	DiscountPricingUpdateApplyDiscountToEnumOnetime               DiscountPricingUpdateApplyDiscountToEnum = "ONETIME"
	DiscountPricingUpdateApplyDiscountToEnumRecurring             DiscountPricingUpdateApplyDiscountToEnum = "RECURRING"
	DiscountPricingUpdateApplyDiscountToEnumUsage                 DiscountPricingUpdateApplyDiscountToEnum = "USAGE"
	DiscountPricingUpdateApplyDiscountToEnumOnetimerecurring      DiscountPricingUpdateApplyDiscountToEnum = "ONETIMERECURRING"
	DiscountPricingUpdateApplyDiscountToEnumOnetimeusage          DiscountPricingUpdateApplyDiscountToEnum = "ONETIMEUSAGE"
	DiscountPricingUpdateApplyDiscountToEnumRecurringusage        DiscountPricingUpdateApplyDiscountToEnum = "RECURRINGUSAGE"
	DiscountPricingUpdateApplyDiscountToEnumOnetimerecurringusage DiscountPricingUpdateApplyDiscountToEnum = "ONETIMERECURRINGUSAGE"
)

type DiscountPricingUpdateDiscountLevelEnum string

const (
	DiscountPricingUpdateDiscountLevelEnumRateplan     DiscountPricingUpdateDiscountLevelEnum = "rateplan"
	DiscountPricingUpdateDiscountLevelEnumSubscription DiscountPricingUpdateDiscountLevelEnum = "subscription"
	DiscountPricingUpdateDiscountLevelEnumAccount      DiscountPricingUpdateDiscountLevelEnum = "account"
)

type DiscountPricingUpdatePriceChangeOptionEnum string

const (
	DiscountPricingUpdatePriceChangeOptionEnumNoChange                       DiscountPricingUpdatePriceChangeOptionEnum = "NoChange"
	DiscountPricingUpdatePriceChangeOptionEnumUseLatestProductCatalogPricing DiscountPricingUpdatePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

type DiscountPricingUpdate struct {
	ApplyDiscountTo    *DiscountPricingUpdateApplyDiscountToEnum   `json:"applyDiscountTo,omitempty"`
	DiscountLevel      *DiscountPricingUpdateDiscountLevelEnum     `json:"discountLevel,omitempty"`
	DiscountPercentage *float64                                    `json:"discountPercentage,omitempty"`
	PriceChangeOption  *DiscountPricingUpdatePriceChangeOptionEnum `json:"priceChangeOption,omitempty"`
}
