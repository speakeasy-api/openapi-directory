package openapisdk.models.operations;



public class GetNameResponse {
    public String contentType;
    public GetNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityName entityName;
    public GetNameResponse withEntityName(openapisdk.models.shared.EntityName entityName) {
        this.entityName = entityName;
        return this;
    }
    public Long statusCode;
    public GetNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}