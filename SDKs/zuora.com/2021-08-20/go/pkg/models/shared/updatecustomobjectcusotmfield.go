package shared

// UpdateCustomObjectCusotmField
// A reference to a field.
type UpdateCustomObjectCusotmField struct {
	Definition *CustomObjectCustomFieldDefinitionUpdate `json:"definition,omitempty"`
	Filterable *bool                                    `json:"filterable,omitempty"`
	Name       *string                                  `json:"name,omitempty"`
	Required   *bool                                    `json:"required,omitempty"`
	TargetName *string                                  `json:"targetName,omitempty"`
}
