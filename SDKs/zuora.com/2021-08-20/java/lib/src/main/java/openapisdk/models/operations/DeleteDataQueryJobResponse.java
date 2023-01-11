package openapisdk.models.operations;



public class DeleteDataQueryJobResponse {
    public String contentType;
    public DeleteDataQueryJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse;
    public DeleteDataQueryJobResponse withDataQueryErrorResponse(openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse) {
        this.dataQueryErrorResponse = dataQueryErrorResponse;
        return this;
    }
    public openapisdk.models.shared.DeleteDataQueryJobResponse deleteDataQueryJobResponse;
    public DeleteDataQueryJobResponse withDeleteDataQueryJobResponse(openapisdk.models.shared.DeleteDataQueryJobResponse deleteDataQueryJobResponse) {
        this.deleteDataQueryJobResponse = deleteDataQueryJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteDataQueryJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteDataQueryJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}