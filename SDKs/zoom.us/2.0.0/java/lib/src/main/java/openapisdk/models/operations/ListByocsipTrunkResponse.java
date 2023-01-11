package openapisdk.models.operations;



public class ListByocsipTrunkResponse {
    public byte[] body;
    public ListByocsipTrunkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListByocsipTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListByocsipTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListByocsipTrunk200ApplicationJson listBYOCSIPTrunk200ApplicationJSONObject;
    public ListByocsipTrunkResponse withListByocsipTrunk200ApplicationJsonObject(ListByocsipTrunk200ApplicationJson listBYOCSIPTrunk200ApplicationJSONObject) {
        this.listBYOCSIPTrunk200ApplicationJSONObject = listBYOCSIPTrunk200ApplicationJSONObject;
        return this;
    }
}