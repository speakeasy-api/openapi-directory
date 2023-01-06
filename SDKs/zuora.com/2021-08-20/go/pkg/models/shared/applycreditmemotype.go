package shared

import (
	"time"
)

type ApplyCreditMemoType struct {
	DebitMemos    []CreditMemoApplyDebitMemoRequestType `json:"debitMemos,omitempty"`
	EffectiveDate *time.Time                            `json:"effectiveDate,omitempty"`
	Invoices      []CreditMemoApplyInvoiceRequestType   `json:"invoices,omitempty"`
}
