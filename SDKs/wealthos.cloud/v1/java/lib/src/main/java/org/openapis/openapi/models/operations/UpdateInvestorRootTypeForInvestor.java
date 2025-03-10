/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * UpdateInvestorRootTypeForInvestor - JSON for the Investor resource type
 */
public class UpdateInvestorRootTypeForInvestor {
    @JsonProperty("address")
    public UpdateInvestorRootTypeForInvestorAddress address;

    public UpdateInvestorRootTypeForInvestor withAddress(UpdateInvestorRootTypeForInvestorAddress address) {
        this.address = address;
        return this;
    }
    
    /**
     * Array of bank account IDs
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_accounts")
    public String[] bankAccounts;

    public UpdateInvestorRootTypeForInvestor withBankAccounts(String[] bankAccounts) {
        this.bankAccounts = bankAccounts;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public UpdateInvestorRootTypeForInvestor withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonProperty("date_of_birth")
    public UpdateInvestorRootTypeForInvestorDateOfBirth dateOfBirth;

    public UpdateInvestorRootTypeForInvestor withDateOfBirth(UpdateInvestorRootTypeForInvestorDateOfBirth dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealing_status")
    public UpdateInvestorRootTypeForInvestorDealingStatusEnum dealingStatus;

    public UpdateInvestorRootTypeForInvestor withDealingStatus(UpdateInvestorRootTypeForInvestorDealingStatusEnum dealingStatus) {
        this.dealingStatus = dealingStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;

    public UpdateInvestorRootTypeForInvestor withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * Status of an investor best describes their personal circumstances.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public UpdateInvestorRootTypeForInvestorEmploymentStatusEnum employmentStatus;

    public UpdateInvestorRootTypeForInvestor withEmploymentStatus(UpdateInvestorRootTypeForInvestorEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression_of_wish")
    public UpdateInvestorRootTypeForInvestorExpressionOfWish expressionOfWish;

    public UpdateInvestorRootTypeForInvestor withExpressionOfWish(UpdateInvestorRootTypeForInvestorExpressionOfWish expressionOfWish) {
        this.expressionOfWish = expressionOfWish;
        return this;
    }
    
    @JsonProperty("first_name")
    public String firstName;

    public UpdateInvestorRootTypeForInvestor withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;

    public UpdateInvestorRootTypeForInvestor withGender(String gender) {
        this.gender = gender;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_number")
    public String homeNumber;

    public UpdateInvestorRootTypeForInvestor withHomeNumber(String homeNumber) {
        this.homeNumber = homeNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id_numbers")
    public UpdateInvestorRootTypeForInvestorIdNumbers[] idNumbers;

    public UpdateInvestorRootTypeForInvestor withIdNumbers(UpdateInvestorRootTypeForInvestorIdNumbers[] idNumbers) {
        this.idNumbers = idNumbers;
        return this;
    }
    
    @JsonProperty("investor_id")
    public String investorId;

    public UpdateInvestorRootTypeForInvestor withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kyc_aml_status")
    public UpdateInvestorRootTypeForInvestorKycAmlStatusEnum kycAmlStatus;

    public UpdateInvestorRootTypeForInvestor withKycAmlStatus(UpdateInvestorRootTypeForInvestorKycAmlStatusEnum kycAmlStatus) {
        this.kycAmlStatus = kycAmlStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("kyc_aml_status_last_updated")
    public OffsetDateTime kycAmlStatusLastUpdated;

    public UpdateInvestorRootTypeForInvestor withKycAmlStatusLastUpdated(OffsetDateTime kycAmlStatusLastUpdated) {
        this.kycAmlStatusLastUpdated = kycAmlStatusLastUpdated;
        return this;
    }
    
    @JsonProperty("last_name")
    public String lastName;

    public UpdateInvestorRootTypeForInvestor withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    
    /**
     * Additional details of the lifetime allowance protections of the investor
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lta_protection_details")
    public UpdateInvestorRootTypeForInvestorLtaProtectionDetails[] ltaProtectionDetails;

    public UpdateInvestorRootTypeForInvestor withLtaProtectionDetails(UpdateInvestorRootTypeForInvestorLtaProtectionDetails[] ltaProtectionDetails) {
        this.ltaProtectionDetails = ltaProtectionDetails;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mifid_tax_id")
    public String mifidTaxId;

    public UpdateInvestorRootTypeForInvestor withMifidTaxId(String mifidTaxId) {
        this.mifidTaxId = mifidTaxId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile_number")
    public String mobileNumber;

    public UpdateInvestorRootTypeForInvestor withMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }
    
    /**
     * Whether the investor has triggered the Money Purchase Annual Allowance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaa_triggered")
    public Boolean mpaaTriggered;

    public UpdateInvestorRootTypeForInvestor withMpaaTriggered(Boolean mpaaTriggered) {
        this.mpaaTriggered = mpaaTriggered;
        return this;
    }
    
    /**
     * Date of triggering the Money Purchase Annual Allowance. It is required if mpaa_triggered is true.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaa_triggered_date")
    public String mpaaTriggeredDate;

    public UpdateInvestorRootTypeForInvestor withMpaaTriggeredDate(String mpaaTriggeredDate) {
        this.mpaaTriggeredDate = mpaaTriggeredDate;
        return this;
    }
    
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    @JsonProperty("nationality")
    public String nationality;

    public UpdateInvestorRootTypeForInvestor withNationality(String nationality) {
        this.nationality = nationality;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_number")
    public String officeNumber;

    public UpdateInvestorRootTypeForInvestor withOfficeNumber(String officeNumber) {
        this.officeNumber = officeNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_version")
    public Long referenceVersion;

    public UpdateInvestorRootTypeForInvestor withReferenceVersion(Long referenceVersion) {
        this.referenceVersion = referenceVersion;
        return this;
    }
    
    /**
     * Intended retirement age of the investor
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retirement_age")
    public Double retirementAge;

    public UpdateInvestorRootTypeForInvestor withRetirementAge(Double retirementAge) {
        this.retirementAge = retirementAge;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateInvestorRootTypeForInvestorStatusEnum status;

    public UpdateInvestorRootTypeForInvestor withStatus(UpdateInvestorRootTypeForInvestorStatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonProperty("tax_id")
    public String taxId;

    public UpdateInvestorRootTypeForInvestor withTaxId(String taxId) {
        this.taxId = taxId;
        return this;
    }
    
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_residence")
    public UpdateInvestorRootTypeForInvestorTaxResidenceEnum taxResidence;

    public UpdateInvestorRootTypeForInvestor withTaxResidence(UpdateInvestorRootTypeForInvestorTaxResidenceEnum taxResidence) {
        this.taxResidence = taxResidence;
        return this;
    }
    
    @JsonProperty("tax_residency_compliant")
    public Boolean taxResidencyCompliant;

    public UpdateInvestorRootTypeForInvestor withTaxResidencyCompliant(Boolean taxResidencyCompliant) {
        this.taxResidencyCompliant = taxResidencyCompliant;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public UpdateInvestorRootTypeForInvestor withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public UpdateInvestorRootTypeForInvestor withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    public UpdateInvestorRootTypeForInvestor(@JsonProperty("address") UpdateInvestorRootTypeForInvestorAddress address, @JsonProperty("date_of_birth") UpdateInvestorRootTypeForInvestorDateOfBirth dateOfBirth, @JsonProperty("first_name") String firstName, @JsonProperty("investor_id") String investorId, @JsonProperty("last_name") String lastName, @JsonProperty("nationality") String nationality, @JsonProperty("tax_id") String taxId, @JsonProperty("tax_residency_compliant") Boolean taxResidencyCompliant) {
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.investorId = investorId;
        this.lastName = lastName;
        this.nationality = nationality;
        this.taxId = taxId;
        this.taxResidencyCompliant = taxResidencyCompliant;
  }
}
