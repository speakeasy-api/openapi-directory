package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipPhonesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListSipPhonesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public ListSipPhonesQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListSipPhonesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_key")
    public String searchKey;
    public ListSipPhonesQueryParams withSearchKey(String searchKey) {
        this.searchKey = searchKey;
        return this;
    }
}