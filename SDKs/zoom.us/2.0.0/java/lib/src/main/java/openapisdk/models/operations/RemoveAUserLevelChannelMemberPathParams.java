package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAUserLevelChannelMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public RemoveAUserLevelChannelMemberPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public RemoveAUserLevelChannelMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}