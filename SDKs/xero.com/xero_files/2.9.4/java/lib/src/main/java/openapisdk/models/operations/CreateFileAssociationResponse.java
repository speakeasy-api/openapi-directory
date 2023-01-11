package openapisdk.models.operations;



public class CreateFileAssociationResponse {
    public openapisdk.models.shared.Association association;
    public CreateFileAssociationResponse withAssociation(openapisdk.models.shared.Association association) {
        this.association = association;
        return this;
    }
    public String contentType;
    public CreateFileAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFileAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}