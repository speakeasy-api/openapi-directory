package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZoomRoomAccSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setting_type")
    public String settingType;
    public UpdateZoomRoomAccSettingsQueryParams withSettingType(String settingType) {
        this.settingType = settingType;
        return this;
    }
}