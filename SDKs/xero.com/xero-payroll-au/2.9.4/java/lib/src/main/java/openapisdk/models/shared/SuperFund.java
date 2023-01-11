package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperFund {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ABN")
    public String abn;
    public SuperFund withAbn(String abn) {
        this.abn = abn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountName")
    public String accountName;
    public SuperFund withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public SuperFund withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BSB")
    public String bsb;
    public SuperFund withBsb(String bsb) {
        this.bsb = bsb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElectronicServiceAddress")
    public String electronicServiceAddress;
    public SuperFund withElectronicServiceAddress(String electronicServiceAddress) {
        this.electronicServiceAddress = electronicServiceAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerNumber")
    public String employerNumber;
    public SuperFund withEmployerNumber(String employerNumber) {
        this.employerNumber = employerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SuperFund withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SPIN")
    public String spin;
    public SuperFund withSpin(String spin) {
        this.spin = spin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperFundID")
    public String superFundID;
    public SuperFund withSuperFundId(String superFundID) {
        this.superFundID = superFundID;
        return this;
    }
    @JsonProperty("Type")
    public SuperFundTypeEnum type;
    public SuperFund withType(SuperFundTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USI")
    public String usi;
    public SuperFund withUsi(String usi) {
        this.usi = usi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public SuperFund withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public SuperFund withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}