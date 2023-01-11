package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectDefinitionUpdateActionResponseRelationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum cardinality;
    public CustomObjectDefinitionUpdateActionResponseRelationship withCardinality(CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum cardinality) {
        this.cardinality = cardinality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public CustomObjectDefinitionUpdateActionResponseRelationship withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public CustomObjectDefinitionUpdateActionResponseRelationship withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionUpdateActionResponseRelationship withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordConstraints")
    public CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints recordConstraints;
    public CustomObjectDefinitionUpdateActionResponseRelationship withRecordConstraints(CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints recordConstraints) {
        this.recordConstraints = recordConstraints;
        return this;
    }
}