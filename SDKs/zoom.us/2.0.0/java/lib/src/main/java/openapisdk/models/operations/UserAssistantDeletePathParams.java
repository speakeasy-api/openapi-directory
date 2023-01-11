package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAssistantDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assistantId")
    public String assistantId;
    public UserAssistantDeletePathParams withAssistantId(String assistantId) {
        this.assistantId = assistantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserAssistantDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}