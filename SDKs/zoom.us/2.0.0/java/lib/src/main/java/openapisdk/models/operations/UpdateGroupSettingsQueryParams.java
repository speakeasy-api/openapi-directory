package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public UpdateGroupSettingsQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public UpdateGroupSettingsOptionEnum option;
    public UpdateGroupSettingsQueryParams withOption(UpdateGroupSettingsOptionEnum option) {
        this.option = option;
        return this;
    }
}