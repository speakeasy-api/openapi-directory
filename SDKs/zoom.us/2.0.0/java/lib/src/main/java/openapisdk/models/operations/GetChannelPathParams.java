package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public GetChannelPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}