package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEntityConnectionsDisconnectResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutEntityConnectionsDisconnectResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}