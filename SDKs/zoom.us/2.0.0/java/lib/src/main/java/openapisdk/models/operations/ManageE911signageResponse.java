package openapisdk.models.operations;



public class ManageE911signageResponse {
    public byte[] body;
    public ManageE911signageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ManageE911signageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ManageE911signageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ManageE911signage202ApplicationJson manageE911signage202ApplicationJSONObject;
    public ManageE911signageResponse withManageE911signage202ApplicationJsonObject(ManageE911signage202ApplicationJson manageE911signage202ApplicationJSONObject) {
        this.manageE911signage202ApplicationJSONObject = manageE911signage202ApplicationJSONObject;
        return this;
    }
}