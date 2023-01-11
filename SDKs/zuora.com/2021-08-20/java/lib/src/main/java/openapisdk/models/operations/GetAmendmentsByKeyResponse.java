package openapisdk.models.operations;



public class GetAmendmentsByKeyResponse {
    public String contentType;
    public GetAmendmentsByKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAmendmentType getAmendmentType;
    public GetAmendmentsByKeyResponse withGetAmendmentType(openapisdk.models.shared.GetAmendmentType getAmendmentType) {
        this.getAmendmentType = getAmendmentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAmendmentsByKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAmendmentsByKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}