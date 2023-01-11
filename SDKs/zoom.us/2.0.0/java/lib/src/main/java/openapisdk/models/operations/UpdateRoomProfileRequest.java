package openapisdk.models.operations;



public class UpdateRoomProfileRequest {
    public UpdateRoomProfilePathParams pathParams;
    public UpdateRoomProfileRequest withPathParams(UpdateRoomProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRoomProfileRequests request;
    public UpdateRoomProfileRequest withRequest(UpdateRoomProfileRequests request) {
        this.request = request;
        return this;
    }
    public UpdateRoomProfileSecurity security;
    public UpdateRoomProfileRequest withSecurity(UpdateRoomProfileSecurity security) {
        this.security = security;
        return this;
    }
}