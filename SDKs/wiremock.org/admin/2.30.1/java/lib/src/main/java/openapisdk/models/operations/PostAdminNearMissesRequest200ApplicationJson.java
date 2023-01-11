package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminNearMissesRequest200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nearMisses")
    public PostAdminNearMissesRequest200ApplicationJsonNearMisses[] nearMisses;
    public PostAdminNearMissesRequest200ApplicationJson withNearMisses(PostAdminNearMissesRequest200ApplicationJsonNearMisses[] nearMisses) {
        this.nearMisses = nearMisses;
        return this;
    }
}