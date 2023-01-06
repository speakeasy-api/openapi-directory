package shared

import (
	"time"
)

type PostInvoiceCollectType struct {
	AccountKey        string     `json:"accountKey"`
	DocumentDate      *time.Time `json:"documentDate,omitempty"`
	InvoiceDate       *time.Time `json:"invoiceDate,omitempty"`
	InvoiceID         *string    `json:"invoiceId,omitempty"`
	InvoiceTargetDate *time.Time `json:"invoiceTargetDate,omitempty"`
	PaymentGateway    *string    `json:"paymentGateway,omitempty"`
	TargetDate        *time.Time `json:"targetDate,omitempty"`
}
