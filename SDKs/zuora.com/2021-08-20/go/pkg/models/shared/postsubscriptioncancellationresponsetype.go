package shared

import (
	"time"
)

type PostSubscriptionCancellationResponseType struct {
	CancelledDate  *time.Time `json:"cancelledDate,omitempty"`
	CreditMemoID   *string    `json:"creditMemoId,omitempty"`
	InvoiceID      *string    `json:"invoiceId,omitempty"`
	PaidAmount     *float64   `json:"paidAmount,omitempty"`
	PaymentID      *string    `json:"paymentId,omitempty"`
	SubscriptionID *string    `json:"subscriptionId,omitempty"`
	Success        *bool      `json:"success,omitempty"`
	TotalDeltaMrr  *float64   `json:"totalDeltaMrr,omitempty"`
	TotalDeltaTcv  *float64   `json:"totalDeltaTcv,omitempty"`
}
