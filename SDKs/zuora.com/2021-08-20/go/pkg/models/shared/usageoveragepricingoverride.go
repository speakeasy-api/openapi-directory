package shared

type UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum string

const (
	UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnumNoCredit             UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = "NoCredit"
	UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnumCreditBySpecificRate UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = "CreditBySpecificRate"
)

// UsageOveragePricingOverride
// Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
type UsageOveragePricingOverride struct {
	IncludedUnits                  *float64                                                       `json:"includedUnits,omitempty"`
	NumberOfPeriods                *int64                                                         `json:"numberOfPeriods,omitempty"`
	OveragePrice                   *float64                                                       `json:"overagePrice,omitempty"`
	OverageUnusedUnitsCreditOption *UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum `json:"overageUnusedUnitsCreditOption,omitempty"`
	UnusedUnitsCreditRates         *float64                                                       `json:"unusedUnitsCreditRates,omitempty"`
}
