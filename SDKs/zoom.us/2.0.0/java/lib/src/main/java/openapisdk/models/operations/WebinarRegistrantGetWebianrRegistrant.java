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
 * WebinarRegistrantGetWebianrRegistrant
 * Registrant base object.
**/
public class WebinarRegistrantGetWebianrRegistrant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public WebinarRegistrantGetWebianrRegistrant withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public WebinarRegistrantGetWebianrRegistrant withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WebinarRegistrantGetWebianrRegistrant withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public WebinarRegistrantGetWebianrRegistrant withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_time")
    public OffsetDateTime createTime;
    public WebinarRegistrantGetWebianrRegistrant withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public WebinarRegistrantGetWebianrRegistrantCustomQuestions[] customQuestions;
    public WebinarRegistrantGetWebianrRegistrant withCustomQuestions(WebinarRegistrantGetWebianrRegistrantCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public WebinarRegistrantGetWebianrRegistrant withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public WebinarRegistrantGetWebianrRegistrant withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebinarRegistrantGetWebianrRegistrant withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industry")
    public String industry;
    public WebinarRegistrantGetWebianrRegistrant withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public WebinarRegistrantGetWebianrRegistrant withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public WebinarRegistrantGetWebianrRegistrant withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public WebinarRegistrantGetWebianrRegistrant withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_of_employees")
    public String noOfEmployees;
    public WebinarRegistrantGetWebianrRegistrant withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public WebinarRegistrantGetWebianrRegistrant withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public WebinarRegistrantGetWebianrRegistrant withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasing_time_frame")
    public String purchasingTimeFrame;
    public WebinarRegistrantGetWebianrRegistrant withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_in_purchase_process")
    public String roleInPurchaseProcess;
    public WebinarRegistrantGetWebianrRegistrant withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public WebinarRegistrantGetWebianrRegistrant withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public WebinarRegistrantGetWebianrRegistrant withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public WebinarRegistrantGetWebianrRegistrant withZip(String zip) {
        this.zip = zip;
        return this;
    }
}