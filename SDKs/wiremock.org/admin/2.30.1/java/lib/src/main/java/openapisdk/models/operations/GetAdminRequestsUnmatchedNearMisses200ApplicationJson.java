package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminRequestsUnmatchedNearMisses200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nearMisses")
    public GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[] nearMisses;
    public GetAdminRequestsUnmatchedNearMisses200ApplicationJson withNearMisses(GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[] nearMisses) {
        this.nearMisses = nearMisses;
        return this;
    }
}