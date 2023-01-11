package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUser200ApplicationJson
 * Zoom User Profile
**/
public class PhoneUser200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_plan")
    public PhoneUser200ApplicationJsonCallingPlan[] callingPlan;
    public PhoneUser200ApplicationJson withCallingPlan(PhoneUser200ApplicationJsonCallingPlan[] callingPlan) {
        this.callingPlan = callingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PhoneUser200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public PhoneUser200ApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneUser200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneUser200ApplicationJsonPhoneNumbers[] phoneNumbers;
    public PhoneUser200ApplicationJson withPhoneNumbers(PhoneUser200ApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_user_id")
    public String phoneUserId;
    public PhoneUser200ApplicationJson withPhoneUserId(String phoneUserId) {
        this.phoneUserId = phoneUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public PhoneUser200ApplicationJson withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public PhoneUser200ApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PhoneUser200ApplicationJsonStatusEnum status;
    public PhoneUser200ApplicationJson withStatus(PhoneUser200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}