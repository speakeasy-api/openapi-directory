package shared

import (
	"time"
)

type PostJournalRunType struct {
	AccountingPeriodName *string                         `json:"accountingPeriodName,omitempty"`
	JournalEntryDate     time.Time                       `json:"journalEntryDate"`
	TargetEndDate        *time.Time                      `json:"targetEndDate,omitempty"`
	TargetStartDate      *time.Time                      `json:"targetStartDate,omitempty"`
	TransactionTypes     []PostJournalRunTransactionType `json:"transactionTypes"`
}
