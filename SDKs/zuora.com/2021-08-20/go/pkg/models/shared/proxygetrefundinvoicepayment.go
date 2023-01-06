package shared

import (
	"time"
)

type ProxyGetRefundInvoicePayment struct {
	CreatedByID      *string    `json:"CreatedById,omitempty"`
	CreatedDate      *time.Time `json:"CreatedDate,omitempty"`
	ID               *string    `json:"Id,omitempty"`
	InvoiceID        *string    `json:"InvoiceId,omitempty"`
	InvoicePaymentID *string    `json:"InvoicePaymentId,omitempty"`
	RefundAmount     *float64   `json:"RefundAmount,omitempty"`
	RefundID         *string    `json:"RefundId,omitempty"`
	UpdatedByID      *string    `json:"UpdatedById,omitempty"`
	UpdatedDate      *time.Time `json:"UpdatedDate,omitempty"`
}
