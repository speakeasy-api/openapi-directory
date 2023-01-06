package shared

type RatePlanDataSubscriptionProductFeatureList struct {
	SubscriptionProductFeature []map[string]interface{} `json:"SubscriptionProductFeature,omitempty"`
}

type RatePlanData struct {
	RatePlan                       map[string]interface{}                      `json:"RatePlan"`
	RatePlanChargeData             []RatePlanChargeData                        `json:"RatePlanChargeData,omitempty"`
	SubscriptionProductFeatureList *RatePlanDataSubscriptionProductFeatureList `json:"SubscriptionProductFeatureList,omitempty"`
}
