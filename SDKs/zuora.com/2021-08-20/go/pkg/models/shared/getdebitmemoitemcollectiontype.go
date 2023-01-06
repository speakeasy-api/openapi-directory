package shared

type GetDebitMemoItemCollectionType struct {
	Items    []map[string]interface{} `json:"items,omitempty"`
	NextPage *string                  `json:"nextPage,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}
