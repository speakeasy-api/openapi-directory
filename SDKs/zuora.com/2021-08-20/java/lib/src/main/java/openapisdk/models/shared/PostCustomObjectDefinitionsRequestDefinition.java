package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectDefinitionsRequestDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterable")
    public String[] filterable;
    public PostCustomObjectDefinitionsRequestDefinition withFilterable(String[] filterable) {
        this.filterable = filterable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public PostCustomObjectDefinitionsRequestDefinition withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public PostCustomObjectDefinitionsRequestDefinition withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, PostCustomObjectDefinitionFieldDefinitionRequest> properties;
    public PostCustomObjectDefinitionsRequestDefinition withProperties(java.util.Map<String, PostCustomObjectDefinitionFieldDefinitionRequest> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public PostCustomObjectDefinitionsRequestDefinitionRelationships[] relationships;
    public PostCustomObjectDefinitionsRequestDefinition withRelationships(PostCustomObjectDefinitionsRequestDefinitionRelationships[] relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public String[] required;
    public PostCustomObjectDefinitionsRequestDefinition withRequired(String[] required) {
        this.required = required;
        return this;
    }
}