package shared

import (
	"time"
)

type GetRevenueStartDateSettingType struct {
	StartDate *time.Time `json:"startDate,omitempty"`
	Success   *bool      `json:"success,omitempty"`
	UpdatedBy *string    `json:"updatedBy,omitempty"`
	UpdatedOn *time.Time `json:"updatedOn,omitempty"`
}
