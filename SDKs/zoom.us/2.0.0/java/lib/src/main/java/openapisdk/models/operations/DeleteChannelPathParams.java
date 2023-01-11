package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DeleteChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteChannelPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}