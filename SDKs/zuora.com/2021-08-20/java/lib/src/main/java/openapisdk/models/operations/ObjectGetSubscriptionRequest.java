package openapisdk.models.operations;



public class ObjectGetSubscriptionRequest {
    public ObjectGetSubscriptionPathParams pathParams;
    public ObjectGetSubscriptionRequest withPathParams(ObjectGetSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetSubscriptionQueryParams queryParams;
    public ObjectGetSubscriptionRequest withQueryParams(ObjectGetSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetSubscriptionHeaders headers;
    public ObjectGetSubscriptionRequest withHeaders(ObjectGetSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
}