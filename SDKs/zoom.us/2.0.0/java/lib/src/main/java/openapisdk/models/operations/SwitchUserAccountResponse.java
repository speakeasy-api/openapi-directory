package openapisdk.models.operations;



public class SwitchUserAccountResponse {
    public byte[] body;
    public SwitchUserAccountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SwitchUserAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SwitchUserAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object switchUserAccount204ApplicationJSONAny;
    public SwitchUserAccountResponse withSwitchUserAccount204ApplicationJsonAny(Object switchUserAccount204ApplicationJSONAny) {
        this.switchUserAccount204ApplicationJSONAny = switchUserAccount204ApplicationJSONAny;
        return this;
    }
}