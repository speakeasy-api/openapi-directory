package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrAccountSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public GetZrAccountSettingsSettingTypeEnum settingType;
    public GetZrAccountSettingsQueryParams withSettingType(GetZrAccountSettingsSettingTypeEnum settingType) {
        this.settingType = settingType;
        return this;
    }
}