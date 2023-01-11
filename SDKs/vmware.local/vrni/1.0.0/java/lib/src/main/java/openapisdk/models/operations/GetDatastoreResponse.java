package openapisdk.models.operations;



public class GetDatastoreResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetDatastoreResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetDatastoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Datastore datastore;
    public GetDatastoreResponse withDatastore(openapisdk.models.shared.Datastore datastore) {
        this.datastore = datastore;
        return this;
    }
    public Long statusCode;
    public GetDatastoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}