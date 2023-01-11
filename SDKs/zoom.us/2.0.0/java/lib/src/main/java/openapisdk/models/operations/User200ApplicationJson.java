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
 * User200ApplicationJson
 * The user object represents a specific user on Zoom.
**/
public class User200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public User200ApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cms_user_id")
    public String cmsUserId;
    public User200ApplicationJson withCmsUserId(String cmsUserId) {
        this.cmsUserId = cmsUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public User200ApplicationJson withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public User200ApplicationJson withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attributes")
    public User200ApplicationJsonCustomAttributes customAttributes;
    public User200ApplicationJson withCustomAttributes(User200ApplicationJsonCustomAttributes customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public User200ApplicationJson withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public User200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public User200ApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_ids")
    public String[] groupIds;
    public User200ApplicationJson withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_key")
    public String hostKey;
    public User200ApplicationJson withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public User200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("im_group_ids")
    public String[] imGroupIds;
    public User200ApplicationJson withImGroupIds(String[] imGroupIds) {
        this.imGroupIds = imGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jid")
    public String jid;
    public User200ApplicationJson withJid(String jid) {
        this.jid = jid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public User200ApplicationJson withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public User200ApplicationJson withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_client_version")
    public String lastClientVersion;
    public User200ApplicationJson withLastClientVersion(String lastClientVersion) {
        this.lastClientVersion = lastClientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_login_time")
    public OffsetDateTime lastLoginTime;
    public User200ApplicationJson withLastLoginTime(OffsetDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public User200ApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public User200ApplicationJson withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_type")
    public Long loginType;
    public User200ApplicationJson withLoginType(Long loginType) {
        this.loginType = loginType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public String manager;
    public User200ApplicationJson withManager(String manager) {
        this.manager = manager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting_url")
    public String personalMeetingUrl;
    public User200ApplicationJson withPersonalMeetingUrl(String personalMeetingUrl) {
        this.personalMeetingUrl = personalMeetingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_country")
    public String phoneCountry;
    public User200ApplicationJson withPhoneCountry(String phoneCountry) {
        this.phoneCountry = phoneCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public User200ApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public User200ApplicationJsonPhoneNumbers phoneNumbers;
    public User200ApplicationJson withPhoneNumbers(User200ApplicationJsonPhoneNumbers phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pic_url")
    public String picUrl;
    public User200ApplicationJson withPicUrl(String picUrl) {
        this.picUrl = picUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_united_type")
    public String planUnitedType;
    public User200ApplicationJson withPlanUnitedType(String planUnitedType) {
        this.planUnitedType = planUnitedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public User200ApplicationJson withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_id")
    public String roleId;
    public User200ApplicationJson withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_name")
    public String roleName;
    public User200ApplicationJson withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public User200ApplicationJsonStatusEnum status;
    public User200ApplicationJson withStatus(User200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public User200ApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public User200ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public User200ApplicationJson withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vanity_url")
    public String vanityUrl;
    public User200ApplicationJson withVanityUrl(String vanityUrl) {
        this.vanityUrl = vanityUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Long verified;
    public User200ApplicationJson withVerified(Long verified) {
        this.verified = verified;
        return this;
    }
}