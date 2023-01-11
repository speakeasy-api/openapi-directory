package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneUsers200ApplicationJsonUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_plans")
    public ListPhoneUsers200ApplicationJsonUsersCallingPlans[] callingPlans;
    public ListPhoneUsers200ApplicationJsonUsers withCallingPlans(ListPhoneUsers200ApplicationJsonUsersCallingPlans[] callingPlans) {
        this.callingPlans = callingPlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ListPhoneUsers200ApplicationJsonUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public ListPhoneUsers200ApplicationJsonUsers withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListPhoneUsers200ApplicationJsonUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPhoneUsers200ApplicationJsonUsers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_user_id")
    public String phoneUserId;
    public ListPhoneUsers200ApplicationJsonUsers withPhoneUserId(String phoneUserId) {
        this.phoneUserId = phoneUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListPhoneUsers200ApplicationJsonUsersSite site;
    public ListPhoneUsers200ApplicationJsonUsers withSite(ListPhoneUsers200ApplicationJsonUsersSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ListPhoneUsers200ApplicationJsonUsers withStatus(String status) {
        this.status = status;
        return this;
    }
}