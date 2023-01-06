package shared

type UsageTieredPricingUpdate struct {
	Tiers []ChargeTier `json:"tiers,omitempty"`
}
