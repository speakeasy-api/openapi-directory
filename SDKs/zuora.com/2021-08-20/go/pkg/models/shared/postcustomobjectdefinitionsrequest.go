package shared

type PostCustomObjectDefinitionsRequest struct {
	Definitions map[string]PostCustomObjectDefinitionsRequestDefinition `json:"definitions,omitempty"`
}
