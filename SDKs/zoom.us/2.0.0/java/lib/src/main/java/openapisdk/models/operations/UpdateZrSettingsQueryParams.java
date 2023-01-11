package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public String settingType;
    public UpdateZrSettingsQueryParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
}