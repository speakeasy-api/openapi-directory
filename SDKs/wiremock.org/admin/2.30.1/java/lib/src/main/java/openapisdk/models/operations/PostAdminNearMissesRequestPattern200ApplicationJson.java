package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminNearMissesRequestPattern200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nearMisses")
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[] nearMisses;
    public PostAdminNearMissesRequestPattern200ApplicationJson withNearMisses(PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[] nearMisses) {
        this.nearMisses = nearMisses;
        return this;
    }
}