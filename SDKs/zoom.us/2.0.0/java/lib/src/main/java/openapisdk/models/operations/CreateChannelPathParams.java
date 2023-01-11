package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public CreateChannelPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}