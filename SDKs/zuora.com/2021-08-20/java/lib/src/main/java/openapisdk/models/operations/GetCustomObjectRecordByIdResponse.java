package openapisdk.models.operations;



public class GetCustomObjectRecordByIdResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public GetCustomObjectRecordByIdResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public GetCustomObjectRecordByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customObjectRecordWithAllFields;
    public GetCustomObjectRecordByIdResponse withCustomObjectRecordWithAllFields(java.util.Map<String, Object> customObjectRecordWithAllFields) {
        this.customObjectRecordWithAllFields = customObjectRecordWithAllFields;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomObjectRecordByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomObjectRecordByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}