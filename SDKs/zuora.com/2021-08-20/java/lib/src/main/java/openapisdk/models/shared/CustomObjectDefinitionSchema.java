package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomObjectDefinitionSchema
 * The schema of the custom object definition
**/
public class CustomObjectDefinitionSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterable")
    public String[] filterable;
    public CustomObjectDefinitionSchema withFilterable(String[] filterable) {
        this.filterable = filterable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomObjectDefinitionSchema withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionSchema withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, CustomObjectCustomFieldDefinition> properties;
    public CustomObjectDefinitionSchema withProperties(java.util.Map<String, CustomObjectCustomFieldDefinition> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public CustomObjectDefinitionSchemaRelationships[] relationships;
    public CustomObjectDefinitionSchema withRelationships(CustomObjectDefinitionSchemaRelationships[] relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public String[] required;
    public CustomObjectDefinitionSchema withRequired(String[] required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomObjectDefinitionSchemaTypeEnum type;
    public CustomObjectDefinitionSchema withType(CustomObjectDefinitionSchemaTypeEnum type) {
        this.type = type;
        return this;
    }
}