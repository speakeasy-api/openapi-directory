package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyBadRequestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ProxyBadRequestResponseErrors[] errors;
    public ProxyBadRequestResponse withErrors(ProxyBadRequestResponseErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Success")
    public Boolean success;
    public ProxyBadRequestResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}