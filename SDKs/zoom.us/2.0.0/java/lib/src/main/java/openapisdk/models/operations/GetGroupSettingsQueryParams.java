package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public GetGroupSettingsQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public GetGroupSettingsOptionEnum option;
    public GetGroupSettingsQueryParams withOption(GetGroupSettingsOptionEnum option) {
        this.option = option;
        return this;
    }
}