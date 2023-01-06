package shared

import (
	"time"
)

type TimeSlicedTcbNetMetricsGeneratedReasonEnum string

const (
	TimeSlicedTcbNetMetricsGeneratedReasonEnumIncreaseQuantity TimeSlicedTcbNetMetricsGeneratedReasonEnum = "IncreaseQuantity"
	TimeSlicedTcbNetMetricsGeneratedReasonEnumDecreaseQuantity TimeSlicedTcbNetMetricsGeneratedReasonEnum = "DecreaseQuantity"
	TimeSlicedTcbNetMetricsGeneratedReasonEnumChangePrice      TimeSlicedTcbNetMetricsGeneratedReasonEnum = "ChangePrice"
	TimeSlicedTcbNetMetricsGeneratedReasonEnumExtension        TimeSlicedTcbNetMetricsGeneratedReasonEnum = "Extension"
	TimeSlicedTcbNetMetricsGeneratedReasonEnumContraction      TimeSlicedTcbNetMetricsGeneratedReasonEnum = "Contraction"
)

type TimeSlicedTcbNetMetricsTypeEnum string

const (
	TimeSlicedTcbNetMetricsTypeEnumRegular  TimeSlicedTcbNetMetricsTypeEnum = "Regular"
	TimeSlicedTcbNetMetricsTypeEnumDiscount TimeSlicedTcbNetMetricsTypeEnum = "Discount"
)

type TimeSlicedTcbNetMetrics struct {
	Amount               *float64                                    `json:"amount,omitempty"`
	DiscountChargeNumber *string                                     `json:"discountChargeNumber,omitempty"`
	EndDate              *time.Time                                  `json:"endDate,omitempty"`
	GeneratedReason      *TimeSlicedTcbNetMetricsGeneratedReasonEnum `json:"generatedReason,omitempty"`
	InvoiceOwner         *string                                     `json:"invoiceOwner,omitempty"`
	OrderItemID          *string                                     `json:"orderItemId,omitempty"`
	StartDate            *time.Time                                  `json:"startDate,omitempty"`
	SubscriptionOwner    *string                                     `json:"subscriptionOwner,omitempty"`
	Tax                  *float64                                    `json:"tax,omitempty"`
	TermNumber           *float64                                    `json:"termNumber,omitempty"`
	Type                 *TimeSlicedTcbNetMetricsTypeEnum            `json:"type,omitempty"`
}
