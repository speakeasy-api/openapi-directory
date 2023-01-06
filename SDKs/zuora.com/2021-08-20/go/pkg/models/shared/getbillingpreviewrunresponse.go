package shared

import (
	"time"
)

// GetBillingPreviewRunResponse
// get billingPreviewRun response
type GetBillingPreviewRunResponse struct {
	AssumeRenewal                  *string    `json:"assumeRenewal,omitempty"`
	Batch                          *string    `json:"batch,omitempty"`
	ChargeTypeToExclude            *string    `json:"chargeTypeToExclude,omitempty"`
	CreatedByID                    *string    `json:"createdById,omitempty"`
	CreatedDate                    *string    `json:"createdDate,omitempty"`
	EndDate                        *string    `json:"endDate,omitempty"`
	ErrorMessage                   *string    `json:"errorMessage,omitempty"`
	IncludingEvergreenSubscription *bool      `json:"includingEvergreenSubscription,omitempty"`
	ResultFileURL                  *string    `json:"resultFileUrl,omitempty"`
	RunNumber                      *string    `json:"runNumber,omitempty"`
	StartDate                      *string    `json:"startDate,omitempty"`
	Status                         *string    `json:"status,omitempty"`
	SucceededAccounts              *int64     `json:"succeededAccounts,omitempty"`
	Success                        *bool      `json:"success,omitempty"`
	TargetDate                     *time.Time `json:"targetDate,omitempty"`
	TotalAccounts                  *int32     `json:"totalAccounts,omitempty"`
	UpdatedByID                    *string    `json:"updatedById,omitempty"`
	UpdatedDate                    *time.Time `json:"updatedDate,omitempty"`
}
