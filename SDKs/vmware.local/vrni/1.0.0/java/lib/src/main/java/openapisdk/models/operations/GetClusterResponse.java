package openapisdk.models.operations;



public class GetClusterResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetClusterResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.Cluster cluster;
    public GetClusterResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public GetClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}