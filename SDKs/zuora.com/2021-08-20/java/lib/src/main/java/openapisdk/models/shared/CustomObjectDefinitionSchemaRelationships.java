package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectDefinitionSchemaRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public CustomObjectDefinitionSchemaRelationshipsCardinalityEnum cardinality;
    public CustomObjectDefinitionSchemaRelationships withCardinality(CustomObjectDefinitionSchemaRelationshipsCardinalityEnum cardinality) {
        this.cardinality = cardinality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public CustomObjectDefinitionSchemaRelationships withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public CustomObjectDefinitionSchemaRelationships withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionSchemaRelationships withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordConstraints")
    public CustomObjectDefinitionSchemaRelationshipsRecordConstraints recordConstraints;
    public CustomObjectDefinitionSchemaRelationships withRecordConstraints(CustomObjectDefinitionSchemaRelationshipsRecordConstraints recordConstraints) {
        this.recordConstraints = recordConstraints;
        return this;
    }
}