package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Did {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_tag")
    public String customTag;
    public Did withCustomTag(String customTag) {
        this.customTag = customTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public Did withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}