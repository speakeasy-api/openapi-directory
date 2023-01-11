package openapisdk.models.operations;



public class DiscussionApiGetFoldersResponse {
    public byte[] body;
    public DiscussionApiGetFoldersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DiscussionApiGetFoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscussionFolderContract[] discussionFolderContracts;
    public DiscussionApiGetFoldersResponse withDiscussionFolderContracts(openapisdk.models.shared.DiscussionFolderContract[] discussionFolderContracts) {
        this.discussionFolderContracts = discussionFolderContracts;
        return this;
    }
    public Long statusCode;
    public DiscussionApiGetFoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}