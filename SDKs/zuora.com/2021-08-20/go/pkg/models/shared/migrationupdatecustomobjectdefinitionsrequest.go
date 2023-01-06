package shared

type MigrationUpdateCustomObjectDefinitionsRequest struct {
	Actions []CustomObjectDefinitionUpdateActionRequest `json:"actions"`
}
