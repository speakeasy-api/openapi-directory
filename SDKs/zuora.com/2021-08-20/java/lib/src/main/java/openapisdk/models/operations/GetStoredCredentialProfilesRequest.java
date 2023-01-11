package openapisdk.models.operations;



public class GetStoredCredentialProfilesRequest {
    public GetStoredCredentialProfilesPathParams pathParams;
    public GetStoredCredentialProfilesRequest withPathParams(GetStoredCredentialProfilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStoredCredentialProfilesQueryParams queryParams;
    public GetStoredCredentialProfilesRequest withQueryParams(GetStoredCredentialProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStoredCredentialProfilesHeaders headers;
    public GetStoredCredentialProfilesRequest withHeaders(GetStoredCredentialProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}