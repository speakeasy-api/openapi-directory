package shared

import (
	"time"
)

type GetPaymentRunTypeStatusEnum string

const (
	GETPaymentRunTypeStatusEnumPending    GetPaymentRunTypeStatusEnum = "Pending"
	GETPaymentRunTypeStatusEnumProcessing GetPaymentRunTypeStatusEnum = "Processing"
	GETPaymentRunTypeStatusEnumCompleted  GetPaymentRunTypeStatusEnum = "Completed"
	GETPaymentRunTypeStatusEnumError      GetPaymentRunTypeStatusEnum = "Error"
	GETPaymentRunTypeStatusEnumCanceled   GetPaymentRunTypeStatusEnum = "Canceled"
)

type GetPaymentRunType struct {
	AccountID                  *string                      `json:"accountId,omitempty"`
	ApplyCreditBalance         *bool                        `json:"applyCreditBalance,omitempty"`
	AutoApplyCreditMemo        *bool                        `json:"autoApplyCreditMemo,omitempty"`
	AutoApplyUnappliedPayment  *bool                        `json:"autoApplyUnappliedPayment,omitempty"`
	Batch                      *string                      `json:"batch,omitempty"`
	BillCycleDay               *string                      `json:"billCycleDay,omitempty"`
	BillingRunID               *string                      `json:"billingRunId,omitempty"`
	CollectPayment             *bool                        `json:"collectPayment,omitempty"`
	CompletedOn                *time.Time                   `json:"completedOn,omitempty"`
	ConsolidatedPayment        *bool                        `json:"consolidatedPayment,omitempty"`
	CreatedByID                *string                      `json:"createdById,omitempty"`
	CreatedDate                *time.Time                   `json:"createdDate,omitempty"`
	Currency                   *string                      `json:"currency,omitempty"`
	ExecutedOn                 *time.Time                   `json:"executedOn,omitempty"`
	ID                         *string                      `json:"id,omitempty"`
	Number                     *string                      `json:"number,omitempty"`
	PaymentGatewayID           *string                      `json:"paymentGatewayId,omitempty"`
	ProcessPaymentWithClosedPM *bool                        `json:"processPaymentWithClosedPM,omitempty"`
	RunDate                    *time.Time                   `json:"runDate,omitempty"`
	Status                     *GetPaymentRunTypeStatusEnum `json:"status,omitempty"`
	Success                    *bool                        `json:"success,omitempty"`
	TargetDate                 *time.Time                   `json:"targetDate,omitempty"`
	UpdatedByID                *string                      `json:"updatedById,omitempty"`
	UpdatedDate                *time.Time                   `json:"updatedDate,omitempty"`
}
