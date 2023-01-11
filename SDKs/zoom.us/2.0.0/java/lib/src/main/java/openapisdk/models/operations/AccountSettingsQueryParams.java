package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public AccountSettingsQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public AccountSettingsOptionEnum option;
    public AccountSettingsQueryParams withOption(AccountSettingsOptionEnum option) {
        this.option = option;
        return this;
    }
}