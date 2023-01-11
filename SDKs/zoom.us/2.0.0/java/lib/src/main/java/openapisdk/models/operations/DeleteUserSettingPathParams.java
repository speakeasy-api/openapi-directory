package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingType")
    public String settingType;
    public DeleteUserSettingPathParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteUserSettingPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}