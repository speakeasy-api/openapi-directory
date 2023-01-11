package openapisdk.models.operations;



public class GetEntitiesUserAccessibleResponse {
    public String contentType;
    public GetEntitiesUserAccessibleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntitiesUserAccessibleResponseType getEntitiesUserAccessibleResponseType;
    public GetEntitiesUserAccessibleResponse withGetEntitiesUserAccessibleResponseType(openapisdk.models.shared.GetEntitiesUserAccessibleResponseType getEntitiesUserAccessibleResponseType) {
        this.getEntitiesUserAccessibleResponseType = getEntitiesUserAccessibleResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEntitiesUserAccessibleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEntitiesUserAccessibleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}