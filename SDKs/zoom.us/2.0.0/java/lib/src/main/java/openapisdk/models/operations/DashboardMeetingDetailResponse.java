package openapisdk.models.operations;



public class DashboardMeetingDetailResponse {
    public byte[] body;
    public DashboardMeetingDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardMeetingDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DashboardMeetingDetailMeetingMetrics meetingMetrics;
    public DashboardMeetingDetailResponse withMeetingMetrics(DashboardMeetingDetailMeetingMetrics meetingMetrics) {
        this.meetingMetrics = meetingMetrics;
        return this;
    }
    public Long statusCode;
    public DashboardMeetingDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}