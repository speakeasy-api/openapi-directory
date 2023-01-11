package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Contact withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Contact withValue(String value) {
        this.value = value;
        return this;
    }
}