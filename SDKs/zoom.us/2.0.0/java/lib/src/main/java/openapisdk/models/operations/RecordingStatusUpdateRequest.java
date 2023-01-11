package openapisdk.models.operations;



public class RecordingStatusUpdateRequest {
    public RecordingStatusUpdatePathParams pathParams;
    public RecordingStatusUpdateRequest withPathParams(RecordingStatusUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingStatusUpdateRequests request;
    public RecordingStatusUpdateRequest withRequest(RecordingStatusUpdateRequests request) {
        this.request = request;
        return this;
    }
    public RecordingStatusUpdateSecurity security;
    public RecordingStatusUpdateRequest withSecurity(RecordingStatusUpdateSecurity security) {
        this.security = security;
        return this;
    }
}