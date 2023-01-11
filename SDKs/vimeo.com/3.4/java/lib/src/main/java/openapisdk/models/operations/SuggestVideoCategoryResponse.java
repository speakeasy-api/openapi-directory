package openapisdk.models.operations;



public class SuggestVideoCategoryResponse {
    public String contentType;
    public SuggestVideoCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SuggestVideoCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category category;
    public SuggestVideoCategoryResponse withCategory(openapisdk.models.shared.Category category) {
        this.category = category;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public SuggestVideoCategoryResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}