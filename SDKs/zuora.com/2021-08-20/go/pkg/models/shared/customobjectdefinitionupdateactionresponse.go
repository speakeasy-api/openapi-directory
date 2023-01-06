package shared

type CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum string

const (
	CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnumManyToOne CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum = "manyToOne"
	CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnumOneToMany CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum = "oneToMany"
)

type CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate struct {
	EnforceValidMapping *bool `json:"enforceValidMapping,omitempty"`
}

// CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints
// Specifies contraints to apply to custom object records.
type CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints struct {
	Create *CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate `json:"create,omitempty"`
}

type CustomObjectDefinitionUpdateActionResponseRelationship struct {
	Cardinality       *CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum   `json:"cardinality,omitempty"`
	Fields            map[string]string                                                        `json:"fields,omitempty"`
	Namespace         *string                                                                  `json:"namespace,omitempty"`
	Object            *string                                                                  `json:"object,omitempty"`
	RecordConstraints *CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints `json:"recordConstraints,omitempty"`
}

type CustomObjectDefinitionUpdateActionResponseTypeEnum string

const (
	CustomObjectDefinitionUpdateActionResponseTypeEnumAddField           CustomObjectDefinitionUpdateActionResponseTypeEnum = "addField"
	CustomObjectDefinitionUpdateActionResponseTypeEnumDeleteField        CustomObjectDefinitionUpdateActionResponseTypeEnum = "deleteField"
	CustomObjectDefinitionUpdateActionResponseTypeEnumUpdateField        CustomObjectDefinitionUpdateActionResponseTypeEnum = "updateField"
	CustomObjectDefinitionUpdateActionResponseTypeEnumUpdateObject       CustomObjectDefinitionUpdateActionResponseTypeEnum = "updateObject"
	CustomObjectDefinitionUpdateActionResponseTypeEnumRenameField        CustomObjectDefinitionUpdateActionResponseTypeEnum = "renameField"
	CustomObjectDefinitionUpdateActionResponseTypeEnumAddRelationship    CustomObjectDefinitionUpdateActionResponseTypeEnum = "addRelationship"
	CustomObjectDefinitionUpdateActionResponseTypeEnumDeleteRelationship CustomObjectDefinitionUpdateActionResponseTypeEnum = "deleteRelationship"
)

type CustomObjectDefinitionUpdateActionResponse struct {
	Description  *string                                                 `json:"description,omitempty"`
	Field        *UpdateCustomObjectCusotmField                          `json:"field,omitempty"`
	Label        *string                                                 `json:"label,omitempty"`
	Namespace    *string                                                 `json:"namespace,omitempty"`
	Object       *string                                                 `json:"object,omitempty"`
	Relationship *CustomObjectDefinitionUpdateActionResponseRelationship `json:"relationship,omitempty"`
	Type         *CustomObjectDefinitionUpdateActionResponseTypeEnum     `json:"type,omitempty"`
}
