package shared

type PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum string

const (
	PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnumManyToOne PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum = "manyToOne"
)

type PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate struct {
	EnforceValidMapping *bool `json:"enforceValidMapping,omitempty"`
}

// PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints
// Specifies contraints to apply to custom object records.
type PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints struct {
	Create *PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate `json:"create,omitempty"`
}

type PostCustomObjectDefinitionsRequestDefinitionRelationships struct {
	Cardinality       *PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum   `json:"cardinality,omitempty"`
	Fields            map[string]string                                                           `json:"fields"`
	Namespace         string                                                                      `json:"namespace"`
	Object            string                                                                      `json:"object"`
	RecordConstraints *PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints `json:"recordConstraints,omitempty"`
}

type PostCustomObjectDefinitionsRequestDefinition struct {
	Filterable    []string                                                    `json:"filterable,omitempty"`
	Label         *string                                                     `json:"label,omitempty"`
	Object        *string                                                     `json:"object,omitempty"`
	Properties    map[string]PostCustomObjectDefinitionFieldDefinitionRequest `json:"properties,omitempty"`
	Relationships []PostCustomObjectDefinitionsRequestDefinitionRelationships `json:"relationships,omitempty"`
	Required      []string                                                    `json:"required,omitempty"`
}
