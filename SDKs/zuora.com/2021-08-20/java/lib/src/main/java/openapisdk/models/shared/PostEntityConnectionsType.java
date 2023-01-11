package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostEntityConnectionsType {
    @JsonProperty("targetEntityId")
    public String targetEntityId;
    public PostEntityConnectionsType withTargetEntityId(String targetEntityId) {
        this.targetEntityId = targetEntityId;
        return this;
    }
}