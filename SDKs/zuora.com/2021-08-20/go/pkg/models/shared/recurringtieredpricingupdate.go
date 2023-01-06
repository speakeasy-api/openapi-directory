package shared

type RecurringTieredPricingUpdate struct {
	Quantity *float64     `json:"quantity,omitempty"`
	Tiers    []ChargeTier `json:"tiers,omitempty"`
}
