package shared

type PostQuoteDocResponseType struct {
	File    *string `json:"file,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
