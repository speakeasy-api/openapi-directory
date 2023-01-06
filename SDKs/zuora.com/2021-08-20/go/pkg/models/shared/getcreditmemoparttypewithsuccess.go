package shared

import (
	"time"
)

type GetCreditMemoPartTypewithSuccess struct {
	Amount      *float64   `json:"amount,omitempty"`
	CreatedByID *string    `json:"createdById,omitempty"`
	CreatedDate *time.Time `json:"createdDate,omitempty"`
	DebitMemoID *string    `json:"debitMemoId,omitempty"`
	ID          *string    `json:"id,omitempty"`
	InvoiceID   *string    `json:"invoiceId,omitempty"`
	UpdatedByID *string    `json:"updatedById,omitempty"`
	UpdatedDate *time.Time `json:"updatedDate,omitempty"`
}
