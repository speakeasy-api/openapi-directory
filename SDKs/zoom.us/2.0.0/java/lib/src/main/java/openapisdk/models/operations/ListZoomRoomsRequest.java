package openapisdk.models.operations;



public class ListZoomRoomsRequest {
    public ListZoomRoomsQueryParams queryParams;
    public ListZoomRoomsRequest withQueryParams(ListZoomRoomsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListZoomRoomsSecurity security;
    public ListZoomRoomsRequest withSecurity(ListZoomRoomsSecurity security) {
        this.security = security;
        return this;
    }
}