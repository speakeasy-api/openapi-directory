package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiDeleteMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=messageId")
    public Integer[] messageId;
    public UserApiDeleteMessagesQueryParams withMessageId(Integer[] messageId) {
        this.messageId = messageId;
        return this;
    }
}