package shared

type UsageTieredWithOveragePricingUpdate struct {
	OveragePrice *float64     `json:"overagePrice,omitempty"`
	Tiers        []ChargeTier `json:"tiers,omitempty"`
}
