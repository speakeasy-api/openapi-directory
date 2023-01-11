package openapisdk.models.operations;



public class PostDataQueryJobResponse {
    public String contentType;
    public PostDataQueryJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse;
    public PostDataQueryJobResponse withDataQueryErrorResponse(openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse) {
        this.dataQueryErrorResponse = dataQueryErrorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDataQueryJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDataQueryJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitDataQueryResponse submitDataQueryResponse;
    public PostDataQueryJobResponse withSubmitDataQueryResponse(openapisdk.models.shared.SubmitDataQueryResponse submitDataQueryResponse) {
        this.submitDataQueryResponse = submitDataQueryResponse;
        return this;
    }
}