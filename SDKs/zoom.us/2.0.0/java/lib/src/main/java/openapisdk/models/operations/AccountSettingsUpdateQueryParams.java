package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public AccountSettingsUpdateOptionEnum option;
    public AccountSettingsUpdateQueryParams withOption(AccountSettingsUpdateOptionEnum option) {
        this.option = option;
        return this;
    }
}