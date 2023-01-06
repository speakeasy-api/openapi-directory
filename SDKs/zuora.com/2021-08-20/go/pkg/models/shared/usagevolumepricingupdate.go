package shared

type UsageVolumePricingUpdate struct {
	Tiers []ChargeTier `json:"tiers,omitempty"`
}
