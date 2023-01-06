package shared

import (
	"time"
)

type GetAccountSummaryUsageType struct {
	Quantity      *string    `json:"quantity,omitempty"`
	StartDate     *time.Time `json:"startDate,omitempty"`
	UnitOfMeasure *string    `json:"unitOfMeasure,omitempty"`
}
