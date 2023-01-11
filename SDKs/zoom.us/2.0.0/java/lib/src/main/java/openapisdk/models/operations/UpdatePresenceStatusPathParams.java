package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePresenceStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UpdatePresenceStatusPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}