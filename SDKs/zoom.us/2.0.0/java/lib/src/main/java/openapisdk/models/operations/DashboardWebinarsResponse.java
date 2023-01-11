package openapisdk.models.operations;



public class DashboardWebinarsResponse {
    public byte[] body;
    public DashboardWebinarsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardWebinars200ApplicationJson dashboardWebinars200ApplicationJSONObject;
    public DashboardWebinarsResponse withDashboardWebinars200ApplicationJsonObject(DashboardWebinars200ApplicationJson dashboardWebinars200ApplicationJSONObject) {
        this.dashboardWebinars200ApplicationJSONObject = dashboardWebinars200ApplicationJSONObject;
        return this;
    }
}