package openapisdk.models.operations;



public class RecordingDeleteOneRequest {
    public RecordingDeleteOnePathParams pathParams;
    public RecordingDeleteOneRequest withPathParams(RecordingDeleteOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingDeleteOneQueryParams queryParams;
    public RecordingDeleteOneRequest withQueryParams(RecordingDeleteOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RecordingDeleteOneSecurity security;
    public RecordingDeleteOneRequest withSecurity(RecordingDeleteOneSecurity security) {
        this.security = security;
        return this;
    }
}