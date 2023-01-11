package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=custom_query_fields")
    public String customQueryFields;
    public GetSettingTemplateQueryParams withCustomQueryFields(String customQueryFields) {
        this.customQueryFields = customQueryFields;
        return this;
    }
}