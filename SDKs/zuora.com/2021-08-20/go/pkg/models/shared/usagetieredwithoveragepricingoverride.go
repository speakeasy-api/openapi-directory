package shared

type UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum string

const (
	UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnumNoCredit             UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = "NoCredit"
	UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnumCreditBySpecificRate UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = "CreditBySpecificRate"
)

type UsageTieredWithOveragePricingOverridePriceChangeOptionEnum string

const (
	UsageTieredWithOveragePricingOverridePriceChangeOptionEnumNoChange                       UsageTieredWithOveragePricingOverridePriceChangeOptionEnum = "NoChange"
	UsageTieredWithOveragePricingOverridePriceChangeOptionEnumSpecificPercentageValue        UsageTieredWithOveragePricingOverridePriceChangeOptionEnum = "SpecificPercentageValue"
	UsageTieredWithOveragePricingOverridePriceChangeOptionEnumUseLatestProductCatalogPricing UsageTieredWithOveragePricingOverridePriceChangeOptionEnum = "UseLatestProductCatalogPricing"
)

// UsageTieredWithOveragePricingOverride
// Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
type UsageTieredWithOveragePricingOverride struct {
	NumberOfPeriods                *int64                                                                   `json:"numberOfPeriods,omitempty"`
	OveragePrice                   *float64                                                                 `json:"overagePrice,omitempty"`
	OverageUnusedUnitsCreditOption *UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum `json:"overageUnusedUnitsCreditOption,omitempty"`
	PriceChangeOption              *UsageTieredWithOveragePricingOverridePriceChangeOptionEnum              `json:"priceChangeOption,omitempty"`
	PriceIncreasePercentage        *float64                                                                 `json:"priceIncreasePercentage,omitempty"`
	Tiers                          []ChargeTier                                                             `json:"tiers,omitempty"`
	UnusedUnitsCreditRates         *float64                                                                 `json:"unusedUnitsCreditRates,omitempty"`
}
