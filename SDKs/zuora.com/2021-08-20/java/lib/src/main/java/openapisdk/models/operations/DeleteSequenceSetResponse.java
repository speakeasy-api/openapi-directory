package openapisdk.models.operations;



public class DeleteSequenceSetResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteSequenceSetResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteSequenceSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteSequenceSetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteSequenceSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}