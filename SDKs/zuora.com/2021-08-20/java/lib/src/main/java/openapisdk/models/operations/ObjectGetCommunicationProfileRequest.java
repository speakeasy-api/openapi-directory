package openapisdk.models.operations;



public class ObjectGetCommunicationProfileRequest {
    public ObjectGetCommunicationProfilePathParams pathParams;
    public ObjectGetCommunicationProfileRequest withPathParams(ObjectGetCommunicationProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetCommunicationProfileQueryParams queryParams;
    public ObjectGetCommunicationProfileRequest withQueryParams(ObjectGetCommunicationProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetCommunicationProfileHeaders headers;
    public ObjectGetCommunicationProfileRequest withHeaders(ObjectGetCommunicationProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}