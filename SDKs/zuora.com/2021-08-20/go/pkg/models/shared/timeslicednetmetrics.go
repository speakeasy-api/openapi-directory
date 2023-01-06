package shared

import (
	"time"
)

type TimeSlicedNetMetricsGeneratedReasonEnum string

const (
	TimeSlicedNetMetricsGeneratedReasonEnumIncreaseQuantity TimeSlicedNetMetricsGeneratedReasonEnum = "IncreaseQuantity"
	TimeSlicedNetMetricsGeneratedReasonEnumDecreaseQuantity TimeSlicedNetMetricsGeneratedReasonEnum = "DecreaseQuantity"
	TimeSlicedNetMetricsGeneratedReasonEnumChangePrice      TimeSlicedNetMetricsGeneratedReasonEnum = "ChangePrice"
	TimeSlicedNetMetricsGeneratedReasonEnumExtension        TimeSlicedNetMetricsGeneratedReasonEnum = "Extension"
	TimeSlicedNetMetricsGeneratedReasonEnumContraction      TimeSlicedNetMetricsGeneratedReasonEnum = "Contraction"
)

type TimeSlicedNetMetricsTypeEnum string

const (
	TimeSlicedNetMetricsTypeEnumRegular  TimeSlicedNetMetricsTypeEnum = "Regular"
	TimeSlicedNetMetricsTypeEnumDiscount TimeSlicedNetMetricsTypeEnum = "Discount"
)

type TimeSlicedNetMetrics struct {
	Amount               *float64                                 `json:"amount,omitempty"`
	DiscountChargeNumber *string                                  `json:"discountChargeNumber,omitempty"`
	EndDate              *time.Time                               `json:"endDate,omitempty"`
	GeneratedReason      *TimeSlicedNetMetricsGeneratedReasonEnum `json:"generatedReason,omitempty"`
	InvoiceOwner         *string                                  `json:"invoiceOwner,omitempty"`
	OrderItemID          *string                                  `json:"orderItemId,omitempty"`
	StartDate            *time.Time                               `json:"startDate,omitempty"`
	SubscriptionOwner    *string                                  `json:"subscriptionOwner,omitempty"`
	TermNumber           *float64                                 `json:"termNumber,omitempty"`
	Type                 *TimeSlicedNetMetricsTypeEnum            `json:"type,omitempty"`
}
