package shared

import (
	"time"
)

type ProxyGetInvoicePayment struct {
	Amount       *float64   `json:"Amount,omitempty"`
	CreatedByID  *string    `json:"CreatedById,omitempty"`
	CreatedDate  *time.Time `json:"CreatedDate,omitempty"`
	ID           *string    `json:"Id,omitempty"`
	InvoiceID    *string    `json:"InvoiceId,omitempty"`
	PaymentID    *string    `json:"PaymentId,omitempty"`
	RefundAmount *float64   `json:"RefundAmount,omitempty"`
	UpdatedByID  *string    `json:"UpdatedById,omitempty"`
	UpdatedDate  *time.Time `json:"UpdatedDate,omitempty"`
}
