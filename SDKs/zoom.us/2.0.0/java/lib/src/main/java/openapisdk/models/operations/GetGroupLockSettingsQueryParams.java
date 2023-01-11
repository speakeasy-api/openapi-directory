package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupLockSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public GetGroupLockSettingsQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=option")
    public String option;
    public GetGroupLockSettingsQueryParams withOption(String option) {
        this.option = option;
        return this;
    }
}