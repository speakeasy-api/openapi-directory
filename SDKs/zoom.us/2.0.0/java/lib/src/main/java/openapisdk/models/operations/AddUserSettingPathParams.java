package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingType")
    public String settingType;
    public AddUserSettingPathParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public AddUserSettingPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}