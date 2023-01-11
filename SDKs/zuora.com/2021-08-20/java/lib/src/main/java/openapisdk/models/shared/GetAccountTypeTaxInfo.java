package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountTypeTaxInfo
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 * 
**/
public class GetAccountTypeTaxInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VATId")
    public String vatId;
    public GetAccountTypeTaxInfo withVatId(String vatId) {
        this.vatId = vatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyCode")
    public String companyCode;
    public GetAccountTypeTaxInfo withCompanyCode(String companyCode) {
        this.companyCode = companyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptCertificateId")
    public String exemptCertificateId;
    public GetAccountTypeTaxInfo withExemptCertificateId(String exemptCertificateId) {
        this.exemptCertificateId = exemptCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptCertificateType")
    public String exemptCertificateType;
    public GetAccountTypeTaxInfo withExemptCertificateType(String exemptCertificateType) {
        this.exemptCertificateType = exemptCertificateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptDescription")
    public String exemptDescription;
    public GetAccountTypeTaxInfo withExemptDescription(String exemptDescription) {
        this.exemptDescription = exemptDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptEffectiveDate")
    public LocalDate exemptEffectiveDate;
    public GetAccountTypeTaxInfo withExemptEffectiveDate(LocalDate exemptEffectiveDate) {
        this.exemptEffectiveDate = exemptEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptEntityUseCode")
    public String exemptEntityUseCode;
    public GetAccountTypeTaxInfo withExemptEntityUseCode(String exemptEntityUseCode) {
        this.exemptEntityUseCode = exemptEntityUseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptExpirationDate")
    public LocalDate exemptExpirationDate;
    public GetAccountTypeTaxInfo withExemptExpirationDate(LocalDate exemptExpirationDate) {
        this.exemptExpirationDate = exemptExpirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptIssuingJurisdiction")
    public String exemptIssuingJurisdiction;
    public GetAccountTypeTaxInfo withExemptIssuingJurisdiction(String exemptIssuingJurisdiction) {
        this.exemptIssuingJurisdiction = exemptIssuingJurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptStatus")
    public String exemptStatus;
    public GetAccountTypeTaxInfo withExemptStatus(String exemptStatus) {
        this.exemptStatus = exemptStatus;
        return this;
    }
}