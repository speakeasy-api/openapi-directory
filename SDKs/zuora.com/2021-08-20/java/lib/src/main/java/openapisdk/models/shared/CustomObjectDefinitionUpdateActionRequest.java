package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectDefinitionUpdateActionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomObjectDefinitionUpdateActionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public UpdateCustomObjectCusotmField field;
    public CustomObjectDefinitionUpdateActionRequest withField(UpdateCustomObjectCusotmField field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomObjectDefinitionUpdateActionRequest withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("namespace")
    public String namespace;
    public CustomObjectDefinitionUpdateActionRequest withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public CustomObjectDefinitionUpdateActionRequest withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationship")
    public CustomObjectDefinitionUpdateActionRequestRelationship relationship;
    public CustomObjectDefinitionUpdateActionRequest withRelationship(CustomObjectDefinitionUpdateActionRequestRelationship relationship) {
        this.relationship = relationship;
        return this;
    }
    @JsonProperty("type")
    public CustomObjectDefinitionUpdateActionRequestTypeEnum type;
    public CustomObjectDefinitionUpdateActionRequest withType(CustomObjectDefinitionUpdateActionRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}