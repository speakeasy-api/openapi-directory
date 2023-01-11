package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPhoneUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListPhoneUsersQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListPhoneUsersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public ListPhoneUsersQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}