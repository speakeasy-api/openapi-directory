package openapisdk.models.operations;



public class GetWatchLaterQueueAlt1Response {
    public String contentType;
    public GetWatchLaterQueueAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWatchLaterQueueAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetWatchLaterQueueAlt1Response withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}