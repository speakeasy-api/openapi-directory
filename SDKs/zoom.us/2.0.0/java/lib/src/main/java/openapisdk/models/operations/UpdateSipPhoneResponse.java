package openapisdk.models.operations;



public class UpdateSipPhoneResponse {
    public byte[] body;
    public UpdateSipPhoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateSipPhoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipPhoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSIPPhone204ApplicationJSONObject;
    public UpdateSipPhoneResponse withUpdateSipPhone204ApplicationJsonObject(java.util.Map<String, Object> updateSIPPhone204ApplicationJSONObject) {
        this.updateSIPPhone204ApplicationJSONObject = updateSIPPhone204ApplicationJSONObject;
        return this;
    }
}