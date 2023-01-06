package shared

import (
	"time"
)

type GetDebitMemoApplicationPartType struct {
	AppliedAmount *float64   `json:"appliedAmount,omitempty"`
	CreatedByID   *string    `json:"createdById,omitempty"`
	CreatedDate   *time.Time `json:"createdDate,omitempty"`
	CreditMemoID  *string    `json:"creditMemoId,omitempty"`
	PaymentID     *string    `json:"paymentId,omitempty"`
	UpdatedByID   *string    `json:"updatedById,omitempty"`
	UpdatedDate   *time.Time `json:"updatedDate,omitempty"`
}
