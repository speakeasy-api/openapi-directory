package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MeetingRegistrantsRegistrationListRegistrants
 * Registrant base object.
**/
public class MeetingRegistrantsRegistrationListRegistrants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingRegistrantsRegistrationListRegistrants withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingRegistrantsRegistrationListRegistrants withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public MeetingRegistrantsRegistrationListRegistrants withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingRegistrantsRegistrationListRegistrants withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_time")
    public OffsetDateTime createTime;
    public MeetingRegistrantsRegistrationListRegistrants withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public MeetingRegistrantsRegistrationListRegistrantsCustomQuestions[] customQuestions;
    public MeetingRegistrantsRegistrationListRegistrants withCustomQuestions(MeetingRegistrantsRegistrationListRegistrantsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public MeetingRegistrantsRegistrationListRegistrants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public MeetingRegistrantsRegistrationListRegistrants withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MeetingRegistrantsRegistrationListRegistrants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industry")
    public String industry;
    public MeetingRegistrantsRegistrationListRegistrants withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public MeetingRegistrantsRegistrationListRegistrants withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public MeetingRegistrantsRegistrationListRegistrants withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public MeetingRegistrantsRegistrationListRegistrants withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_of_employees")
    public String noOfEmployees;
    public MeetingRegistrantsRegistrationListRegistrants withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public MeetingRegistrantsRegistrationListRegistrants withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public MeetingRegistrantsRegistrationListRegistrants withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasing_time_frame")
    public String purchasingTimeFrame;
    public MeetingRegistrantsRegistrationListRegistrants withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_in_purchase_process")
    public String roleInPurchaseProcess;
    public MeetingRegistrantsRegistrationListRegistrants withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MeetingRegistrantsRegistrationListRegistrants withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public MeetingRegistrantsRegistrationListRegistrants withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public MeetingRegistrantsRegistrationListRegistrants withZip(String zip) {
        this.zip = zip;
        return this;
    }
}