package openapisdk.models.operations;



public class UnsubscribeFromChannelAlt1Response {
    public String contentType;
    public UnsubscribeFromChannelAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnsubscribeFromChannelAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public UnsubscribeFromChannelAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}