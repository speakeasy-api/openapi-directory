package shared

import (
	"time"
)

type ProxyGetInvoiceSplit struct {
	CreatedByID *string    `json:"CreatedById,omitempty"`
	CreatedDate *time.Time `json:"CreatedDate,omitempty"`
	ID          *string    `json:"Id,omitempty"`
	InvoiceID   *string    `json:"InvoiceId,omitempty"`
	UpdatedByID *string    `json:"UpdatedById,omitempty"`
	UpdatedDate *time.Time `json:"UpdatedDate,omitempty"`
}
