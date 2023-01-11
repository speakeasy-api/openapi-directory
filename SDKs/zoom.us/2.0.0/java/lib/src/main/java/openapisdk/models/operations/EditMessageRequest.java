package openapisdk.models.operations;



public class EditMessageRequest {
    public EditMessagePathParams pathParams;
    public EditMessageRequest withPathParams(EditMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EditMessageRequests request;
    public EditMessageRequest withRequest(EditMessageRequests request) {
        this.request = request;
        return this;
    }
    public EditMessageSecurity security;
    public EditMessageRequest withSecurity(EditMessageSecurity security) {
        this.security = security;
        return this;
    }
}