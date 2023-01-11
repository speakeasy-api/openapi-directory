package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportWebinarParticipantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public ReportWebinarParticipantsIncludeFieldsEnum includeFields;
    public ReportWebinarParticipantsQueryParams withIncludeFields(ReportWebinarParticipantsIncludeFieldsEnum includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ReportWebinarParticipantsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ReportWebinarParticipantsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}