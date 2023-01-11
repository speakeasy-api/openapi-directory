package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperFundInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ABN")
    public String abn;
    public SuperFundInput withAbn(String abn) {
        this.abn = abn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountName")
    public String accountName;
    public SuperFundInput withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public SuperFundInput withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BSB")
    public String bsb;
    public SuperFundInput withBsb(String bsb) {
        this.bsb = bsb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElectronicServiceAddress")
    public String electronicServiceAddress;
    public SuperFundInput withElectronicServiceAddress(String electronicServiceAddress) {
        this.electronicServiceAddress = electronicServiceAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerNumber")
    public String employerNumber;
    public SuperFundInput withEmployerNumber(String employerNumber) {
        this.employerNumber = employerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SuperFundInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SPIN")
    public String spin;
    public SuperFundInput withSpin(String spin) {
        this.spin = spin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperFundID")
    public String superFundID;
    public SuperFundInput withSuperFundId(String superFundID) {
        this.superFundID = superFundID;
        return this;
    }
    @JsonProperty("Type")
    public SuperFundTypeEnum type;
    public SuperFundInput withType(SuperFundTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USI")
    public String usi;
    public SuperFundInput withUsi(String usi) {
        this.usi = usi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public SuperFundInput withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}