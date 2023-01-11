package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserSettingsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}