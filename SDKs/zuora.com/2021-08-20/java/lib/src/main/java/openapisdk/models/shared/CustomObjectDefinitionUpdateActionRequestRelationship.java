package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectDefinitionUpdateActionRequestRelationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum cardinality;
    public CustomObjectDefinitionUpdateActionRequestRelationship withCardinality(CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum cardinality) {
        this.cardinality = cardinality;
        return this;
    }
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public CustomObjectDefinitionUpdateActionRequestRelationship withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("namespace")
    public String namespace;
    public CustomObjectDefinitionUpdateActionRequestRelationship withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionUpdateActionRequestRelationship withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordConstraints")
    public CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints recordConstraints;
    public CustomObjectDefinitionUpdateActionRequestRelationship withRecordConstraints(CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints recordConstraints) {
        this.recordConstraints = recordConstraints;
        return this;
    }
}