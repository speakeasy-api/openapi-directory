package shared

import (
	"time"
)

type TimeSlicedMetricsGeneratedReasonEnum string

const (
	TimeSlicedMetricsGeneratedReasonEnumIncreaseQuantity TimeSlicedMetricsGeneratedReasonEnum = "IncreaseQuantity"
	TimeSlicedMetricsGeneratedReasonEnumDecreaseQuantity TimeSlicedMetricsGeneratedReasonEnum = "DecreaseQuantity"
	TimeSlicedMetricsGeneratedReasonEnumChangePrice      TimeSlicedMetricsGeneratedReasonEnum = "ChangePrice"
	TimeSlicedMetricsGeneratedReasonEnumExtension        TimeSlicedMetricsGeneratedReasonEnum = "Extension"
	TimeSlicedMetricsGeneratedReasonEnumContraction      TimeSlicedMetricsGeneratedReasonEnum = "Contraction"
)

type TimeSlicedMetrics struct {
	Amount            *float64                              `json:"amount,omitempty"`
	EndDate           *time.Time                            `json:"endDate,omitempty"`
	GeneratedReason   *TimeSlicedMetricsGeneratedReasonEnum `json:"generatedReason,omitempty"`
	InvoiceOwner      *string                               `json:"invoiceOwner,omitempty"`
	OrderItemID       *string                               `json:"orderItemId,omitempty"`
	StartDate         *time.Time                            `json:"startDate,omitempty"`
	SubscriptionOwner *string                               `json:"subscriptionOwner,omitempty"`
	TermNumber        *float64                              `json:"termNumber,omitempty"`
}
