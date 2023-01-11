package openapisdk.models.operations;



public class UnlikeVideoRequest {
    public UnlikeVideoPathParams pathParams;
    public UnlikeVideoRequest withPathParams(UnlikeVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnlikeVideoSecurity security;
    public UnlikeVideoRequest withSecurity(UnlikeVideoSecurity security) {
        this.security = security;
        return this;
    }
}