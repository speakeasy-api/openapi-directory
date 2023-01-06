package shared

import (
	"time"
)

type GetAccountSummaryInvoiceType struct {
	Amount        *float64   `json:"amount,omitempty"`
	Balance       *string    `json:"balance,omitempty"`
	DueDate       *time.Time `json:"dueDate,omitempty"`
	ID            *string    `json:"id,omitempty"`
	InvoiceDate   *time.Time `json:"invoiceDate,omitempty"`
	InvoiceNumber *string    `json:"invoiceNumber,omitempty"`
	Status        *string    `json:"status,omitempty"`
}
