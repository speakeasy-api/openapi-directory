package shared

type RecurringVolumePricingUpdate struct {
	Quantity *float64     `json:"quantity,omitempty"`
	Tiers    []ChargeTier `json:"tiers,omitempty"`
}
