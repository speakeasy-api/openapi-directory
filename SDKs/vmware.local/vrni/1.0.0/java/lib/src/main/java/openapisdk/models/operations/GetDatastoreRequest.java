package openapisdk.models.operations;



public class GetDatastoreRequest {
    public GetDatastorePathParams pathParams;
    public GetDatastoreRequest withPathParams(GetDatastorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDatastoreQueryParams queryParams;
    public GetDatastoreRequest withQueryParams(GetDatastoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDatastoreSecurity security;
    public GetDatastoreRequest withSecurity(GetDatastoreSecurity security) {
        this.security = security;
        return this;
    }
}