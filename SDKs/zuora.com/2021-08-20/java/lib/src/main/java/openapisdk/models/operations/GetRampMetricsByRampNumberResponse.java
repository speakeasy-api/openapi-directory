package openapisdk.models.operations;



public class GetRampMetricsByRampNumberResponse {
    public String contentType;
    public GetRampMetricsByRampNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRampMetricsByRampNumberResponseType getRampMetricsByRampNumberResponseType;
    public GetRampMetricsByRampNumberResponse withGetRampMetricsByRampNumberResponseType(openapisdk.models.shared.GetRampMetricsByRampNumberResponseType getRampMetricsByRampNumberResponseType) {
        this.getRampMetricsByRampNumberResponseType = getRampMetricsByRampNumberResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRampMetricsByRampNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRampMetricsByRampNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}