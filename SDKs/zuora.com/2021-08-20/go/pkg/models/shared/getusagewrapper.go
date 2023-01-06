package shared

type GetUsageWrapper struct {
	NextPage *string                  `json:"nextPage,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
	Usage    []map[string]interface{} `json:"usage,omitempty"`
}
