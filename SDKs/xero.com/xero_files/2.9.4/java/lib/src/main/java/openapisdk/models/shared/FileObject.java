package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDateUtc")
    public String createdDateUtc;
    public FileObject withCreatedDateUtc(String createdDateUtc) {
        this.createdDateUtc = createdDateUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FolderId")
    public String folderId;
    public FileObject withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public FileObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MimeType")
    public String mimeType;
    public FileObject withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public FileObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Long size;
    public FileObject withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUtc")
    public String updatedDateUtc;
    public FileObject withUpdatedDateUtc(String updatedDateUtc) {
        this.updatedDateUtc = updatedDateUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public User user;
    public FileObject withUser(User user) {
        this.user = user;
        return this;
    }
}