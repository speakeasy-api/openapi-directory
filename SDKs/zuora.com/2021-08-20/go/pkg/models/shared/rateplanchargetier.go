package shared

import (
	"time"
)

type RatePlanChargeTierPriceFormatEnum string

const (
	RatePlanChargeTierPriceFormatEnumFlatFee RatePlanChargeTierPriceFormatEnum = "FlatFee"
	RatePlanChargeTierPriceFormatEnumPerUnit RatePlanChargeTierPriceFormatEnum = "PerUnit"
)

type RatePlanChargeTier struct {
	CreatedByID      *string                            `json:"CreatedById,omitempty"`
	CreatedDate      *time.Time                         `json:"CreatedDate,omitempty"`
	EndingUnit       *float64                           `json:"EndingUnit,omitempty"`
	IsOveragePrice   *bool                              `json:"IsOveragePrice,omitempty"`
	Price            *float64                           `json:"Price,omitempty"`
	PriceFormat      *RatePlanChargeTierPriceFormatEnum `json:"PriceFormat,omitempty"`
	RatePlanChargeID string                             `json:"RatePlanChargeId"`
	StartingUnit     *float64                           `json:"StartingUnit,omitempty"`
	Tier             *int32                             `json:"Tier,omitempty"`
	UpdatedByID      *string                            `json:"UpdatedById,omitempty"`
	UpdatedDate      *time.Time                         `json:"UpdatedDate,omitempty"`
}
