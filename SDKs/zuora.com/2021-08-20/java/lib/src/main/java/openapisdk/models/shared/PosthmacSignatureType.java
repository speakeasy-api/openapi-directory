package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosthmacSignatureType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountKey")
    public String accountKey;
    public PosthmacSignatureType withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public PosthmacSignatureType withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PosthmacSignatureType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageId")
    public String pageId;
    public PosthmacSignatureType withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PosthmacSignatureType withUri(String uri) {
        this.uri = uri;
        return this;
    }
}