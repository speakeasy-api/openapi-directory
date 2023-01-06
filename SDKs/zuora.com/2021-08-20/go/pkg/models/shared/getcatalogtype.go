package shared

type GetCatalogType struct {
	NextPage *string                  `json:"nextPage,omitempty"`
	Products []map[string]interface{} `json:"products,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}
