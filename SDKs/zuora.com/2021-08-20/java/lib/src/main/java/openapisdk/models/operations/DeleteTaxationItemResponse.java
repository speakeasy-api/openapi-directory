package openapisdk.models.operations;



public class DeleteTaxationItemResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteTaxationItemResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteTaxationItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteTaxationItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteTaxationItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}