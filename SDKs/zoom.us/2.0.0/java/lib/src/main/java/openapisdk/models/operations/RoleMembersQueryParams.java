package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoleMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public RoleMembersQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_count")
    public String pageCount;
    public RoleMembersQueryParams withPageCount(String pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public RoleMembersQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public RoleMembersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}