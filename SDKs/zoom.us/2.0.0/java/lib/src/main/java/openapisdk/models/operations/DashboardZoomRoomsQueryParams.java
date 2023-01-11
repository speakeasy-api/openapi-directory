package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardZoomRoomsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardZoomRoomsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public DashboardZoomRoomsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardZoomRoomsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}