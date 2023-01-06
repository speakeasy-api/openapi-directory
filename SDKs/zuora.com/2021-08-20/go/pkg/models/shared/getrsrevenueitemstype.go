package shared

type GetRsRevenueItemsType struct {
	NextPage     *string                  `json:"nextPage,omitempty"`
	RevenueItems []map[string]interface{} `json:"revenueItems,omitempty"`
	Success      *bool                    `json:"success,omitempty"`
}
