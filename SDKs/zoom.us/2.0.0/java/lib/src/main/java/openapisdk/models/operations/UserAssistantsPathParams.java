package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAssistantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserAssistantsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}