package openapisdk.models.operations;



public class ReportSignInSignOutActivitiesResponse {
    public byte[] body;
    public ReportSignInSignOutActivitiesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportSignInSignOutActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportSignInSignOutActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportSignInSignOutActivities200ApplicationJson reportSignInSignOutActivities200ApplicationJSONObject;
    public ReportSignInSignOutActivitiesResponse withReportSignInSignOutActivities200ApplicationJsonObject(ReportSignInSignOutActivities200ApplicationJson reportSignInSignOutActivities200ApplicationJSONObject) {
        this.reportSignInSignOutActivities200ApplicationJSONObject = reportSignInSignOutActivities200ApplicationJSONObject;
        return this;
    }
}