package shared

type RatePlanChargeData struct {
	RatePlanCharge     map[string]interface{} `json:"RatePlanCharge"`
	RatePlanChargeTier []RatePlanChargeTier   `json:"RatePlanChargeTier,omitempty"`
}
