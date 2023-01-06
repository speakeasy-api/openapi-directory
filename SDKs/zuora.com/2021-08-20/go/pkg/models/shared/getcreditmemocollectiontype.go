package shared

type GetCreditMemoCollectionType struct {
	Creditmemos []map[string]interface{} `json:"creditmemos,omitempty"`
	NextPage    *string                  `json:"nextPage,omitempty"`
	Success     *bool                    `json:"success,omitempty"`
}
