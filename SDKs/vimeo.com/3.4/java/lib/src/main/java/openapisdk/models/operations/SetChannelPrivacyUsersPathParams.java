package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetChannelPrivacyUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public SetChannelPrivacyUsersPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}