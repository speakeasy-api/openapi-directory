package shared

import (
	"time"
)

type UnapplyPaymentType struct {
	DebitMemos    []PaymentDebitMemoApplicationUnapplyRequestType `json:"debitMemos,omitempty"`
	EffectiveDate *time.Time                                      `json:"effectiveDate,omitempty"`
	Invoices      []PaymentInvoiceApplicationUnapplyRequestType   `json:"invoices,omitempty"`
}
