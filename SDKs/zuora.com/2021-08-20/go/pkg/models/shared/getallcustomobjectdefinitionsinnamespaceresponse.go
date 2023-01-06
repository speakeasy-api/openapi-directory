package shared

type GetAllCustomObjectDefinitionsInNamespaceResponse struct {
	Count       *int64                            `json:"count,omitempty"`
	Definitions map[string]CustomObjectDefinition `json:"definitions,omitempty"`
}
