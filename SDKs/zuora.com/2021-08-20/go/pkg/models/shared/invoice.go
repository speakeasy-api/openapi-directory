package shared

import (
	"time"
)

type Invoice struct {
	AccountID                     *string    `json:"AccountId,omitempty"`
	AdjustmentAmount              *float64   `json:"AdjustmentAmount,omitempty"`
	Amount                        *float64   `json:"Amount,omitempty"`
	AmountWithoutTax              *float64   `json:"AmountWithoutTax,omitempty"`
	Balance                       *float64   `json:"Balance,omitempty"`
	BillRunID                     *string    `json:"BillRunId,omitempty"`
	Body                          *string    `json:"Body,omitempty"`
	Comments                      *string    `json:"Comments,omitempty"`
	CreatedByID                   *string    `json:"CreatedById,omitempty"`
	CreatedDate                   *time.Time `json:"CreatedDate,omitempty"`
	CreditBalanceAdjustmentAmount *float64   `json:"CreditBalanceAdjustmentAmount,omitempty"`
	DueDate                       *time.Time `json:"DueDate,omitempty"`
	IncludesOneTime               *bool      `json:"IncludesOneTime,omitempty"`
	IncludesRecurring             *bool      `json:"IncludesRecurring,omitempty"`
	IncludesUsage                 *bool      `json:"IncludesUsage,omitempty"`
	InvoiceDate                   *time.Time `json:"InvoiceDate,omitempty"`
	InvoiceNumber                 *string    `json:"InvoiceNumber,omitempty"`
	LastEmailSentDate             *time.Time `json:"LastEmailSentDate,omitempty"`
	PaymentAmount                 *float64   `json:"PaymentAmount,omitempty"`
	PostedBy                      *string    `json:"PostedBy,omitempty"`
	PostedDate                    *time.Time `json:"PostedDate,omitempty"`
	RefundAmount                  *float64   `json:"RefundAmount,omitempty"`
	RegenerateInvoicePDF          *bool      `json:"RegenerateInvoicePDF,omitempty"`
	Status                        *string    `json:"Status,omitempty"`
	TargetDate                    *time.Time `json:"TargetDate,omitempty"`
	TaxAmount                     *float64   `json:"TaxAmount,omitempty"`
	TaxExemptAmount               *float64   `json:"TaxExemptAmount,omitempty"`
	TransferredToAccounting       *string    `json:"TransferredToAccounting,omitempty"`
	UpdatedByID                   *string    `json:"UpdatedById,omitempty"`
	UpdatedDate                   *time.Time `json:"UpdatedDate,omitempty"`
}
