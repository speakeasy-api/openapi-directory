package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public String settingType;
    public GetZrSettingsQueryParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
}