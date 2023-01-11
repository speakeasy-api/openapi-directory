package openapisdk.models.operations;



public class RecordingDeleteRequest {
    public RecordingDeletePathParams pathParams;
    public RecordingDeleteRequest withPathParams(RecordingDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingDeleteQueryParams queryParams;
    public RecordingDeleteRequest withQueryParams(RecordingDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RecordingDeleteSecurity security;
    public RecordingDeleteRequest withSecurity(RecordingDeleteSecurity security) {
        this.security = security;
        return this;
    }
}