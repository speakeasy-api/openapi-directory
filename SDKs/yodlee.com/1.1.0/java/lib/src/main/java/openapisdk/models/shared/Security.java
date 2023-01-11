package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Security {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accrualMethod")
    public String accrualMethod;
    public Security withAccrualMethod(String accrualMethod) {
        this.accrualMethod = accrualMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyFactor")
    public Double agencyFactor;
    public Security withAgencyFactor(Double agencyFactor) {
        this.agencyFactor = agencyFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callDate")
    public String callDate;
    public Security withCallDate(String callDate) {
        this.callDate = callDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callPrice")
    public Double callPrice;
    public Security withCallPrice(Double callPrice) {
        this.callPrice = callPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cdscFundFlag")
    public Boolean cdscFundFlag;
    public Security withCdscFundFlag(Boolean cdscFundFlag) {
        this.cdscFundFlag = cdscFundFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closedFlag")
    public Boolean closedFlag;
    public Security withClosedFlag(Boolean closedFlag) {
        this.closedFlag = closedFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusip")
    public String cusip;
    public Security withCusip(String cusip) {
        this.cusip = cusip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Security withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federalTaxable")
    public Boolean federalTaxable;
    public Security withFederalTaxable(Boolean federalTaxable) {
        this.federalTaxable = federalTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmEligible")
    public String firmEligible;
    public Security withFirmEligible(String firmEligible) {
        this.firmEligible = firmEligible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstCouponDate")
    public String firstCouponDate;
    public Security withFirstCouponDate(String firstCouponDate) {
        this.firstCouponDate = firstCouponDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public Integer frequency;
    public Security withFrequency(Integer frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundFamily")
    public String fundFamily;
    public Security withFundFamily(String fundFamily) {
        this.fundFamily = fundFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gicsSector")
    public String gicsSector;
    public Security withGicsSector(String gicsSector) {
        this.gicsSector = gicsSector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Security withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incomeCurrency")
    public String incomeCurrency;
    public Security withIncomeCurrency(String incomeCurrency) {
        this.incomeCurrency = incomeCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public Security withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDummySecurity")
    public Boolean isDummySecurity;
    public Security withIsDummySecurity(Boolean isDummySecurity) {
        this.isDummySecurity = isDummySecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnvestnetDummySecurity")
    public Boolean isEnvestnetDummySecurity;
    public Security withIsEnvestnetDummySecurity(Boolean isEnvestnetDummySecurity) {
        this.isEnvestnetDummySecurity = isEnvestnetDummySecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSyntheticSecurity")
    public Boolean isSyntheticSecurity;
    public Security withIsSyntheticSecurity(Boolean isSyntheticSecurity) {
        this.isSyntheticSecurity = isSyntheticSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public Security withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueDate")
    public String issueDate;
    public Security withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueTypeMultiplier")
    public Double issueTypeMultiplier;
    public Security withIssueTypeMultiplier(Double issueTypeMultiplier) {
        this.issueTypeMultiplier = issueTypeMultiplier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCouponDate")
    public String lastCouponDate;
    public Security withLastCouponDate(String lastCouponDate) {
        this.lastCouponDate = lastCouponDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedDate")
    public String lastModifiedDate;
    public Security withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public Security withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPurchase")
    public Integer minimumPurchase;
    public Security withMinimumPurchase(Integer minimumPurchase) {
        this.minimumPurchase = minimumPurchase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moodyRating")
    public String moodyRating;
    public Security withMoodyRating(String moodyRating) {
        this.moodyRating = moodyRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sAndPRating")
    public String sAndPRating;
    public Security withSAndPRating(String sAndPRating) {
        this.sAndPRating = sAndPRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sector")
    public String sector;
    public Security withSector(String sector) {
        this.sector = sector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public Security withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareClass")
    public String shareClass;
    public Security withShareClass(String shareClass) {
        this.shareClass = shareClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTaxable")
    public Boolean stateTaxable;
    public Security withStateTaxable(Boolean stateTaxable) {
        this.stateTaxable = stateTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stockExchangeDetails")
    public StockExchangeDetail[] stockExchangeDetails;
    public Security withStockExchangeDetails(StockExchangeDetail[] stockExchangeDetails) {
        this.stockExchangeDetails = stockExchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("style")
    public String style;
    public Security withStyle(String style) {
        this.style = style;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subSector")
    public String subSector;
    public Security withSubSector(String subSector) {
        this.subSector = subSector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tradeCurrencyCode")
    public String tradeCurrencyCode;
    public Security withTradeCurrencyCode(String tradeCurrencyCode) {
        this.tradeCurrencyCode = tradeCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Security withType(String type) {
        this.type = type;
        return this;
    }
}