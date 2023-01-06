package shared

import (
	"time"
)

type ProxyGetInvoiceSplitItem struct {
	CreatedByID     *string    `json:"CreatedById,omitempty"`
	CreatedDate     *time.Time `json:"CreatedDate,omitempty"`
	ID              *string    `json:"Id,omitempty"`
	InvoiceDate     *time.Time `json:"InvoiceDate,omitempty"`
	InvoiceID       *string    `json:"InvoiceId,omitempty"`
	InvoiceSplitID  *string    `json:"InvoiceSplitId,omitempty"`
	PaymentTerm     *string    `json:"PaymentTerm,omitempty"`
	SplitPercentage *float64   `json:"SplitPercentage,omitempty"`
	UpdatedByID     *string    `json:"UpdatedById,omitempty"`
	UpdatedDate     *time.Time `json:"UpdatedDate,omitempty"`
}
