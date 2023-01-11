package openapisdk.models.operations;



public class ListNodesResponse {
    public String contentType;
    public ListNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NodeListResult nodeListResult;
    public ListNodesResponse withNodeListResult(openapisdk.models.shared.NodeListResult nodeListResult) {
        this.nodeListResult = nodeListResult;
        return this;
    }
    public Long statusCode;
    public ListNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}