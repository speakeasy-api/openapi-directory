package openapisdk.models.operations;



public class GetAssociationsByObjectRequest {
    public GetAssociationsByObjectPathParams pathParams;
    public GetAssociationsByObjectRequest withPathParams(GetAssociationsByObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAssociationsByObjectHeaders headers;
    public GetAssociationsByObjectRequest withHeaders(GetAssociationsByObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAssociationsByObjectSecurity security;
    public GetAssociationsByObjectRequest withSecurity(GetAssociationsByObjectSecurity security) {
        this.security = security;
        return this;
    }
}