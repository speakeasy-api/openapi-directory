package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchCompanyContactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public SearchCompanyContactsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public SearchCompanyContactsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query_presence_status")
    public String queryPresenceStatus;
    public SearchCompanyContactsQueryParams withQueryPresenceStatus(String queryPresenceStatus) {
        this.queryPresenceStatus = queryPresenceStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_key")
    public String searchKey;
    public SearchCompanyContactsQueryParams withSearchKey(String searchKey) {
        this.searchKey = searchKey;
        return this;
    }
}