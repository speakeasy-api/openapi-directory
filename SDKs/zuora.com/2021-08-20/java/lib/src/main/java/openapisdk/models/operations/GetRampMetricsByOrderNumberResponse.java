package openapisdk.models.operations;



public class GetRampMetricsByOrderNumberResponse {
    public String contentType;
    public GetRampMetricsByOrderNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRampMetricsByOrderNumberResponseType getRampMetricsByOrderNumberResponseType;
    public GetRampMetricsByOrderNumberResponse withGetRampMetricsByOrderNumberResponseType(openapisdk.models.shared.GetRampMetricsByOrderNumberResponseType getRampMetricsByOrderNumberResponseType) {
        this.getRampMetricsByOrderNumberResponseType = getRampMetricsByOrderNumberResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRampMetricsByOrderNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRampMetricsByOrderNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}