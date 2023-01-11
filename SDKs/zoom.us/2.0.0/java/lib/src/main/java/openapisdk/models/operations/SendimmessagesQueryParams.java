package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendimmessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chat_user")
    public String chatUser;
    public SendimmessagesQueryParams withChatUser(String chatUser) {
        this.chatUser = chatUser;
        return this;
    }
}