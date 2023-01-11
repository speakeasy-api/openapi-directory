package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChatMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public String messageId;
    public DeleteChatMessagePathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteChatMessagePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}