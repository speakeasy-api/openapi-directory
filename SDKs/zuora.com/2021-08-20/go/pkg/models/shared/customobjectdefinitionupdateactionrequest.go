package shared

type CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum string

const (
	CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnumManyToOne CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum = "manyToOne"
)

type CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate struct {
	EnforceValidMapping *bool `json:"enforceValidMapping,omitempty"`
}

// CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints
// Specifies contraints to apply to custom object records.
type CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints struct {
	Create *CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate `json:"create,omitempty"`
}

type CustomObjectDefinitionUpdateActionRequestRelationship struct {
	Cardinality       *CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum   `json:"cardinality,omitempty"`
	Fields            map[string]string                                                       `json:"fields"`
	Namespace         string                                                                  `json:"namespace"`
	Object            string                                                                  `json:"object"`
	RecordConstraints *CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints `json:"recordConstraints,omitempty"`
}

type CustomObjectDefinitionUpdateActionRequestTypeEnum string

const (
	CustomObjectDefinitionUpdateActionRequestTypeEnumAddField           CustomObjectDefinitionUpdateActionRequestTypeEnum = "addField"
	CustomObjectDefinitionUpdateActionRequestTypeEnumDeleteField        CustomObjectDefinitionUpdateActionRequestTypeEnum = "deleteField"
	CustomObjectDefinitionUpdateActionRequestTypeEnumUpdateField        CustomObjectDefinitionUpdateActionRequestTypeEnum = "updateField"
	CustomObjectDefinitionUpdateActionRequestTypeEnumUpdateObject       CustomObjectDefinitionUpdateActionRequestTypeEnum = "updateObject"
	CustomObjectDefinitionUpdateActionRequestTypeEnumRenameField        CustomObjectDefinitionUpdateActionRequestTypeEnum = "renameField"
	CustomObjectDefinitionUpdateActionRequestTypeEnumAddRelationship    CustomObjectDefinitionUpdateActionRequestTypeEnum = "addRelationship"
	CustomObjectDefinitionUpdateActionRequestTypeEnumDeleteRelationship CustomObjectDefinitionUpdateActionRequestTypeEnum = "deleteRelationship"
)

type CustomObjectDefinitionUpdateActionRequest struct {
	Description  *string                                                `json:"description,omitempty"`
	Field        *UpdateCustomObjectCusotmField                         `json:"field,omitempty"`
	Label        *string                                                `json:"label,omitempty"`
	Namespace    string                                                 `json:"namespace"`
	Object       string                                                 `json:"object"`
	Relationship *CustomObjectDefinitionUpdateActionRequestRelationship `json:"relationship,omitempty"`
	Type         CustomObjectDefinitionUpdateActionRequestTypeEnum      `json:"type"`
}
