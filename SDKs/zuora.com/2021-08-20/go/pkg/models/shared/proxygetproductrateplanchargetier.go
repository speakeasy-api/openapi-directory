package shared

import (
	"time"
)

type ProxyGetProductRatePlanChargeTier struct {
	CreatedByID  *string    `json:"CreatedById,omitempty"`
	CreatedDate  *time.Time `json:"CreatedDate,omitempty"`
	Currency     *string    `json:"Currency,omitempty"`
	EndingUnit   *float64   `json:"EndingUnit,omitempty"`
	ID           *string    `json:"Id,omitempty"`
	Price        *float64   `json:"Price,omitempty"`
	PriceFormat  *string    `json:"PriceFormat,omitempty"`
	StartingUnit *float64   `json:"StartingUnit,omitempty"`
	Tier         *int32     `json:"Tier,omitempty"`
	UpdatedByID  *string    `json:"UpdatedById,omitempty"`
	UpdatedDate  *time.Time `json:"UpdatedDate,omitempty"`
}
