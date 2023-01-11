package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListZrLocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListZrLocationsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListZrLocationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent_location_id")
    public String parentLocationId;
    public ListZrLocationsQueryParams withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public ListZrLocationsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}