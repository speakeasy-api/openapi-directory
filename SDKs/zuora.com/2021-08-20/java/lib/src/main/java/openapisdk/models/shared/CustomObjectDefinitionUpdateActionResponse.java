package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectDefinitionUpdateActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomObjectDefinitionUpdateActionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public UpdateCustomObjectCusotmField field;
    public CustomObjectDefinitionUpdateActionResponse withField(UpdateCustomObjectCusotmField field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomObjectDefinitionUpdateActionResponse withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public CustomObjectDefinitionUpdateActionResponse withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionUpdateActionResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationship")
    public CustomObjectDefinitionUpdateActionResponseRelationship relationship;
    public CustomObjectDefinitionUpdateActionResponse withRelationship(CustomObjectDefinitionUpdateActionResponseRelationship relationship) {
        this.relationship = relationship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomObjectDefinitionUpdateActionResponseTypeEnum type;
    public CustomObjectDefinitionUpdateActionResponse withType(CustomObjectDefinitionUpdateActionResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}