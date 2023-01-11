package openapisdk.models.operations;



public class PutMassUpdaterResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutMassUpdaterResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutMassUpdaterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutMassUpdaterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutMassUpdaterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}