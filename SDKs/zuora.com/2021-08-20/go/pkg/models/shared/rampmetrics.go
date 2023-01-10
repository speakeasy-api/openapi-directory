package shared

type RampMetrics struct {
	Description *string               `json:"description,omitempty"`
	DiscountTcb *float64              `json:"discountTcb,omitempty"`
	DiscountTcv *float64              `json:"discountTcv,omitempty"`
	GrossTcb    *float64              `json:"grossTcb,omitempty"`
	GrossTcv    *float64              `json:"grossTcv,omitempty"`
	Intervals   []RampIntervalMetrics `json:"intervals,omitempty"`
	Name        *string               `json:"name,omitempty"`
	NetTcb      *float64              `json:"netTcb,omitempty"`
	NetTcv      *float64              `json:"netTcv,omitempty"`
	Number      *string               `json:"number,omitempty"`
}
