package openapisdk.models.operations;



public class GetAristaSwitchRequest {
    public GetAristaSwitchPathParams pathParams;
    public GetAristaSwitchRequest withPathParams(GetAristaSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAristaSwitchSecurity security;
    public GetAristaSwitchRequest withSecurity(GetAristaSwitchSecurity security) {
        this.security = security;
        return this;
    }
}