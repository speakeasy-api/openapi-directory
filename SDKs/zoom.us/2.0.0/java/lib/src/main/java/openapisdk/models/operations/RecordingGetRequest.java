package openapisdk.models.operations;



public class RecordingGetRequest {
    public RecordingGetPathParams pathParams;
    public RecordingGetRequest withPathParams(RecordingGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingGetQueryParams queryParams;
    public RecordingGetRequest withQueryParams(RecordingGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RecordingGetSecurity security;
    public RecordingGetRequest withSecurity(RecordingGetSecurity security) {
        this.security = security;
        return this;
    }
}