package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarRegistrantCreateMultipartFormData1
 * Registrant base object.
**/
public class WebinarRegistrantCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=address")
    public String address;
    public WebinarRegistrantCreateMultipartFormData1 withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=city")
    public String city;
    public WebinarRegistrantCreateMultipartFormData1 withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comments")
    public String comments;
    public WebinarRegistrantCreateMultipartFormData1 withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=country")
    public String country;
    public WebinarRegistrantCreateMultipartFormData1 withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public WebinarRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions;
    public WebinarRegistrantCreateMultipartFormData1 withCustomQuestions(WebinarRegistrantCreateMultipartFormDataCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public WebinarRegistrantCreateMultipartFormData1 withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public WebinarRegistrantCreateMultipartFormData1 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=industry")
    public String industry;
    public WebinarRegistrantCreateMultipartFormData1 withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=job_title")
    public String jobTitle;
    public WebinarRegistrantCreateMultipartFormData1 withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public WebinarRegistrantCreateMultipartFormData1 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=no_of_employees")
    public String noOfEmployees;
    public WebinarRegistrantCreateMultipartFormData1 withNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=org")
    public String org;
    public WebinarRegistrantCreateMultipartFormData1 withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone")
    public String phone;
    public WebinarRegistrantCreateMultipartFormData1 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=purchasing_time_frame")
    public String purchasingTimeFrame;
    public WebinarRegistrantCreateMultipartFormData1 withPurchasingTimeFrame(String purchasingTimeFrame) {
        this.purchasingTimeFrame = purchasingTimeFrame;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=role_in_purchase_process")
    public String roleInPurchaseProcess;
    public WebinarRegistrantCreateMultipartFormData1 withRoleInPurchaseProcess(String roleInPurchaseProcess) {
        this.roleInPurchaseProcess = roleInPurchaseProcess;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=state")
    public String state;
    public WebinarRegistrantCreateMultipartFormData1 withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=zip")
    public String zip;
    public WebinarRegistrantCreateMultipartFormData1 withZip(String zip) {
        this.zip = zip;
        return this;
    }
}