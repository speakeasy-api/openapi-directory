package openapisdk.models.operations;



public class GetNodeResponse {
    public String contentType;
    public GetNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Node node;
    public GetNodeResponse withNode(openapisdk.models.shared.Node node) {
        this.node = node;
        return this;
    }
    public Long statusCode;
    public GetNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}