package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiPostSettingPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingName")
    public String settingName;
    public UserApiPostSettingPathParams withSettingName(String settingName) {
        this.settingName = settingName;
        return this;
    }
}