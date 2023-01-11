package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public MeetingRecordingRegistrantsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public MeetingRecordingRegistrantsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public MeetingRecordingRegistrantsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public MeetingRecordingRegistrantsStatusEnum status;
    public MeetingRecordingRegistrantsQueryParams withStatus(MeetingRecordingRegistrantsStatusEnum status) {
        this.status = status;
        return this;
    }
}