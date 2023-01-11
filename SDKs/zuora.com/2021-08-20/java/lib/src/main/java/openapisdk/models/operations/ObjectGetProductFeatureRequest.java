package openapisdk.models.operations;



public class ObjectGetProductFeatureRequest {
    public ObjectGetProductFeaturePathParams pathParams;
    public ObjectGetProductFeatureRequest withPathParams(ObjectGetProductFeaturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetProductFeatureQueryParams queryParams;
    public ObjectGetProductFeatureRequest withQueryParams(ObjectGetProductFeatureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetProductFeatureHeaders headers;
    public ObjectGetProductFeatureRequest withHeaders(ObjectGetProductFeatureHeaders headers) {
        this.headers = headers;
        return this;
    }
}