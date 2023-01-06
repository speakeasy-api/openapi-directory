package shared

type CustomObjectCustomFieldDefinitionUpdateOriginEnum string

const (
	CustomObjectCustomFieldDefinitionUpdateOriginEnumCustom CustomObjectCustomFieldDefinitionUpdateOriginEnum = "custom"
)

// CustomObjectCustomFieldDefinitionUpdate
// The custom field definition in the custom object
type CustomObjectCustomFieldDefinitionUpdate struct {
	Default     *string                                            `json:"default,omitempty"`
	Description *string                                            `json:"description,omitempty"`
	Format      *string                                            `json:"format,omitempty"`
	Label       *string                                            `json:"label,omitempty"`
	Origin      *CustomObjectCustomFieldDefinitionUpdateOriginEnum `json:"origin,omitempty"`
	Type        *string                                            `json:"type,omitempty"`
}
