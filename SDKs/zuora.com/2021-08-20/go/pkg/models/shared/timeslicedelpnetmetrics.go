package shared

import (
	"time"
)

type TimeSlicedElpNetMetricsGeneratedReasonEnum string

const (
	TimeSlicedElpNetMetricsGeneratedReasonEnumIncreaseQuantity TimeSlicedElpNetMetricsGeneratedReasonEnum = "IncreaseQuantity"
	TimeSlicedElpNetMetricsGeneratedReasonEnumDecreaseQuantity TimeSlicedElpNetMetricsGeneratedReasonEnum = "DecreaseQuantity"
	TimeSlicedElpNetMetricsGeneratedReasonEnumChangePrice      TimeSlicedElpNetMetricsGeneratedReasonEnum = "ChangePrice"
	TimeSlicedElpNetMetricsGeneratedReasonEnumExtension        TimeSlicedElpNetMetricsGeneratedReasonEnum = "Extension"
	TimeSlicedElpNetMetricsGeneratedReasonEnumContraction      TimeSlicedElpNetMetricsGeneratedReasonEnum = "Contraction"
)

type TimeSlicedElpNetMetricsTypeEnum string

const (
	TimeSlicedElpNetMetricsTypeEnumRegular  TimeSlicedElpNetMetricsTypeEnum = "Regular"
	TimeSlicedElpNetMetricsTypeEnumDiscount TimeSlicedElpNetMetricsTypeEnum = "Discount"
)

type TimeSlicedElpNetMetrics struct {
	Amount            *float64                                    `json:"amount,omitempty"`
	EndDate           *time.Time                                  `json:"endDate,omitempty"`
	GeneratedReason   *TimeSlicedElpNetMetricsGeneratedReasonEnum `json:"generatedReason,omitempty"`
	InvoiceOwner      *string                                     `json:"invoiceOwner,omitempty"`
	OrderItemID       *string                                     `json:"orderItemId,omitempty"`
	StartDate         *time.Time                                  `json:"startDate,omitempty"`
	SubscriptionOwner *string                                     `json:"subscriptionOwner,omitempty"`
	Tax               *float64                                    `json:"tax,omitempty"`
	TermNumber        *float64                                    `json:"termNumber,omitempty"`
	Type              *TimeSlicedElpNetMetricsTypeEnum            `json:"type,omitempty"`
}
