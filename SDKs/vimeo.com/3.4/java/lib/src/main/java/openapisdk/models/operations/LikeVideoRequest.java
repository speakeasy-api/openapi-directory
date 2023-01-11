package openapisdk.models.operations;



public class LikeVideoRequest {
    public LikeVideoPathParams pathParams;
    public LikeVideoRequest withPathParams(LikeVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LikeVideoSecurity security;
    public LikeVideoRequest withSecurity(LikeVideoSecurity security) {
        this.security = security;
        return this;
    }
}