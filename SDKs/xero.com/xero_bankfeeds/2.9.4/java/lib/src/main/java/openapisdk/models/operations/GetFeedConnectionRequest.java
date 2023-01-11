package openapisdk.models.operations;



public class GetFeedConnectionRequest {
    public GetFeedConnectionPathParams pathParams;
    public GetFeedConnectionRequest withPathParams(GetFeedConnectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeedConnectionHeaders headers;
    public GetFeedConnectionRequest withHeaders(GetFeedConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetFeedConnectionSecurity security;
    public GetFeedConnectionRequest withSecurity(GetFeedConnectionSecurity security) {
        this.security = security;
        return this;
    }
}