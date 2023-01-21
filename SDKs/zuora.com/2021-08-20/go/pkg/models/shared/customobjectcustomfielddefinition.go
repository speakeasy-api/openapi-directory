package shared

type CustomObjectCustomFieldDefinitionOriginEnum string

const (
	CustomObjectCustomFieldDefinitionOriginEnumCustom CustomObjectCustomFieldDefinitionOriginEnum = "custom"
)

// CustomObjectCustomFieldDefinition
// The custom field definition in the custom object
type CustomObjectCustomFieldDefinition struct {
	Format *string                                      `json:"format,omitempty"`
	Label  *string                                      `json:"label,omitempty"`
	Origin *CustomObjectCustomFieldDefinitionOriginEnum `json:"origin,omitempty"`
	Type   *string                                      `json:"type,omitempty"`
}
