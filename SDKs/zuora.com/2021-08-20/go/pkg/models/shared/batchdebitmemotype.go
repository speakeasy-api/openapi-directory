package shared

import (
	"time"
)

type BatchDebitMemoType struct {
	DueDate *time.Time `json:"dueDate,omitempty"`
	ID      *string    `json:"id,omitempty"`
}
