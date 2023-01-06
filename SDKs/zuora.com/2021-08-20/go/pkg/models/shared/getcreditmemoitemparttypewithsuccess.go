package shared

import (
	"time"
)

type GetCreditMemoItemPartTypewithSuccess struct {
	Amount           *float64   `json:"amount,omitempty"`
	CreatedByID      *string    `json:"createdById,omitempty"`
	CreatedDate      *time.Time `json:"createdDate,omitempty"`
	CreditMemoItemID *string    `json:"creditMemoItemId,omitempty"`
	CreditTaxItemID  *string    `json:"creditTaxItemId,omitempty"`
	DebitMemoItemID  *string    `json:"debitMemoItemId,omitempty"`
	ID               *string    `json:"id,omitempty"`
	InvoiceItemID    *string    `json:"invoiceItemId,omitempty"`
	TaxItemID        *string    `json:"taxItemId,omitempty"`
	UpdatedByID      *string    `json:"updatedById,omitempty"`
	UpdatedDate      *time.Time `json:"updatedDate,omitempty"`
}
