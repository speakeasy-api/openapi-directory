package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImChatMessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public ImChatMessagesPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}