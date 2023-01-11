package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAssistantCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserAssistantCreatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}