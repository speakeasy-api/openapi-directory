package openapisdk.models.operations;



public class GetDataQueryJobResponse {
    public String contentType;
    public GetDataQueryJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse;
    public GetDataQueryJobResponse withDataQueryErrorResponse(openapisdk.models.shared.DataQueryErrorResponse dataQueryErrorResponse) {
        this.dataQueryErrorResponse = dataQueryErrorResponse;
        return this;
    }
    public openapisdk.models.shared.GetDataQueryJobResponse getDataQueryJobResponse;
    public GetDataQueryJobResponse withGetDataQueryJobResponse(openapisdk.models.shared.GetDataQueryJobResponse getDataQueryJobResponse) {
        this.getDataQueryJobResponse = getDataQueryJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDataQueryJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDataQueryJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}