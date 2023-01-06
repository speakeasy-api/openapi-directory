package shared

import (
	"time"
)

type GetAccountSummaryPaymentType struct {
	EffectiveDate *time.Time                            `json:"effectiveDate,omitempty"`
	ID            *string                               `json:"id,omitempty"`
	PaidInvoices  []GetAccountSummaryPaymentInvoiceType `json:"paidInvoices,omitempty"`
	PaymentNumber *string                               `json:"paymentNumber,omitempty"`
	PaymentType   *string                               `json:"paymentType,omitempty"`
	Status        *string                               `json:"status,omitempty"`
}
