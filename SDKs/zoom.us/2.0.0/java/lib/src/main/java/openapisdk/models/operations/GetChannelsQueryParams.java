package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public GetChannelsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetChannelsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}