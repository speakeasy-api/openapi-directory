package openapisdk.models.operations;



public class GetAccountCloudRecordingRequest {
    public GetAccountCloudRecordingPathParams pathParams;
    public GetAccountCloudRecordingRequest withPathParams(GetAccountCloudRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountCloudRecordingQueryParams queryParams;
    public GetAccountCloudRecordingRequest withQueryParams(GetAccountCloudRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountCloudRecordingSecurity security;
    public GetAccountCloudRecordingRequest withSecurity(GetAccountCloudRecordingSecurity security) {
        this.security = security;
        return this;
    }
}