package shared

import (
	"time"
)

type PostBillingPreviewRunParam struct {
	AssumeRenewal                  *string   `json:"assumeRenewal,omitempty"`
	Batch                          *string   `json:"batch,omitempty"`
	ChargeTypeToExclude            *string   `json:"chargeTypeToExclude,omitempty"`
	IncludingEvergreenSubscription *bool     `json:"includingEvergreenSubscription,omitempty"`
	TargetDate                     time.Time `json:"targetDate"`
}
