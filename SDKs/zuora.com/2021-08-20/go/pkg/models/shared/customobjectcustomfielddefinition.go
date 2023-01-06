package shared

type CustomObjectCustomFieldDefinitionOriginEnum string

const (
	CustomObjectCustomFieldDefinitionOriginEnumCustom CustomObjectCustomFieldDefinitionOriginEnum = "custom"
)

type CustomObjectCustomFieldDefinition struct {
	Format *string                                      `json:"format,omitempty"`
	Label  *string                                      `json:"label,omitempty"`
	Origin *CustomObjectCustomFieldDefinitionOriginEnum `json:"origin,omitempty"`
	Type   *string                                      `json:"type,omitempty"`
}
