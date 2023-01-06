package shared

type Description struct {
	Consumer *string `json:"consumer,omitempty"`
	Original *string `json:"original,omitempty"`
	Security *string `json:"security,omitempty"`
	Simple   *string `json:"simple,omitempty"`
}

type DescriptionInput struct {
	Consumer *string `json:"consumer,omitempty"`
}
