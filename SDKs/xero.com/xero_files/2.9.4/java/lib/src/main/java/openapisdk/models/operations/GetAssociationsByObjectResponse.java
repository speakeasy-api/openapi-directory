package openapisdk.models.operations;



public class GetAssociationsByObjectResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetAssociationsByObjectResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetAssociationsByObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociationsByObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}