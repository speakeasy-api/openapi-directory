package openapisdk.models.operations;



public class DashboardClientFeedbackResponse {
    public byte[] body;
    public DashboardClientFeedbackResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardClientFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardClientFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardClientFeedback200ApplicationJson dashboardClientFeedback200ApplicationJSONObject;
    public DashboardClientFeedbackResponse withDashboardClientFeedback200ApplicationJsonObject(DashboardClientFeedback200ApplicationJson dashboardClientFeedback200ApplicationJSONObject) {
        this.dashboardClientFeedback200ApplicationJSONObject = dashboardClientFeedback200ApplicationJSONObject;
        return this;
    }
}