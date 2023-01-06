package shared

type UsageOveragePricingUpdate struct {
	IncludedUnits *float64 `json:"includedUnits,omitempty"`
	OveragePrice  *float64 `json:"overagePrice,omitempty"`
}
