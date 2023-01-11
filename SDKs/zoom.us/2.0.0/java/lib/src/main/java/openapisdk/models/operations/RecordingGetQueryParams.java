package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public String includeFields;
    public RecordingGetQueryParams withIncludeFields(String includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ttl")
    public Long ttl;
    public RecordingGetQueryParams withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}