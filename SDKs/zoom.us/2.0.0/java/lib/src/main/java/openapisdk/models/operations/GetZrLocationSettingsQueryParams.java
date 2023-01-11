package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrLocationSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public String settingType;
    public GetZrLocationSettingsQueryParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
}