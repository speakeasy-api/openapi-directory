package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public String messageId;
    public EditMessagePathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public EditMessagePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}