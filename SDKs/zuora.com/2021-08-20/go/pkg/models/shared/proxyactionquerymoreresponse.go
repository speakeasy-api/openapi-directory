package shared

type ProxyActionqueryMoreResponse struct {
	Done         *bool                    `json:"done,omitempty"`
	QueryLocator *string                  `json:"queryLocator,omitempty"`
	Records      []map[string]interface{} `json:"records,omitempty"`
	Size         *int32                   `json:"size,omitempty"`
}
