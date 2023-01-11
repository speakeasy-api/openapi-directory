package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meeting200ApplicationJsonTrackingFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public Meeting200ApplicationJsonTrackingFields withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Meeting200ApplicationJsonTrackingFields withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public Meeting200ApplicationJsonTrackingFields withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}