package shared

import (
	"time"
)

type GetJournalRunTypeStatusEnum string

const (
	GETJournalRunTypeStatusEnumPending          GetJournalRunTypeStatusEnum = "Pending"
	GETJournalRunTypeStatusEnumProcessing       GetJournalRunTypeStatusEnum = "Processing"
	GETJournalRunTypeStatusEnumCompleted        GetJournalRunTypeStatusEnum = "Completed"
	GETJournalRunTypeStatusEnumError            GetJournalRunTypeStatusEnum = "Error"
	GETJournalRunTypeStatusEnumCancelInprogress GetJournalRunTypeStatusEnum = "CancelInprogress"
	GETJournalRunTypeStatusEnumCancelled        GetJournalRunTypeStatusEnum = "Cancelled"
	GETJournalRunTypeStatusEnumDeleteInprogress GetJournalRunTypeStatusEnum = "DeleteInprogress"
)

type GetJournalRunType struct {
	AggregateCurrency      *bool                          `json:"aggregateCurrency,omitempty"`
	ExecutedOn             *time.Time                     `json:"executedOn,omitempty"`
	JournalEntryDate       *time.Time                     `json:"journalEntryDate,omitempty"`
	Number                 *string                        `json:"number,omitempty"`
	SegmentationRuleName   *string                        `json:"segmentationRuleName,omitempty"`
	Status                 *GetJournalRunTypeStatusEnum   `json:"status,omitempty"`
	Success                *bool                          `json:"success,omitempty"`
	TargetEndDate          *time.Time                     `json:"targetEndDate,omitempty"`
	TargetStartDate        *time.Time                     `json:"targetStartDate,omitempty"`
	TotalJournalEntryCount *int64                         `json:"totalJournalEntryCount,omitempty"`
	TransactionTypes       []GetJournalRunTransactionType `json:"transactionTypes,omitempty"`
}
