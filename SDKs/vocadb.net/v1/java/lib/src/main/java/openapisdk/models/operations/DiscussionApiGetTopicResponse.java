package openapisdk.models.operations;



public class DiscussionApiGetTopicResponse {
    public byte[] body;
    public DiscussionApiGetTopicResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DiscussionApiGetTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscussionTopicContract discussionTopicContract;
    public DiscussionApiGetTopicResponse withDiscussionTopicContract(openapisdk.models.shared.DiscussionTopicContract discussionTopicContract) {
        this.discussionTopicContract = discussionTopicContract;
        return this;
    }
    public Long statusCode;
    public DiscussionApiGetTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}