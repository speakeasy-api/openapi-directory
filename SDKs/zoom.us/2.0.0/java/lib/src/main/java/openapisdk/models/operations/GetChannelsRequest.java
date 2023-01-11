package openapisdk.models.operations;



public class GetChannelsRequest {
    public GetChannelsPathParams pathParams;
    public GetChannelsRequest withPathParams(GetChannelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChannelsQueryParams queryParams;
    public GetChannelsRequest withQueryParams(GetChannelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChannelsSecurity security;
    public GetChannelsRequest withSecurity(GetChannelsSecurity security) {
        this.security = security;
        return this;
    }
}