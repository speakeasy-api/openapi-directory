package shared

import (
	"time"
)

type ProxyGetRatePlanChargeTier struct {
	CreatedByID      *string    `json:"CreatedById,omitempty"`
	CreatedDate      *time.Time `json:"CreatedDate,omitempty"`
	EndingUnit       *float64   `json:"EndingUnit,omitempty"`
	ID               *string    `json:"Id,omitempty"`
	Price            *float64   `json:"Price,omitempty"`
	PriceFormat      *string    `json:"PriceFormat,omitempty"`
	RatePlanChargeID *string    `json:"RatePlanChargeId,omitempty"`
	StartingUnit     *float64   `json:"StartingUnit,omitempty"`
	Tier             *int32     `json:"Tier,omitempty"`
	UpdatedByID      *string    `json:"UpdatedById,omitempty"`
	UpdatedDate      *time.Time `json:"UpdatedDate,omitempty"`
}
