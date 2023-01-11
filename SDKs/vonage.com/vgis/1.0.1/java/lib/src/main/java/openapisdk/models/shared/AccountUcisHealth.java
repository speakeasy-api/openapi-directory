package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountUcisHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AccountUcisHealth withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AccountUcisHealth withStatus(String status) {
        this.status = status;
        return this;
    }
}