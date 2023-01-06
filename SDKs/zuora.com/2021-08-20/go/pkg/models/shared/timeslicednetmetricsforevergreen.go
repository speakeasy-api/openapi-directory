package shared

import (
	"time"
)

type TimeSlicedNetMetricsForEvergreenTypeEnum string

const (
	TimeSlicedNetMetricsForEvergreenTypeEnumRegular  TimeSlicedNetMetricsForEvergreenTypeEnum = "Regular"
	TimeSlicedNetMetricsForEvergreenTypeEnumDiscount TimeSlicedNetMetricsForEvergreenTypeEnum = "Discount"
)

type TimeSlicedNetMetricsForEvergreen struct {
	Amount               *float64                                  `json:"amount,omitempty"`
	DiscountChargeNumber *string                                   `json:"discountChargeNumber,omitempty"`
	EndDate              *time.Time                                `json:"endDate,omitempty"`
	InvoiceOwner         *string                                   `json:"invoiceOwner,omitempty"`
	StartDate            *time.Time                                `json:"startDate,omitempty"`
	SubscriptionOwner    *string                                   `json:"subscriptionOwner,omitempty"`
	TermNumber           *float64                                  `json:"termNumber,omitempty"`
	Type                 *TimeSlicedNetMetricsForEvergreenTypeEnum `json:"type,omitempty"`
}
