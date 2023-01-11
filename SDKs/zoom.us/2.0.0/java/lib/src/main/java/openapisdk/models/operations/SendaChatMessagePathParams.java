package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendaChatMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public SendaChatMessagePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}