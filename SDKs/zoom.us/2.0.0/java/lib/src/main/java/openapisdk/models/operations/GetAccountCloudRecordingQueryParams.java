package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountCloudRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public OffsetDateTime from;
    public GetAccountCloudRecordingQueryParams withFrom(OffsetDateTime from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public GetAccountCloudRecordingQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetAccountCloudRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public OffsetDateTime to;
    public GetAccountCloudRecordingQueryParams withTo(OffsetDateTime to) {
        this.to = to;
        return this;
    }
}