package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantCreateApplicationJson
 * Registrant base object.
**/
public class MeetingRecordingRegistrantCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingRecordingRegistrantCreateApplicationJson withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingRecordingRegistrantCreateApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public MeetingRecordingRegistrantCreateApplicationJson withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingRecordingRegistrantCreateApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions[] customQuestions;
    public MeetingRecordingRegistrantCreateApplicationJson withCustomQuestions(MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public MeetingRecordingRegistrantCreateApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public MeetingRecordingRegistrantCreateApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industry")
    public String industry;
    public MeetingRecordingRegistrantCreateApplicationJson withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public MeetingRecordingRegistrantCreateApplicationJson withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public MeetingRecordingRegistrantCreateApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_of_employees")
    public String noOfEmployees;
    public MeetingRecordingRegistrantCreateApplicationJson withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public MeetingRecordingRegistrantCreateApplicationJson withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public MeetingRecordingRegistrantCreateApplicationJson withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasing_time_frame")
    public String purchasingTimeFrame;
    public MeetingRecordingRegistrantCreateApplicationJson withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_in_purchase_process")
    public String roleInPurchaseProcess;
    public MeetingRecordingRegistrantCreateApplicationJson withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MeetingRecordingRegistrantCreateApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public MeetingRecordingRegistrantCreateApplicationJson withZip(String zip) {
        this.zip = zip;
        return this;
    }
}