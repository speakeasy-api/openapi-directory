package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserLevelChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetUserLevelChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}