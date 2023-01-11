package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditChatbotMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=message_id")
    public String messageId;
    public EditChatbotMessagePathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}