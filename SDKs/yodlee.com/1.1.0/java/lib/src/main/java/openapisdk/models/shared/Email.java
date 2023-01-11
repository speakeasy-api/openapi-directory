package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Email {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EmailTypeEnum type;
    public Email withType(EmailTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Email withValue(String value) {
        this.value = value;
        return this;
    }
}