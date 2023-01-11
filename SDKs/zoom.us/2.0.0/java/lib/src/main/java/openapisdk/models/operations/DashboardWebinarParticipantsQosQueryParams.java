package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantsQosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardWebinarParticipantsQosQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardWebinarParticipantsQosQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardWebinarParticipantsQosTypeEnum type;
    public DashboardWebinarParticipantsQosQueryParams withType(DashboardWebinarParticipantsQosTypeEnum type) {
        this.type = type;
        return this;
    }
}