package shared

type GetRefundCollectionType struct {
	NextPage *string                  `json:"nextPage,omitempty"`
	Refunds  []map[string]interface{} `json:"refunds,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}
