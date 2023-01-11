package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public ListChannelMembersPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ListChannelMembersPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}