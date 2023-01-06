package shared

type GetRevenueEventDetailsType struct {
	NextPage            *string                  `json:"nextPage,omitempty"`
	RevenueEventDetails []map[string]interface{} `json:"revenueEventDetails,omitempty"`
	Success             *bool                    `json:"success,omitempty"`
}
