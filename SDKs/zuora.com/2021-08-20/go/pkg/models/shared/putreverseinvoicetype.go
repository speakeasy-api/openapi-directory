package shared

import (
	"time"
)

type PutReverseInvoiceType struct {
	ApplyEffectiveDate *time.Time `json:"applyEffectiveDate,omitempty"`
	MemoDate           *time.Time `json:"memoDate,omitempty"`
}
