package openapisdk.models.operations;



public class ListSipTrunkNumbersResponse {
    public byte[] body;
    public ListSipTrunkNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListSipTrunkNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSipTrunkNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListSipTrunkNumbers200ApplicationJson listSipTrunkNumbers200ApplicationJSONObject;
    public ListSipTrunkNumbersResponse withListSipTrunkNumbers200ApplicationJsonObject(ListSipTrunkNumbers200ApplicationJson listSipTrunkNumbers200ApplicationJSONObject) {
        this.listSipTrunkNumbers200ApplicationJSONObject = listSipTrunkNumbers200ApplicationJSONObject;
        return this;
    }
}