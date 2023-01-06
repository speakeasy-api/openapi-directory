package shared

import (
	"time"
)

type CustomObjectDefinitionSchemaRelationshipsCardinalityEnum string

const (
	CustomObjectDefinitionSchemaRelationshipsCardinalityEnumManyToOne CustomObjectDefinitionSchemaRelationshipsCardinalityEnum = "manyToOne"
	CustomObjectDefinitionSchemaRelationshipsCardinalityEnumOneToMany CustomObjectDefinitionSchemaRelationshipsCardinalityEnum = "oneToMany"
)

type CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate struct {
	EnforceValidMapping *bool `json:"enforceValidMapping,omitempty"`
}

// CustomObjectDefinitionSchemaRelationshipsRecordConstraints
// Specifies contraints to apply to custom object records.
type CustomObjectDefinitionSchemaRelationshipsRecordConstraints struct {
	Create *CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate `json:"create,omitempty"`
}

type CustomObjectDefinitionSchemaRelationships struct {
	Cardinality       *CustomObjectDefinitionSchemaRelationshipsCardinalityEnum   `json:"cardinality,omitempty"`
	Fields            map[string]string                                           `json:"fields,omitempty"`
	Namespace         *string                                                     `json:"namespace,omitempty"`
	Object            *string                                                     `json:"object,omitempty"`
	RecordConstraints *CustomObjectDefinitionSchemaRelationshipsRecordConstraints `json:"recordConstraints,omitempty"`
}

type CustomObjectDefinitionSchemaTypeEnum string

const (
	CustomObjectDefinitionSchemaTypeEnumObject CustomObjectDefinitionSchemaTypeEnum = "object"
)

// CustomObjectDefinitionSchema
// The schema of the custom object definition
type CustomObjectDefinitionSchema struct {
	Filterable    []string                                     `json:"filterable,omitempty"`
	Label         *string                                      `json:"label,omitempty"`
	Object        *string                                      `json:"object,omitempty"`
	Properties    map[string]CustomObjectCustomFieldDefinition `json:"properties,omitempty"`
	Relationships []CustomObjectDefinitionSchemaRelationships  `json:"relationships,omitempty"`
	Required      []string                                     `json:"required,omitempty"`
	Type          *CustomObjectDefinitionSchemaTypeEnum        `json:"type,omitempty"`
}

type CustomObjectDefinition struct {
	CreatedByID *string                       `json:"CreatedById,omitempty"`
	CreatedDate *time.Time                    `json:"CreatedDate,omitempty"`
	ID          *string                       `json:"Id,omitempty"`
	UpdatedByID *string                       `json:"UpdatedById,omitempty"`
	UpdatedDate *time.Time                    `json:"UpdatedDate,omitempty"`
	Schema      *CustomObjectDefinitionSchema `json:"schema,omitempty"`
	Type        *string                       `json:"type,omitempty"`
}
