package shared

type GetProductRatePlansResponse struct {
	NextPage         *string                  `json:"nextPage,omitempty"`
	ProductRatePlans []map[string]interface{} `json:"productRatePlans,omitempty"`
	Success          *bool                    `json:"success,omitempty"`
}
