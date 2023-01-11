package openapisdk.models.operations;



public class DashboardClientFeedbackDetailResponse {
    public byte[] body;
    public DashboardClientFeedbackDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardClientFeedbackDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardClientFeedbackDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardClientFeedbackDetail200ApplicationJson dashboardClientFeedbackDetail200ApplicationJSONObject;
    public DashboardClientFeedbackDetailResponse withDashboardClientFeedbackDetail200ApplicationJsonObject(DashboardClientFeedbackDetail200ApplicationJson dashboardClientFeedbackDetail200ApplicationJSONObject) {
        this.dashboardClientFeedbackDetail200ApplicationJSONObject = dashboardClientFeedbackDetail200ApplicationJSONObject;
        return this;
    }
}