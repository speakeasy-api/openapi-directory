package shared

import (
	"time"
)

type ApplyPaymentType struct {
	DebitMemos    []PaymentDebitMemoApplicationApplyRequestType `json:"debitMemos,omitempty"`
	EffectiveDate *time.Time                                    `json:"effectiveDate,omitempty"`
	Invoices      []PaymentInvoiceApplicationApplyRequestType   `json:"invoices,omitempty"`
}
