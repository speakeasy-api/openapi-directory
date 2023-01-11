package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Webinar200ApplicationJsonTrackingFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public Webinar200ApplicationJsonTrackingFields withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Webinar200ApplicationJsonTrackingFields withValue(String value) {
        this.value = value;
        return this;
    }
}