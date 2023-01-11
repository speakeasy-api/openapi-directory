package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectDefinitionFieldDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public PostCustomObjectDefinitionFieldDefinitionRequest withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public PostCustomObjectDefinitionFieldDefinitionRequest withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostCustomObjectDefinitionFieldDefinitionRequest withType(String type) {
        this.type = type;
        return this;
    }
}