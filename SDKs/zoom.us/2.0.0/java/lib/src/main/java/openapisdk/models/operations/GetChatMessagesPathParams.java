package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChatMessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public GetChatMessagesPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}