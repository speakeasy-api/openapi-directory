package openapisdk.models.operations;



public class CreateASharedLineGroupResponse {
    public byte[] body;
    public CreateASharedLineGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateASharedLineGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateASharedLineGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createASharedLineGroup200ApplicationJSONAny;
    public CreateASharedLineGroupResponse withCreateASharedLineGroup200ApplicationJsonAny(Object createASharedLineGroup200ApplicationJSONAny) {
        this.createASharedLineGroup200ApplicationJSONAny = createASharedLineGroup200ApplicationJSONAny;
        return this;
    }
}