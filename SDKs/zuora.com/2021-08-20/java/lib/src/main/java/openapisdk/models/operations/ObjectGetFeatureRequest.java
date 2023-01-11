package openapisdk.models.operations;



public class ObjectGetFeatureRequest {
    public ObjectGetFeaturePathParams pathParams;
    public ObjectGetFeatureRequest withPathParams(ObjectGetFeaturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetFeatureQueryParams queryParams;
    public ObjectGetFeatureRequest withQueryParams(ObjectGetFeatureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetFeatureHeaders headers;
    public ObjectGetFeatureRequest withHeaders(ObjectGetFeatureHeaders headers) {
        this.headers = headers;
        return this;
    }
}