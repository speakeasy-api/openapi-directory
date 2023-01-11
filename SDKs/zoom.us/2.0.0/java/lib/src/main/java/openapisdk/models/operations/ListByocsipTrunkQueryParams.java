package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListByocsipTrunkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListByocsipTrunkQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListByocsipTrunkQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}