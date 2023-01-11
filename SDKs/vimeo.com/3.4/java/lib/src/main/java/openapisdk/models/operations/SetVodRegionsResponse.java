package openapisdk.models.operations;



public class SetVodRegionsResponse {
    public String contentType;
    public SetVodRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetVodRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public SetVodRegionsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion onDemandRegion;
    public SetVodRegionsResponse withOnDemandRegion(openapisdk.models.shared.OnDemandRegion onDemandRegion) {
        this.onDemandRegion = onDemandRegion;
        return this;
    }
}