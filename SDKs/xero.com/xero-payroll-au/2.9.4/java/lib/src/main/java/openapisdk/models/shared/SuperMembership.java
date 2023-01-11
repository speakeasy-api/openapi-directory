package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperMembership {
    @JsonProperty("EmployeeNumber")
    public String employeeNumber;
    public SuperMembership withEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
        return this;
    }
    @JsonProperty("SuperFundID")
    public String superFundID;
    public SuperMembership withSuperFundId(String superFundID) {
        this.superFundID = superFundID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperMembershipID")
    public String superMembershipID;
    public SuperMembership withSuperMembershipId(String superMembershipID) {
        this.superMembershipID = superMembershipID;
        return this;
    }
}