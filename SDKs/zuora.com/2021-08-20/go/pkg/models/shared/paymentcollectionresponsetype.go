package shared

type PaymentCollectionResponseType struct {
	NextPage *string                  `json:"nextPage,omitempty"`
	Payments []map[string]interface{} `json:"payments,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}
