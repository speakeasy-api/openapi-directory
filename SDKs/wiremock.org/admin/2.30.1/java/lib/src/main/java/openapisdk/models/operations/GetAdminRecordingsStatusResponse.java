package openapisdk.models.operations;



public class GetAdminRecordingsStatusResponse {
    public String contentType;
    public GetAdminRecordingsStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdminRecordingsStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAdminRecordingsStatus200ApplicationJson getAdminRecordingsStatus200ApplicationJSONObject;
    public GetAdminRecordingsStatusResponse withGetAdminRecordingsStatus200ApplicationJsonObject(GetAdminRecordingsStatus200ApplicationJson getAdminRecordingsStatus200ApplicationJSONObject) {
        this.getAdminRecordingsStatus200ApplicationJSONObject = getAdminRecordingsStatus200ApplicationJSONObject;
        return this;
    }
}