package shared

import (
	"time"
)

type RampIntervalChargeMetricsMrr struct {
	Discount  *float64   `json:"discount,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
	Gross     *float64   `json:"gross,omitempty"`
	Net       *float64   `json:"net,omitempty"`
	StartDate *time.Time `json:"startDate,omitempty"`
}

type RampIntervalChargeMetrics struct {
	ChargeNumber            *string                        `json:"chargeNumber,omitempty"`
	DiscountTcb             *float64                       `json:"discountTcb,omitempty"`
	DiscountTcv             *float64                       `json:"discountTcv,omitempty"`
	EndDate                 *time.Time                     `json:"endDate,omitempty"`
	GrossTcb                *float64                       `json:"grossTcb,omitempty"`
	GrossTcv                *float64                       `json:"grossTcv,omitempty"`
	Mrr                     []RampIntervalChargeMetricsMrr `json:"mrr,omitempty"`
	NetTcb                  *float64                       `json:"netTcb,omitempty"`
	NetTcv                  *float64                       `json:"netTcv,omitempty"`
	ProductRatePlanChargeID *string                        `json:"productRatePlanChargeId,omitempty"`
	Quantity                *float64                       `json:"quantity,omitempty"`
	RatePlanChargeID        *string                        `json:"ratePlanChargeId,omitempty"`
	StartDate               *time.Time                     `json:"startDate,omitempty"`
	SubscriptionNumber      *string                        `json:"subscriptionNumber,omitempty"`
}
