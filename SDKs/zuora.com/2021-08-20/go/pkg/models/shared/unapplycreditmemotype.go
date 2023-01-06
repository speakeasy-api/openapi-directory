package shared

import (
	"time"
)

type UnapplyCreditMemoType struct {
	DebitMemos    []CreditMemoUnapplyDebitMemoRequestType `json:"debitMemos,omitempty"`
	EffectiveDate *time.Time                              `json:"effectiveDate,omitempty"`
	Invoices      []CreditMemoUnapplyInvoiceRequestType   `json:"invoices,omitempty"`
}
