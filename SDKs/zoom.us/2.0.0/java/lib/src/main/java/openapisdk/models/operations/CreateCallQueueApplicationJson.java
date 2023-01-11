package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCallQueueApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateCallQueueApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public CreateCallQueueApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public CreateCallQueueApplicationJsonMembers members;
    public CreateCallQueueApplicationJson withMembers(CreateCallQueueApplicationJsonMembers members) {
        this.members = members;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateCallQueueApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("site_id")
    public String siteId;
    public CreateCallQueueApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}