package openapisdk.models.operations;



public class AccountCallLogsResponse {
    public byte[] body;
    public AccountCallLogsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountCallLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCallLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountCallLogs200ApplicationJson accountCallLogs200ApplicationJSONObject;
    public AccountCallLogsResponse withAccountCallLogs200ApplicationJsonObject(AccountCallLogs200ApplicationJson accountCallLogs200ApplicationJSONObject) {
        this.accountCallLogs200ApplicationJSONObject = accountCallLogs200ApplicationJSONObject;
        return this;
    }
}