package shared

import (
	"time"
)

type RatePlanChargeDataInRatePlanDataRatePlanCharge struct {
	AccountingCode                    *string    `json:"AccountingCode,omitempty"`
	ApplyDiscountTo                   *string    `json:"ApplyDiscountTo,omitempty"`
	BillCycleDay                      *int32     `json:"BillCycleDay,omitempty"`
	BillCycleType                     *string    `json:"BillCycleType,omitempty"`
	BillingPeriod                     *string    `json:"BillingPeriod,omitempty"`
	BillingPeriodAlignment            *string    `json:"BillingPeriodAlignment,omitempty"`
	BillingTiming                     *string    `json:"BillingTiming,omitempty"`
	ChargeModel                       *string    `json:"ChargeModel,omitempty"`
	ChargeNumber                      *string    `json:"ChargeNumber,omitempty"`
	ChargeType                        *string    `json:"ChargeType,omitempty"`
	ChargedThroughDate                *time.Time `json:"ChargedThroughDate,omitempty"`
	CreatedByID                       *string    `json:"CreatedById,omitempty"`
	CreatedDate                       *time.Time `json:"CreatedDate,omitempty"`
	DMRC                              *float64   `json:"DMRC,omitempty"`
	DTCV                              *float64   `json:"DTCV,omitempty"`
	Description                       *string    `json:"Description,omitempty"`
	DiscountAmount                    *float64   `json:"DiscountAmount,omitempty"`
	DiscountLevel                     *string    `json:"DiscountLevel,omitempty"`
	DiscountPercentage                *float64   `json:"DiscountPercentage,omitempty"`
	EffectiveEndDate                  *time.Time `json:"EffectiveEndDate,omitempty"`
	EffectiveStartDate                *time.Time `json:"EffectiveStartDate,omitempty"`
	EndDateCondition                  *string    `json:"EndDateCondition,omitempty"`
	IncludedUnits                     *float64   `json:"IncludedUnits,omitempty"`
	IsLastSegment                     *bool      `json:"IsLastSegment,omitempty"`
	ListPriceBase                     *string    `json:"ListPriceBase,omitempty"`
	MRR                               *float64   `json:"MRR,omitempty"`
	Name                              *string    `json:"Name,omitempty"`
	NumberOfPeriods                   *int64     `json:"NumberOfPeriods,omitempty"`
	OriginalID                        *string    `json:"OriginalId,omitempty"`
	OverageCalculationOption          *string    `json:"OverageCalculationOption,omitempty"`
	OveragePrice                      *float64   `json:"OveragePrice,omitempty"`
	OverageUnusedUnitsCreditOption    *string    `json:"OverageUnusedUnitsCreditOption,omitempty"`
	Price                             *float64   `json:"Price,omitempty"`
	PriceChangeOption                 *string    `json:"PriceChangeOption,omitempty"`
	PriceIncreasePercentage           *float64   `json:"PriceIncreasePercentage,omitempty"`
	ProcessedThroughDate              *time.Time `json:"ProcessedThroughDate,omitempty"`
	ProductRatePlanChargeID           string     `json:"ProductRatePlanChargeId"`
	Quantity                          *float64   `json:"Quantity,omitempty"`
	RatePlanID                        *string    `json:"RatePlanId,omitempty"`
	RevRecCode                        *string    `json:"RevRecCode,omitempty"`
	RevRecTriggerCondition            *string    `json:"RevRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName        *string    `json:"RevenueRecognitionRuleName,omitempty"`
	RolloverBalance                   *float64   `json:"RolloverBalance,omitempty"`
	Segment                           *int32     `json:"Segment,omitempty"`
	SpecificBillingPeriod             *int64     `json:"SpecificBillingPeriod,omitempty"`
	SpecificEndDate                   *time.Time `json:"SpecificEndDate,omitempty"`
	TCV                               *float64   `json:"TCV,omitempty"`
	TriggerDate                       *time.Time `json:"TriggerDate,omitempty"`
	TriggerEvent                      *string    `json:"TriggerEvent,omitempty"`
	UOM                               *string    `json:"UOM,omitempty"`
	UnusedUnitsCreditRates            *float64   `json:"UnusedUnitsCreditRates,omitempty"`
	UpToPeriods                       *int64     `json:"UpToPeriods,omitempty"`
	UpToPeriodsType                   *string    `json:"UpToPeriodsType,omitempty"`
	UpdatedByID                       *string    `json:"UpdatedById,omitempty"`
	UpdatedDate                       *time.Time `json:"UpdatedDate,omitempty"`
	UsageRecordRatingOption           *string    `json:"UsageRecordRatingOption,omitempty"`
	UseDiscountSpecificAccountingCode *bool      `json:"UseDiscountSpecificAccountingCode,omitempty"`
	Version                           *int64     `json:"Version,omitempty"`
	WeeklyBillCycleDay                *string    `json:"WeeklyBillCycleDay,omitempty"`
}

type RatePlanChargeDataInRatePlanData struct {
	RatePlanCharge     RatePlanChargeDataInRatePlanDataRatePlanCharge `json:"RatePlanCharge"`
	RatePlanChargeTier []RatePlanChargeTier                           `json:"RatePlanChargeTier,omitempty"`
}
