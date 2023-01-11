package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserUpdateApplicationJson
 * The user update object represents a user on Zoom.
**/
public class UserUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cms_user_id")
    public String cmsUserId;
    public UserUpdateApplicationJson withCmsUserId(String cmsUserId) {
        this.cmsUserId = cmsUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public UserUpdateApplicationJson withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attributes")
    public UserUpdateApplicationJsonCustomAttributes customAttributes;
    public UserUpdateApplicationJson withCustomAttributes(UserUpdateApplicationJsonCustomAttributes customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public UserUpdateApplicationJson withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UserUpdateApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public String groupId;
    public UserUpdateApplicationJson withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_key")
    public String hostKey;
    public UserUpdateApplicationJson withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public UserUpdateApplicationJson withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UserUpdateApplicationJson withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UserUpdateApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public UserUpdateApplicationJson withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public String manager;
    public UserUpdateApplicationJson withManager(String manager) {
        this.manager = manager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_country")
    public String phoneCountry;
    public UserUpdateApplicationJson withPhoneCountry(String phoneCountry) {
        this.phoneCountry = phoneCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public UserUpdateApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public UserUpdateApplicationJsonPhoneNumbers phoneNumbers;
    public UserUpdateApplicationJson withPhoneNumbers(UserUpdateApplicationJsonPhoneNumbers phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public UserUpdateApplicationJson withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UserUpdateApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public UserUpdateApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public UserUpdateApplicationJson withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vanity_name")
    public String vanityName;
    public UserUpdateApplicationJson withVanityName(String vanityName) {
        this.vanityName = vanityName;
        return this;
    }
}