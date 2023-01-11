package openapisdk.models.operations;



public class AddBatchWebinarRegistrantsRequest {
    public AddBatchWebinarRegistrantsPathParams pathParams;
    public AddBatchWebinarRegistrantsRequest withPathParams(AddBatchWebinarRegistrantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddBatchWebinarRegistrantsRequests request;
    public AddBatchWebinarRegistrantsRequest withRequest(AddBatchWebinarRegistrantsRequests request) {
        this.request = request;
        return this;
    }
    public AddBatchWebinarRegistrantsSecurity security;
    public AddBatchWebinarRegistrantsRequest withSecurity(AddBatchWebinarRegistrantsSecurity security) {
        this.security = security;
        return this;
    }
}