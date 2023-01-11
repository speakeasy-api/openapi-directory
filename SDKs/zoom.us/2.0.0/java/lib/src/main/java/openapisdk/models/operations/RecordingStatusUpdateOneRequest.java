package openapisdk.models.operations;



public class RecordingStatusUpdateOneRequest {
    public RecordingStatusUpdateOnePathParams pathParams;
    public RecordingStatusUpdateOneRequest withPathParams(RecordingStatusUpdateOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingStatusUpdateOneRequests request;
    public RecordingStatusUpdateOneRequest withRequest(RecordingStatusUpdateOneRequests request) {
        this.request = request;
        return this;
    }
    public RecordingStatusUpdateOneSecurity security;
    public RecordingStatusUpdateOneRequest withSecurity(RecordingStatusUpdateOneSecurity security) {
        this.security = security;
        return this;
    }
}