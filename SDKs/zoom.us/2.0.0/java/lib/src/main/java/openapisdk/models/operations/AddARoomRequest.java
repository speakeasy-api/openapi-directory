package openapisdk.models.operations;



public class AddARoomRequest {
    public AddARoomRequests request;
    public AddARoomRequest withRequest(AddARoomRequests request) {
        this.request = request;
        return this;
    }
    public AddARoomSecurity security;
    public AddARoomRequest withSecurity(AddARoomSecurity security) {
        this.security = security;
        return this;
    }
}