package openapisdk.models.operations;



public class GetWatchLaterQueueResponse {
    public String contentType;
    public GetWatchLaterQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWatchLaterQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetWatchLaterQueueResponse withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}