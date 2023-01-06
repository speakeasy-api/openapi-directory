package shared

type NewChargeMetrics struct {
	ChargeNumber            *string  `json:"ChargeNumber,omitempty"`
	DMRR                    *float64 `json:"DMRR,omitempty"`
	DTCV                    *float64 `json:"DTCV,omitempty"`
	MRR                     *float64 `json:"MRR,omitempty"`
	OriginalID              *string  `json:"OriginalId,omitempty"`
	OriginalRatePlanID      *string  `json:"OriginalRatePlanId,omitempty"`
	ProductRatePlanChargeID *string  `json:"ProductRatePlanChargeId,omitempty"`
	ProductRatePlanID       *string  `json:"ProductRatePlanId,omitempty"`
	TCV                     *float64 `json:"TCV,omitempty"`
}
