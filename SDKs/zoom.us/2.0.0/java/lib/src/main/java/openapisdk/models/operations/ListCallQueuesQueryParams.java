package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListCallQueuesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListCallQueuesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}