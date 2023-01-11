package openapisdk.models.operations;



public class ReportCloudRecordingRequest {
    public ReportCloudRecordingQueryParams queryParams;
    public ReportCloudRecordingRequest withQueryParams(ReportCloudRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportCloudRecordingSecurity security;
    public ReportCloudRecordingRequest withSecurity(ReportCloudRecordingSecurity security) {
        this.security = security;
        return this;
    }
}