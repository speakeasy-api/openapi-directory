package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetASharedLineGroup200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetASharedLineGroup200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetASharedLineGroup200ApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetASharedLineGroup200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public GetASharedLineGroup200ApplicationJsonMembers members;
    public GetASharedLineGroup200ApplicationJson withMembers(GetASharedLineGroup200ApplicationJsonMembers members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public GetASharedLineGroup200ApplicationJsonPhoneNumbers[] phoneNumbers;
    public GetASharedLineGroup200ApplicationJson withPhoneNumbers(GetASharedLineGroup200ApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_number")
    public String primaryNumber;
    public GetASharedLineGroup200ApplicationJson withPrimaryNumber(String primaryNumber) {
        this.primaryNumber = primaryNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetASharedLineGroup200ApplicationJsonSite site;
    public GetASharedLineGroup200ApplicationJson withSite(GetASharedLineGroup200ApplicationJsonSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetASharedLineGroup200ApplicationJsonStatusEnum status;
    public GetASharedLineGroup200ApplicationJson withStatus(GetASharedLineGroup200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public GetASharedLineGroup200ApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}