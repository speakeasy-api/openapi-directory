package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public UserSettingsQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=login_type")
    public UserSettingsLoginTypeEnum loginType;
    public UserSettingsQueryParams withLoginType(UserSettingsLoginTypeEnum loginType) {
        this.loginType = loginType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public UserSettingsOptionEnum option;
    public UserSettingsQueryParams withOption(UserSettingsOptionEnum option) {
        this.option = option;
        return this;
    }
}