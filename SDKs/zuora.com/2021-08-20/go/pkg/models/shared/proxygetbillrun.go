package shared

import (
	"time"
)

type ProxyGetBillRun struct {
	AccountID                   *string    `json:"AccountId,omitempty"`
	AutoEmail                   *bool      `json:"AutoEmail,omitempty"`
	AutoPost                    *bool      `json:"AutoPost,omitempty"`
	AutoRenewal                 *bool      `json:"AutoRenewal,omitempty"`
	Batch                       *string    `json:"Batch,omitempty"`
	BillCycleDay                *string    `json:"BillCycleDay,omitempty"`
	BillRunNumber               *string    `json:"BillRunNumber,omitempty"`
	CreatedByID                 *string    `json:"CreatedById,omitempty"`
	CreatedDate                 *time.Time `json:"CreatedDate,omitempty"`
	ExecutedDate                *time.Time `json:"ExecutedDate,omitempty"`
	ID                          *string    `json:"Id,omitempty"`
	InvoiceDate                 *time.Time `json:"InvoiceDate,omitempty"`
	InvoicesEmailed             *bool      `json:"InvoicesEmailed,omitempty"`
	LastEmailSentTime           *time.Time `json:"LastEmailSentTime,omitempty"`
	NoEmailForZeroAmountInvoice *bool      `json:"NoEmailForZeroAmountInvoice,omitempty"`
	NumberOfAccounts            *int64     `json:"NumberOfAccounts,omitempty"`
	NumberOfInvoices            *int64     `json:"NumberOfInvoices,omitempty"`
	Status                      *string    `json:"Status,omitempty"`
	TargetDate                  *time.Time `json:"TargetDate,omitempty"`
	UpdatedByID                 *string    `json:"UpdatedById,omitempty"`
	UpdatedDate                 *time.Time `json:"UpdatedDate,omitempty"`
}
