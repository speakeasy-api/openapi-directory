package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public UserSettingsUpdateOptionEnum option;
    public UserSettingsUpdateQueryParams withOption(UserSettingsUpdateOptionEnum option) {
        this.option = option;
        return this;
    }
}