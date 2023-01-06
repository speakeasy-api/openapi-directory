package shared

import (
	"time"
)

type PutRenewSubscriptionResponseType struct {
	CreditMemoID  *string    `json:"creditMemoId,omitempty"`
	InvoiceID     *string    `json:"invoiceId,omitempty"`
	PaidAmount    *float64   `json:"paidAmount,omitempty"`
	PaymentID     *string    `json:"paymentId,omitempty"`
	Success       *bool      `json:"success,omitempty"`
	TermEndDate   *time.Time `json:"termEndDate,omitempty"`
	TermStartDate *time.Time `json:"termStartDate,omitempty"`
	TotalDeltaMrr *float64   `json:"totalDeltaMrr,omitempty"`
	TotalDeltaTcv *float64   `json:"totalDeltaTcv,omitempty"`
}
