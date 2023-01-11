package openapisdk.models.operations;



public class PutUpdateSubscriptionCustomFieldsResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutUpdateSubscriptionCustomFieldsResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutUpdateSubscriptionCustomFieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateSubscriptionCustomFieldsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateSubscriptionCustomFieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}