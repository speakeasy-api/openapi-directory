package openapisdk.models.operations;



public class DashboardImResponse {
    public byte[] body;
    public DashboardImResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardImResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardImResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardIm200ApplicationJson dashboardIM200ApplicationJSONObject;
    public DashboardImResponse withDashboardIm200ApplicationJsonObject(DashboardIm200ApplicationJson dashboardIM200ApplicationJSONObject) {
        this.dashboardIM200ApplicationJSONObject = dashboardIM200ApplicationJSONObject;
        return this;
    }
}