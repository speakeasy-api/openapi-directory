package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListChannelMembersQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListChannelMembersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}