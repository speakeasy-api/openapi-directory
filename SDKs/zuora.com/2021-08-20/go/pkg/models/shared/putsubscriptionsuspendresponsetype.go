package shared

import (
	"time"
)

type PutSubscriptionSuspendResponseType struct {
	CreditMemoID   *string    `json:"creditMemoId,omitempty"`
	InvoiceID      *string    `json:"invoiceId,omitempty"`
	PaidAmount     *float64   `json:"paidAmount,omitempty"`
	PaymentID      *string    `json:"paymentId,omitempty"`
	ResumeDate     *time.Time `json:"resumeDate,omitempty"`
	SubscriptionID *string    `json:"subscriptionId,omitempty"`
	Success        *bool      `json:"success,omitempty"`
	SuspendDate    *time.Time `json:"suspendDate,omitempty"`
	TermEndDate    *time.Time `json:"termEndDate,omitempty"`
	TotalDeltaTcv  *float64   `json:"totalDeltaTcv,omitempty"`
}
