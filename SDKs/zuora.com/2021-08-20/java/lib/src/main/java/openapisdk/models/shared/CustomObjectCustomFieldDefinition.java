package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectCustomFieldDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public CustomObjectCustomFieldDefinition withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomObjectCustomFieldDefinition withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public CustomObjectCustomFieldDefinitionOriginEnum origin;
    public CustomObjectCustomFieldDefinition withOrigin(CustomObjectCustomFieldDefinitionOriginEnum origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CustomObjectCustomFieldDefinition withType(String type) {
        this.type = type;
        return this;
    }
}