package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAttachmentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutAttachmentType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public PutAttachmentType withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
}