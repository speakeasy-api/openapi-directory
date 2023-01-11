package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public ErrorResponse withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Double status;
    public ErrorResponse withStatus(Double status) {
        this.status = status;
        return this;
    }
}