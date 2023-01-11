package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingRegistrantCreateMultipartFormData1
 * Registrant base object.
**/
public class MeetingRegistrantCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=address")
    public String address;
    public MeetingRegistrantCreateMultipartFormData1 withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=auto_approve")
    public Boolean autoApprove;
    public MeetingRegistrantCreateMultipartFormData1 withAutoApprove(Boolean autoApprove) {
        this.autoApprove = autoApprove;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=city")
    public String city;
    public MeetingRegistrantCreateMultipartFormData1 withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comments")
    public String comments;
    public MeetingRegistrantCreateMultipartFormData1 withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=country")
    public String country;
    public MeetingRegistrantCreateMultipartFormData1 withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public MeetingRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions;
    public MeetingRegistrantCreateMultipartFormData1 withCustomQuestions(MeetingRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public MeetingRegistrantCreateMultipartFormData1 withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public MeetingRegistrantCreateMultipartFormData1 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=industry")
    public String industry;
    public MeetingRegistrantCreateMultipartFormData1 withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=job_title")
    public String jobTitle;
    public MeetingRegistrantCreateMultipartFormData1 withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=language")
    public String language;
    public MeetingRegistrantCreateMultipartFormData1 withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public MeetingRegistrantCreateMultipartFormData1 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=no_of_employees")
    public String noOfEmployees;
    public MeetingRegistrantCreateMultipartFormData1 withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=org")
    public String org;
    public MeetingRegistrantCreateMultipartFormData1 withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone")
    public String phone;
    public MeetingRegistrantCreateMultipartFormData1 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=purchasing_time_frame")
    public String purchasingTimeFrame;
    public MeetingRegistrantCreateMultipartFormData1 withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=role_in_purchase_process")
    public String roleInPurchaseProcess;
    public MeetingRegistrantCreateMultipartFormData1 withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=state")
    public String state;
    public MeetingRegistrantCreateMultipartFormData1 withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=zip")
    public String zip;
    public MeetingRegistrantCreateMultipartFormData1 withZip(String zip) {
        this.zip = zip;
        return this;
    }
}