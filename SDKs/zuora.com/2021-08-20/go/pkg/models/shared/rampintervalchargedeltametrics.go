package shared

import (
	"time"
)

type RampIntervalChargeDeltaMetricsDeltaMrr struct {
	Discount  *float64   `json:"discount,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
	Gross     *float64   `json:"gross,omitempty"`
	Net       *float64   `json:"net,omitempty"`
	StartDate *time.Time `json:"startDate,omitempty"`
}

type RampIntervalChargeDeltaMetricsDeltaQuantity struct {
	Amount    *float64   `json:"amount,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
	StartDate *time.Time `json:"startDate,omitempty"`
}

type RampIntervalChargeDeltaMetrics struct {
	ChargeNumber            *string                                       `json:"chargeNumber,omitempty"`
	DeltaDiscountTcb        *float64                                      `json:"deltaDiscountTcb,omitempty"`
	DeltaDiscountTcv        *float64                                      `json:"deltaDiscountTcv,omitempty"`
	DeltaGrossTcb           *float64                                      `json:"deltaGrossTcb,omitempty"`
	DeltaGrossTcv           *float64                                      `json:"deltaGrossTcv,omitempty"`
	DeltaMrr                []RampIntervalChargeDeltaMetricsDeltaMrr      `json:"deltaMrr,omitempty"`
	DeltaNetTcb             *float64                                      `json:"deltaNetTcb,omitempty"`
	DeltaNetTcv             *float64                                      `json:"deltaNetTcv,omitempty"`
	DeltaQuantity           []RampIntervalChargeDeltaMetricsDeltaQuantity `json:"deltaQuantity,omitempty"`
	ProductRatePlanChargeID *string                                       `json:"productRatePlanChargeId,omitempty"`
	SubscriptionNumber      *string                                       `json:"subscriptionNumber,omitempty"`
}
