package openapisdk.models.operations;



public class UserApiPostReportResponse {
    public byte[] body;
    public UserApiPostReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiPostReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiPostReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean userApiPostReport200ApplicationJSONBoolean;
    public UserApiPostReportResponse withUserApiPostReport200ApplicationJsonBoolean(Boolean userApiPostReport200ApplicationJSONBoolean) {
        this.userApiPostReport200ApplicationJSONBoolean = userApiPostReport200ApplicationJSONBoolean;
        return this;
    }
    public Boolean userApiPostReport200ApplicationJsonpBoolean;
    public UserApiPostReportResponse withUserApiPostReport200ApplicationJsonpBoolean(Boolean userApiPostReport200ApplicationJsonpBoolean) {
        this.userApiPostReport200ApplicationJsonpBoolean = userApiPostReport200ApplicationJsonpBoolean;
        return this;
    }
    public Boolean userApiPostReport200TextJSONBoolean;
    public UserApiPostReportResponse withUserApiPostReport200TextJsonBoolean(Boolean userApiPostReport200TextJSONBoolean) {
        this.userApiPostReport200TextJSONBoolean = userApiPostReport200TextJSONBoolean;
        return this;
    }
}