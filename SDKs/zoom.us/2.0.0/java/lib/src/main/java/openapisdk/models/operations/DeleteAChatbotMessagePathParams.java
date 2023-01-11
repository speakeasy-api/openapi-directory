package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAChatbotMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=message_id")
    public String messageId;
    public DeleteAChatbotMessagePathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}