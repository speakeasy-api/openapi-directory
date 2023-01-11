package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * UserUpdateMultipartFormData
 * The user update object represents a user on Zoom.
**/
public class UserUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=cms_user_id")
    public String cmsUserId;
    public UserUpdateMultipartFormData withCmsUserId(String cmsUserId) {
        this.cmsUserId = cmsUserId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=company")
    public String company;
    public UserUpdateMultipartFormData withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom_attributes,json")
    public UserUpdateMultipartFormDataCustomAttributes customAttributes;
    public UserUpdateMultipartFormData withCustomAttributes(UserUpdateMultipartFormDataCustomAttributes customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=dept")
    public String dept;
    public UserUpdateMultipartFormData withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public UserUpdateMultipartFormData withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public String groupId;
    public UserUpdateMultipartFormData withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=host_key")
    public String hostKey;
    public UserUpdateMultipartFormData withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=job_title")
    public String jobTitle;
    public UserUpdateMultipartFormData withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=language")
    public String language;
    public UserUpdateMultipartFormData withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public UserUpdateMultipartFormData withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=location")
    public String location;
    public UserUpdateMultipartFormData withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=manager")
    public String manager;
    public UserUpdateMultipartFormData withManager(String manager) {
        this.manager = manager;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_country")
    public String phoneCountry;
    public UserUpdateMultipartFormData withPhoneCountry(String phoneCountry) {
        this.phoneCountry = phoneCountry;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_number")
    public String phoneNumber;
    public UserUpdateMultipartFormData withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public UserUpdateMultipartFormDataPhoneNumbers phoneNumbers;
    public UserUpdateMultipartFormData withPhoneNumbers(UserUpdateMultipartFormDataPhoneNumbers phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=pmi")
    public Long pmi;
    public UserUpdateMultipartFormData withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public UserUpdateMultipartFormData withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public UserUpdateMultipartFormData withType(Long type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_pmi")
    public Boolean usePmi;
    public UserUpdateMultipartFormData withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=vanity_name")
    public String vanityName;
    public UserUpdateMultipartFormData withVanityName(String vanityName) {
        this.vanityName = vanityName;
        return this;
    }
}