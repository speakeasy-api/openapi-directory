package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaxInfo
 * Information about the tax exempt status of a customer account.
 * 
**/
public class TaxInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VATId")
    public String vatId;
    public TaxInfo withVatId(String vatId) {
        this.vatId = vatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyCode")
    public String companyCode;
    public TaxInfo withCompanyCode(String companyCode) {
        this.companyCode = companyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptCertificateId")
    public String exemptCertificateId;
    public TaxInfo withExemptCertificateId(String exemptCertificateId) {
        this.exemptCertificateId = exemptCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptCertificateType")
    public String exemptCertificateType;
    public TaxInfo withExemptCertificateType(String exemptCertificateType) {
        this.exemptCertificateType = exemptCertificateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptDescription")
    public String exemptDescription;
    public TaxInfo withExemptDescription(String exemptDescription) {
        this.exemptDescription = exemptDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptEffectiveDate")
    public LocalDate exemptEffectiveDate;
    public TaxInfo withExemptEffectiveDate(LocalDate exemptEffectiveDate) {
        this.exemptEffectiveDate = exemptEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptExpirationDate")
    public LocalDate exemptExpirationDate;
    public TaxInfo withExemptExpirationDate(LocalDate exemptExpirationDate) {
        this.exemptExpirationDate = exemptExpirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptIssuingJurisdiction")
    public String exemptIssuingJurisdiction;
    public TaxInfo withExemptIssuingJurisdiction(String exemptIssuingJurisdiction) {
        this.exemptIssuingJurisdiction = exemptIssuingJurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptStatus")
    public TaxInfoExemptStatusEnum exemptStatus;
    public TaxInfo withExemptStatus(TaxInfoExemptStatusEnum exemptStatus) {
        this.exemptStatus = exemptStatus;
        return this;
    }
}