package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PhoneNumberTypeEnum type;
    public PhoneNumber withType(PhoneNumberTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PhoneNumber withValue(String value) {
        this.value = value;
        return this;
    }
}