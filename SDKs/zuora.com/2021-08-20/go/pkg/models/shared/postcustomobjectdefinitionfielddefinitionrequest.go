package shared

type PostCustomObjectDefinitionFieldDefinitionRequest struct {
	Format *string `json:"format,omitempty"`
	Label  string  `json:"label"`
	Type   string  `json:"type"`
}
