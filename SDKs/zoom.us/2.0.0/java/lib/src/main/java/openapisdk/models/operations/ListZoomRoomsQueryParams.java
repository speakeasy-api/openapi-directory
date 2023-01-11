package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListZoomRoomsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_id")
    public String locationId;
    public ListZoomRoomsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListZoomRoomsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListZoomRoomsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListZoomRoomsStatusEnum status;
    public ListZoomRoomsQueryParams withStatus(ListZoomRoomsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListZoomRoomsTypeEnum type;
    public ListZoomRoomsQueryParams withType(ListZoomRoomsTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unassigned_rooms")
    public Boolean unassignedRooms;
    public ListZoomRoomsQueryParams withUnassignedRooms(Boolean unassignedRooms) {
        this.unassignedRooms = unassignedRooms;
        return this;
    }
}