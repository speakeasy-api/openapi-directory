package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserLevelChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public UpdateUserLevelChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}