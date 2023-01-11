package openapisdk.models.operations;



public class PutCustomObjectRecordResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public PutCustomObjectRecordResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public PutCustomObjectRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customObjectRecordWithAllFields;
    public PutCustomObjectRecordResponse withCustomObjectRecordWithAllFields(java.util.Map<String, Object> customObjectRecordWithAllFields) {
        this.customObjectRecordWithAllFields = customObjectRecordWithAllFields;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCustomObjectRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCustomObjectRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}