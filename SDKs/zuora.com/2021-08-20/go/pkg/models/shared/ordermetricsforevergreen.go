package shared

type OrderMetricsForEvergreen struct {
	ChargeNumber            *string                               `json:"chargeNumber,omitempty"`
	Mrr                     []TimeSlicedNetMetricsForEvergreen    `json:"mrr,omitempty"`
	OriginRatePlanID        *string                               `json:"originRatePlanId,omitempty"`
	ProductRatePlanChargeID *string                               `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID       *string                               `json:"productRatePlanId,omitempty"`
	Quantity                []TimeSlicedMetricsForEvergreen       `json:"quantity,omitempty"`
	Tcb                     []TimeSlicedTcbNetMetricsForEvergreen `json:"tcb,omitempty"`
	Tcv                     []TimeSlicedNetMetricsForEvergreen    `json:"tcv,omitempty"`
}
