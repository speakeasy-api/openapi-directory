package openapisdk.models.operations;



public class GetRebalanceDetailsRequest {
    public GetRebalanceDetailsPathParams pathParams;
    public GetRebalanceDetailsRequest withPathParams(GetRebalanceDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRebalanceDetailsHeaders headers;
    public GetRebalanceDetailsRequest withHeaders(GetRebalanceDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetRebalanceDetailsSecurity security;
    public GetRebalanceDetailsRequest withSecurity(GetRebalanceDetailsSecurity security) {
        this.security = security;
        return this;
    }
}