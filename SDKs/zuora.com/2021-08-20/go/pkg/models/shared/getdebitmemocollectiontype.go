package shared

type GetDebitMemoCollectionType struct {
	Debitmemos []map[string]interface{} `json:"debitmemos,omitempty"`
	NextPage   *string                  `json:"nextPage,omitempty"`
	Success    *bool                    `json:"success,omitempty"`
}
