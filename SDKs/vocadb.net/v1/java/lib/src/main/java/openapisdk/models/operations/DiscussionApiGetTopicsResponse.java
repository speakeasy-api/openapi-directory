package openapisdk.models.operations;



public class DiscussionApiGetTopicsResponse {
    public byte[] body;
    public DiscussionApiGetTopicsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DiscussionApiGetTopicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultDiscussionTopicContract partialFindResultDiscussionTopicContract;
    public DiscussionApiGetTopicsResponse withPartialFindResultDiscussionTopicContract(openapisdk.models.shared.PartialFindResultDiscussionTopicContract partialFindResultDiscussionTopicContract) {
        this.partialFindResultDiscussionTopicContract = partialFindResultDiscussionTopicContract;
        return this;
    }
    public Long statusCode;
    public DiscussionApiGetTopicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}