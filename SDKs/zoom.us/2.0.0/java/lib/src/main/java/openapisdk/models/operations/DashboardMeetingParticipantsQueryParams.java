package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public DashboardMeetingParticipantsIncludeFieldsEnum includeFields;
    public DashboardMeetingParticipantsQueryParams withIncludeFields(DashboardMeetingParticipantsIncludeFieldsEnum includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardMeetingParticipantsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardMeetingParticipantsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardMeetingParticipantsTypeEnum type;
    public DashboardMeetingParticipantsQueryParams withType(DashboardMeetingParticipantsTypeEnum type) {
        this.type = type;
        return this;
    }
}