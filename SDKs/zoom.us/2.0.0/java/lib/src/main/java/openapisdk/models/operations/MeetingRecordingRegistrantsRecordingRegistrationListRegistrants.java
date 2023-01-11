package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantsRecordingRegistrationListRegistrants
 * Registrant base object.
**/
public class MeetingRecordingRegistrantsRecordingRegistrationListRegistrants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions[] customQuestions;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withCustomQuestions(MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industry")
    public String industry;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_of_employees")
    public String noOfEmployees;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasing_time_frame")
    public String purchasingTimeFrame;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_in_purchase_process")
    public String roleInPurchaseProcess;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrants withZip(String zip) {
        this.zip = zip;
        return this;
    }
}