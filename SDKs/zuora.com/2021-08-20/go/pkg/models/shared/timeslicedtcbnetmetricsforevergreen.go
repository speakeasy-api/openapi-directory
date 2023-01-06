package shared

import (
	"time"
)

type TimeSlicedTcbNetMetricsForEvergreenTypeEnum string

const (
	TimeSlicedTcbNetMetricsForEvergreenTypeEnumRegular  TimeSlicedTcbNetMetricsForEvergreenTypeEnum = "Regular"
	TimeSlicedTcbNetMetricsForEvergreenTypeEnumDiscount TimeSlicedTcbNetMetricsForEvergreenTypeEnum = "Discount"
)

type TimeSlicedTcbNetMetricsForEvergreen struct {
	Amount               *float64                                     `json:"amount,omitempty"`
	DiscountChargeNumber *string                                      `json:"discountChargeNumber,omitempty"`
	EndDate              *time.Time                                   `json:"endDate,omitempty"`
	InvoiceOwner         *string                                      `json:"invoiceOwner,omitempty"`
	StartDate            *time.Time                                   `json:"startDate,omitempty"`
	SubscriptionOwner    *string                                      `json:"subscriptionOwner,omitempty"`
	Tax                  *float64                                     `json:"tax,omitempty"`
	TermNumber           *float64                                     `json:"termNumber,omitempty"`
	Type                 *TimeSlicedTcbNetMetricsForEvergreenTypeEnum `json:"type,omitempty"`
}
