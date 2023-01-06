package shared

import (
	"time"
)

type RefundPartResponseTypewithSuccess struct {
	Amount       *float64   `json:"amount,omitempty"`
	CreatedByID  *string    `json:"createdById,omitempty"`
	CreatedDate  *time.Time `json:"createdDate,omitempty"`
	CreditMemoID *string    `json:"creditMemoId,omitempty"`
	ID           *string    `json:"id,omitempty"`
	PaymentID    *string    `json:"paymentId,omitempty"`
	UpdatedByID  *string    `json:"updatedById,omitempty"`
	UpdatedDate  *time.Time `json:"updatedDate,omitempty"`
}
