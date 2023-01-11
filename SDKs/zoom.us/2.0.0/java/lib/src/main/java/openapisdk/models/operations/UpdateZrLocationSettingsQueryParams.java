package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public String settingType;
    public UpdateZrLocationSettingsQueryParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
}