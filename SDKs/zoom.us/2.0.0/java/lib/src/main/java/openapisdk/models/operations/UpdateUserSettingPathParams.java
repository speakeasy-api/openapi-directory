package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingType")
    public String settingType;
    public UpdateUserSettingPathParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UpdateUserSettingPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}