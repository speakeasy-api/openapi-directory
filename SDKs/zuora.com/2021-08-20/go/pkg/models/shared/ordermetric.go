package shared

// OrderMetric
// The set of order metrics for an order action.
type OrderMetric struct {
	ChargeNumber            *string                   `json:"chargeNumber,omitempty"`
	Elp                     []TimeSlicedElpNetMetrics `json:"elp,omitempty"`
	Mrr                     []TimeSlicedNetMetrics    `json:"mrr,omitempty"`
	OriginRatePlanID        *string                   `json:"originRatePlanId,omitempty"`
	ProductRatePlanChargeID *string                   `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID       *string                   `json:"productRatePlanId,omitempty"`
	Quantity                []TimeSlicedMetrics       `json:"quantity,omitempty"`
	Tcb                     []TimeSlicedTcbNetMetrics `json:"tcb,omitempty"`
	Tcv                     []TimeSlicedNetMetrics    `json:"tcv,omitempty"`
}
