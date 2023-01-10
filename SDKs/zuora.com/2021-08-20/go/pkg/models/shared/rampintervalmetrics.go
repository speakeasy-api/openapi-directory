package shared

import (
	"time"
)

type RampIntervalMetrics struct {
	Description     *string                     `json:"description,omitempty"`
	DiscountTcb     *float64                    `json:"discountTcb,omitempty"`
	DiscountTcv     *float64                    `json:"discountTcv,omitempty"`
	EndDate         *time.Time                  `json:"endDate,omitempty"`
	GrossTcb        *float64                    `json:"grossTcb,omitempty"`
	GrossTcv        *float64                    `json:"grossTcv,omitempty"`
	IntervalMetrics []RampIntervalChargeMetrics `json:"intervalMetrics,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	NetTcb          *float64                    `json:"netTcb,omitempty"`
	NetTcv          *float64                    `json:"netTcv,omitempty"`
	StartDate       *time.Time                  `json:"startDate,omitempty"`
}
