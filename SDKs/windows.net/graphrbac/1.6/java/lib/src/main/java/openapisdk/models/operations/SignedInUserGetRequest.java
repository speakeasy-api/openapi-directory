package openapisdk.models.operations;



public class SignedInUserGetRequest {
    public SignedInUserGetPathParams pathParams;
    public SignedInUserGetRequest withPathParams(SignedInUserGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SignedInUserGetQueryParams queryParams;
    public SignedInUserGetRequest withQueryParams(SignedInUserGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}