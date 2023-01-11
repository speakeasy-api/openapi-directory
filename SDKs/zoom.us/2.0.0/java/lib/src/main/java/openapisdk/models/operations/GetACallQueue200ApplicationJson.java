package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACallQueue200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetACallQueue200ApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetACallQueue200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public GetACallQueue200ApplicationJsonMembers members;
    public GetACallQueue200ApplicationJson withMembers(GetACallQueue200ApplicationJsonMembers members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetACallQueue200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public GetACallQueue200ApplicationJsonPhoneNumbers[] phoneNumbers;
    public GetACallQueue200ApplicationJson withPhoneNumbers(GetACallQueue200ApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetACallQueue200ApplicationJsonSite site;
    public GetACallQueue200ApplicationJson withSite(GetACallQueue200ApplicationJsonSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetACallQueue200ApplicationJsonStatusEnum status;
    public GetACallQueue200ApplicationJson withStatus(GetACallQueue200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}