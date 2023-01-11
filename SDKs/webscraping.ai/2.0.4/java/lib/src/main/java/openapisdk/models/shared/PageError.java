package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Long statusCode;
    public PageError withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_message")
    public String statusMessage;
    public PageError withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}