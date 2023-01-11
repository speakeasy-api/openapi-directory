package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardWebinarParticipantShareQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardWebinarParticipantShareQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardWebinarParticipantShareTypeEnum type;
    public DashboardWebinarParticipantShareQueryParams withType(DashboardWebinarParticipantShareTypeEnum type) {
        this.type = type;
        return this;
    }
}