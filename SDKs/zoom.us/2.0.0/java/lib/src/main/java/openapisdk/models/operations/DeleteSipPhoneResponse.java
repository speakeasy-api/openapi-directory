package openapisdk.models.operations;



public class DeleteSipPhoneResponse {
    public byte[] body;
    public DeleteSipPhoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteSipPhoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSipPhoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteSIPPhone204ApplicationJSONObject;
    public DeleteSipPhoneResponse withDeleteSipPhone204ApplicationJsonObject(java.util.Map<String, Object> deleteSIPPhone204ApplicationJSONObject) {
        this.deleteSIPPhone204ApplicationJSONObject = deleteSIPPhone204ApplicationJSONObject;
        return this;
    }
}