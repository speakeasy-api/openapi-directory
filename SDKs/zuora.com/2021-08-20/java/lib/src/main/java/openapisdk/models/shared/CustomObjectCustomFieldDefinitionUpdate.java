package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomObjectCustomFieldDefinitionUpdate
 * The custom field definition in the custom object
**/
public class CustomObjectCustomFieldDefinitionUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public String default_;
    public CustomObjectCustomFieldDefinitionUpdate withDefault(String default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomObjectCustomFieldDefinitionUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public CustomObjectCustomFieldDefinitionUpdate withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomObjectCustomFieldDefinitionUpdate withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public CustomObjectCustomFieldDefinitionUpdateOriginEnum origin;
    public CustomObjectCustomFieldDefinitionUpdate withOrigin(CustomObjectCustomFieldDefinitionUpdateOriginEnum origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CustomObjectCustomFieldDefinitionUpdate withType(String type) {
        this.type = type;
        return this;
    }
}