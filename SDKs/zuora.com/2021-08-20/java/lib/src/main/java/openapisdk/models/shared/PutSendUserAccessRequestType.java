package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutSendUserAccessRequestType {
    @JsonProperty("targetEntityIds")
    public String[] targetEntityIds;
    public PutSendUserAccessRequestType withTargetEntityIds(String[] targetEntityIds) {
        this.targetEntityIds = targetEntityIds;
        return this;
    }
}