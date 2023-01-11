package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectDefinitionsRequestDefinitionRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum cardinality;
    public PostCustomObjectDefinitionsRequestDefinitionRelationships withCardinality(PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum cardinality) {
        this.cardinality = cardinality;
        return this;
    }
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public PostCustomObjectDefinitionsRequestDefinitionRelationships withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("namespace")
    public String namespace;
    public PostCustomObjectDefinitionsRequestDefinitionRelationships withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public PostCustomObjectDefinitionsRequestDefinitionRelationships withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordConstraints")
    public PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints recordConstraints;
    public PostCustomObjectDefinitionsRequestDefinitionRelationships withRecordConstraints(PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints recordConstraints) {
        this.recordConstraints = recordConstraints;
        return this;
    }
}