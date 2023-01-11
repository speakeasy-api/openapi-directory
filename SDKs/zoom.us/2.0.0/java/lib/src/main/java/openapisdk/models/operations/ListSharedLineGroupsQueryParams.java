package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSharedLineGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListSharedLineGroupsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListSharedLineGroupsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}