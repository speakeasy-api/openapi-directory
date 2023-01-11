package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public SettingValueResponse withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessages")
    public String[] errorMessages;
    public SettingValueResponse withErrorMessages(String[] errorMessages) {
        this.errorMessages = errorMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SettingValueResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}