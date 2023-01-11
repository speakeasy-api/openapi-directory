package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public User withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acountLabel")
    public String acountLabel;
    public User withAcountLabel(String acountLabel) {
        this.acountLabel = acountLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactNumber")
    public String contactNumber;
    public User withContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public User withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public User withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public User withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public User withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public UserRoles[] roles;
    public User withRoles(UserRoles[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UserStatusEnum status;
    public User withStatus(UserStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucis")
    public UserUcis[] ucis;
    public User withUcis(UserUcis[] ucis) {
        this.ucis = ucis;
        return this;
    }
}