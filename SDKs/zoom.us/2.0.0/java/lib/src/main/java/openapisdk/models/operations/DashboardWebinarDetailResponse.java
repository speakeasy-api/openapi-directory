package openapisdk.models.operations;



public class DashboardWebinarDetailResponse {
    public byte[] body;
    public DashboardWebinarDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardWebinarDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardWebinarDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardWebinarDetailWebinarMetrics webinarMetrics;
    public DashboardWebinarDetailResponse withWebinarMetrics(DashboardWebinarDetailWebinarMetrics webinarMetrics) {
        this.webinarMetrics = webinarMetrics;
        return this;
    }
}