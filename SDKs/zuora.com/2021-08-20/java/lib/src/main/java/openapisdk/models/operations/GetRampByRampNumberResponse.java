package openapisdk.models.operations;



public class GetRampByRampNumberResponse {
    public String contentType;
    public GetRampByRampNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRampByRampNumberResponseType getRampByRampNumberResponseType;
    public GetRampByRampNumberResponse withGetRampByRampNumberResponseType(openapisdk.models.shared.GetRampByRampNumberResponseType getRampByRampNumberResponseType) {
        this.getRampByRampNumberResponseType = getRampByRampNumberResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRampByRampNumberResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRampByRampNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}