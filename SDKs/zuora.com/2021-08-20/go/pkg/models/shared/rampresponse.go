package shared

type RampResponse struct {
	Charges            []RampChargeResponse   `json:"charges,omitempty"`
	Description        *string                `json:"description,omitempty"`
	ID                 *string                `json:"id,omitempty"`
	Intervals          []RampIntervalResponse `json:"intervals,omitempty"`
	Name               *string                `json:"name,omitempty"`
	Number             *string                `json:"number,omitempty"`
	SubscriptionNumber *string                `json:"subscriptionNumber,omitempty"`
}
