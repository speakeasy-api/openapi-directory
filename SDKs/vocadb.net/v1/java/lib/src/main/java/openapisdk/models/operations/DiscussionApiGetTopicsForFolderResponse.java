package openapisdk.models.operations;



public class DiscussionApiGetTopicsForFolderResponse {
    public byte[] body;
    public DiscussionApiGetTopicsForFolderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DiscussionApiGetTopicsForFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscussionTopicContract[] discussionTopicContracts;
    public DiscussionApiGetTopicsForFolderResponse withDiscussionTopicContracts(openapisdk.models.shared.DiscussionTopicContract[] discussionTopicContracts) {
        this.discussionTopicContracts = discussionTopicContracts;
        return this;
    }
    public Long statusCode;
    public DiscussionApiGetTopicsForFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}