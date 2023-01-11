package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardMeetingParticipantShareQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardMeetingParticipantShareQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardMeetingParticipantShareTypeEnum type;
    public DashboardMeetingParticipantShareQueryParams withType(DashboardMeetingParticipantShareTypeEnum type) {
        this.type = type;
        return this;
    }
}