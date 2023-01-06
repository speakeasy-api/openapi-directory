package shared

type ChargePreviewMetricsCmrr struct {
	Discount      *float64 `json:"discount,omitempty"`
	DiscountDelta *float64 `json:"discountDelta,omitempty"`
	Regular       *float64 `json:"regular,omitempty"`
	RegularDelta  *float64 `json:"regularDelta,omitempty"`
}

type ChargePreviewMetricsTax struct {
	Discount      *float64 `json:"discount,omitempty"`
	DiscountDelta *float64 `json:"discountDelta,omitempty"`
	Regular       *float64 `json:"regular,omitempty"`
	RegularDelta  *float64 `json:"regularDelta,omitempty"`
}

type ChargePreviewMetricsTcb struct {
	Discount      *float64 `json:"discount,omitempty"`
	DiscountDelta *float64 `json:"discountDelta,omitempty"`
	Regular       *float64 `json:"regular,omitempty"`
	RegularDelta  *float64 `json:"regularDelta,omitempty"`
}

type ChargePreviewMetricsTcv struct {
	Discount      *float64 `json:"discount,omitempty"`
	DiscountDelta *float64 `json:"discountDelta,omitempty"`
	Regular       *float64 `json:"regular,omitempty"`
	RegularDelta  *float64 `json:"regularDelta,omitempty"`
}

type ChargePreviewMetrics struct {
	ChargeNumber            *string                   `json:"chargeNumber,omitempty"`
	Cmrr                    *ChargePreviewMetricsCmrr `json:"cmrr,omitempty"`
	OriginRatePlanID        *string                   `json:"originRatePlanId,omitempty"`
	ProductRatePlanChargeID *string                   `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID       *string                   `json:"productRatePlanId,omitempty"`
	Tax                     *ChargePreviewMetricsTax  `json:"tax,omitempty"`
	Tcb                     *ChargePreviewMetricsTcb  `json:"tcb,omitempty"`
	Tcv                     *ChargePreviewMetricsTcv  `json:"tcv,omitempty"`
}
