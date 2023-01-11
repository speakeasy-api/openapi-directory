package openapisdk.models.operations;



public class RemoveVideosFromChannelResponse {
    public String contentType;
    public RemoveVideosFromChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveVideosFromChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public RemoveVideosFromChannelResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public RemoveVideosFromChannelResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}