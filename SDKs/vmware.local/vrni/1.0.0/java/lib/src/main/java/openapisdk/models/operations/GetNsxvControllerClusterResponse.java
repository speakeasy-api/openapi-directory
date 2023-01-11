package openapisdk.models.operations;



public class GetNsxvControllerClusterResponse {
    public String contentType;
    public GetNsxvControllerClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NsxControllerDataCollection nsxControllerDataCollection;
    public GetNsxvControllerClusterResponse withNsxControllerDataCollection(openapisdk.models.shared.NsxControllerDataCollection nsxControllerDataCollection) {
        this.nsxControllerDataCollection = nsxControllerDataCollection;
        return this;
    }
    public Long statusCode;
    public GetNsxvControllerClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}