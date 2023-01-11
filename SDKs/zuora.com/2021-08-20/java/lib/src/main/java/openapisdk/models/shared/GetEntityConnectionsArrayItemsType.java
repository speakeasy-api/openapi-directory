package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEntityConnectionsArrayItemsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetEntityConnectionsArrayItemsType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceEntityId")
    public String sourceEntityId;
    public GetEntityConnectionsArrayItemsType withSourceEntityId(String sourceEntityId) {
        this.sourceEntityId = sourceEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetEntityConnectionsArrayItemsType withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetEntityId")
    public String targetEntityId;
    public GetEntityConnectionsArrayItemsType withTargetEntityId(String targetEntityId) {
        this.targetEntityId = targetEntityId;
        return this;
    }
}