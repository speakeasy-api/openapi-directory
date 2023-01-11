package openapisdk.models.operations;



public class ListSharedLineGroupsResponse {
    public byte[] body;
    public ListSharedLineGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListSharedLineGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSharedLineGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListSharedLineGroups200ApplicationJson listSharedLineGroups200ApplicationJSONObject;
    public ListSharedLineGroupsResponse withListSharedLineGroups200ApplicationJsonObject(ListSharedLineGroups200ApplicationJson listSharedLineGroups200ApplicationJSONObject) {
        this.listSharedLineGroups200ApplicationJSONObject = listSharedLineGroups200ApplicationJSONObject;
        return this;
    }
}