package openapisdk.models.operations;



public class DashboardCrcResponse {
    public byte[] body;
    public DashboardCrcResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardCrcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardCrcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardCrc200ApplicationJson dashboardCRC200ApplicationJSONObject;
    public DashboardCrcResponse withDashboardCrc200ApplicationJsonObject(DashboardCrc200ApplicationJson dashboardCRC200ApplicationJSONObject) {
        this.dashboardCRC200ApplicationJSONObject = dashboardCRC200ApplicationJSONObject;
        return this;
    }
}