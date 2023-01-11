package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchCompanyContacts200ApplicationJsonContacts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public SearchCompanyContacts200ApplicationJsonContacts withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_numbers")
    public String[] directNumbers;
    public SearchCompanyContacts200ApplicationJsonContacts withDirectNumbers(String[] directNumbers) {
        this.directNumbers = directNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SearchCompanyContacts200ApplicationJsonContacts withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public SearchCompanyContacts200ApplicationJsonContacts withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public SearchCompanyContacts200ApplicationJsonContacts withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SearchCompanyContacts200ApplicationJsonContacts withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("im_group_id")
    public String imGroupId;
    public SearchCompanyContacts200ApplicationJsonContacts withImGroupId(String imGroupId) {
        this.imGroupId = imGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("im_group_name")
    public String imGroupName;
    public SearchCompanyContacts200ApplicationJsonContacts withImGroupName(String imGroupName) {
        this.imGroupName = imGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public SearchCompanyContacts200ApplicationJsonContacts withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public SearchCompanyContacts200ApplicationJsonContacts withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public SearchCompanyContacts200ApplicationJsonContacts withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public SearchCompanyContacts200ApplicationJsonContacts withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presence_status")
    public SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum presenceStatus;
    public SearchCompanyContacts200ApplicationJsonContacts withPresenceStatus(SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum presenceStatus) {
        this.presenceStatus = presenceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_phone_number")
    public String sipPhoneNumber;
    public SearchCompanyContacts200ApplicationJsonContacts withSipPhoneNumber(String sipPhoneNumber) {
        this.sipPhoneNumber = sipPhoneNumber;
        return this;
    }
}