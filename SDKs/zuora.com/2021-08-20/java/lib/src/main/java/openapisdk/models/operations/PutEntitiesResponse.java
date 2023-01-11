package openapisdk.models.operations;



public class PutEntitiesResponse {
    public String contentType;
    public PutEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutEntitiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateEntityResponseType updateEntityResponseType;
    public PutEntitiesResponse withUpdateEntityResponseType(openapisdk.models.shared.UpdateEntityResponseType updateEntityResponseType) {
        this.updateEntityResponseType = updateEntityResponseType;
        return this;
    }
}