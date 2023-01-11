package openapisdk.models.operations;



public class ObjectsGetObjectsByObjectIdsRequest {
    public ObjectsGetObjectsByObjectIdsPathParams pathParams;
    public ObjectsGetObjectsByObjectIdsRequest withPathParams(ObjectsGetObjectsByObjectIdsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectsGetObjectsByObjectIdsQueryParams queryParams;
    public ObjectsGetObjectsByObjectIdsRequest withQueryParams(ObjectsGetObjectsByObjectIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectsGetObjectsByObjectIdsRequests request;
    public ObjectsGetObjectsByObjectIdsRequest withRequest(ObjectsGetObjectsByObjectIdsRequests request) {
        this.request = request;
        return this;
    }
}