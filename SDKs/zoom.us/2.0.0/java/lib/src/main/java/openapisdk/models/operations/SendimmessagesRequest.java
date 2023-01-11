package openapisdk.models.operations;



public class SendimmessagesRequest {
    public SendimmessagesQueryParams queryParams;
    public SendimmessagesRequest withQueryParams(SendimmessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SendimmessagesRequests request;
    public SendimmessagesRequest withRequest(SendimmessagesRequests request) {
        this.request = request;
        return this;
    }
    public SendimmessagesSecurity security;
    public SendimmessagesRequest withSecurity(SendimmessagesSecurity security) {
        this.security = security;
        return this;
    }
}