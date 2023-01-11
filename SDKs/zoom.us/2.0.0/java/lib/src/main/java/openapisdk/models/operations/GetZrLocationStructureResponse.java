package openapisdk.models.operations;



public class GetZrLocationStructureResponse {
    public byte[] body;
    public GetZrLocationStructureResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetZrLocationStructureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZrLocationStructureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetZrLocationStructure200ApplicationJson getZRLocationStructure200ApplicationJSONObject;
    public GetZrLocationStructureResponse withGetZrLocationStructure200ApplicationJsonObject(GetZrLocationStructure200ApplicationJson getZRLocationStructure200ApplicationJSONObject) {
        this.getZRLocationStructure200ApplicationJSONObject = getZRLocationStructure200ApplicationJSONObject;
        return this;
    }
}