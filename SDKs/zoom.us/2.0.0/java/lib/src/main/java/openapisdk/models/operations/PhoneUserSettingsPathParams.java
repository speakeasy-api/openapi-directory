package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PhoneUserSettingsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}