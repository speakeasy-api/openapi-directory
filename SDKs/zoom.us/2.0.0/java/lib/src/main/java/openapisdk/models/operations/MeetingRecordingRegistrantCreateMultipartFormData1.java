package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingRecordingRegistrantCreateMultipartFormData1
 * Registrant base object.
**/
public class MeetingRecordingRegistrantCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=address")
    public String address;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=city")
    public String city;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comments")
    public String comments;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=country")
    public String country;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withCustomQuestions(MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=industry")
    public String industry;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=job_title")
    public String jobTitle;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=no_of_employees")
    public String noOfEmployees;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=org")
    public String org;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone")
    public String phone;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=purchasing_time_frame")
    public String purchasingTimeFrame;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=role_in_purchase_process")
    public String roleInPurchaseProcess;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=state")
    public String state;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=zip")
    public String zip;
    public MeetingRecordingRegistrantCreateMultipartFormData1 withZip(String zip) {
        this.zip = zip;
        return this;
    }
}