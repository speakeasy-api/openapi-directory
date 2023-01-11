package openapisdk.models.operations;



public class UpdateNsxvControllerClusterResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateNsxvControllerClusterResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateNsxvControllerClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NsxControllerDataCollection nsxControllerDataCollection;
    public UpdateNsxvControllerClusterResponse withNsxControllerDataCollection(openapisdk.models.shared.NsxControllerDataCollection nsxControllerDataCollection) {
        this.nsxControllerDataCollection = nsxControllerDataCollection;
        return this;
    }
    public Long statusCode;
    public UpdateNsxvControllerClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}