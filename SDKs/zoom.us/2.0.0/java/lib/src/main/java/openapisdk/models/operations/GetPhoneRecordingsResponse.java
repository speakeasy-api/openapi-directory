package openapisdk.models.operations;



public class GetPhoneRecordingsResponse {
    public byte[] body;
    public GetPhoneRecordingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPhoneRecordingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhoneRecordingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPhoneRecordings200ApplicationJson getPhoneRecordings200ApplicationJSONObject;
    public GetPhoneRecordingsResponse withGetPhoneRecordings200ApplicationJsonObject(GetPhoneRecordings200ApplicationJson getPhoneRecordings200ApplicationJSONObject) {
        this.getPhoneRecordings200ApplicationJSONObject = getPhoneRecordings200ApplicationJSONObject;
        return this;
    }
    public Object getPhoneRecordings400ApplicationJSONAny;
    public GetPhoneRecordingsResponse withGetPhoneRecordings400ApplicationJsonAny(Object getPhoneRecordings400ApplicationJSONAny) {
        this.getPhoneRecordings400ApplicationJSONAny = getPhoneRecordings400ApplicationJSONAny;
        return this;
    }
}