package shared

import (
	"time"
)

type GetRefundItemPartTypewithSuccess struct {
	Amount           *float64   `json:"amount,omitempty"`
	CreatedByID      *string    `json:"createdById,omitempty"`
	CreatedDate      *time.Time `json:"createdDate,omitempty"`
	CreditMemoItemID *string    `json:"creditMemoItemId,omitempty"`
	CreditTaxItemID  *string    `json:"creditTaxItemId,omitempty"`
	ID               *string    `json:"id,omitempty"`
	UpdatedByID      *string    `json:"updatedById,omitempty"`
	UpdatedDate      *time.Time `json:"updatedDate,omitempty"`
}
