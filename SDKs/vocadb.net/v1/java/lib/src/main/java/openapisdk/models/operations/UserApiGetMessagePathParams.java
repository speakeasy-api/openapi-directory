package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public Integer messageId;
    public UserApiGetMessagePathParams withMessageId(Integer messageId) {
        this.messageId = messageId;
        return this;
    }
}