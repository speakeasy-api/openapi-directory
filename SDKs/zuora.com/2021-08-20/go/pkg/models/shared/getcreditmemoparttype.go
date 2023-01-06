package shared

import (
	"time"
)

type GetCreditMemoPartType struct {
	Amount      *float64   `json:"amount,omitempty"`
	CreatedByID *string    `json:"createdById,omitempty"`
	CreatedDate *time.Time `json:"createdDate,omitempty"`
	DebitMemoID *string    `json:"debitMemoId,omitempty"`
	ID          *string    `json:"id,omitempty"`
	InvoiceID   *string    `json:"invoiceId,omitempty"`
	Success     *bool      `json:"success,omitempty"`
	UpdatedByID *string    `json:"updatedById,omitempty"`
	UpdatedDate *time.Time `json:"updatedDate,omitempty"`
}
