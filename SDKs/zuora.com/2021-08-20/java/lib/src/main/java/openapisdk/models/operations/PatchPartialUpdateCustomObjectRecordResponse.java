package openapisdk.models.operations;



public class PatchPartialUpdateCustomObjectRecordResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public PatchPartialUpdateCustomObjectRecordResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public PatchPartialUpdateCustomObjectRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customObjectRecordWithAllFields;
    public PatchPartialUpdateCustomObjectRecordResponse withCustomObjectRecordWithAllFields(java.util.Map<String, Object> customObjectRecordWithAllFields) {
        this.customObjectRecordWithAllFields = customObjectRecordWithAllFields;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchPartialUpdateCustomObjectRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchPartialUpdateCustomObjectRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}