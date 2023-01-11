package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportMeetingParticipantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public ReportMeetingParticipantsIncludeFieldsEnum includeFields;
    public ReportMeetingParticipantsQueryParams withIncludeFields(ReportMeetingParticipantsIncludeFieldsEnum includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ReportMeetingParticipantsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ReportMeetingParticipantsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}