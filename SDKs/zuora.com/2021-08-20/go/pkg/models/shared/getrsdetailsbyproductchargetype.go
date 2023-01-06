package shared

type GetrsDetailsByProductChargeType struct {
	NextPage         *string                  `json:"nextPage,omitempty"`
	RevenueSchedules []map[string]interface{} `json:"revenueSchedules,omitempty"`
	Success          *bool                    `json:"success,omitempty"`
}
