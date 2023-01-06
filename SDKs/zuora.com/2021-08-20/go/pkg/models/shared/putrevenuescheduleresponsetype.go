package shared

type PutRevenueScheduleResponseType struct {
	RevenueEventNumber *string `json:"revenueEventNumber,omitempty"`
	Success            *bool   `json:"success,omitempty"`
}
