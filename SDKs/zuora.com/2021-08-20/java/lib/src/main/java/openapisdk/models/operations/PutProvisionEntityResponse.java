package openapisdk.models.operations;



public class PutProvisionEntityResponse {
    public String contentType;
    public PutProvisionEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutProvisionEntityResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProvisionEntityResponseType provisionEntityResponseType;
    public PutProvisionEntityResponse withProvisionEntityResponseType(openapisdk.models.shared.ProvisionEntityResponseType provisionEntityResponseType) {
        this.provisionEntityResponseType = provisionEntityResponseType;
        return this;
    }
    public Long statusCode;
    public PutProvisionEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}