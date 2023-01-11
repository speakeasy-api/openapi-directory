package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedHolding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public DerivedHolding withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedIncome")
    public Money accruedIncome;
    public DerivedHolding withAccruedIncome(Money accruedIncome) {
        this.accruedIncome = accruedIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedInterest")
    public Money accruedInterest;
    public DerivedHolding withAccruedInterest(Money accruedInterest) {
        this.accruedInterest = accruedInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetClassification")
    public AssetClassification assetClassification;
    public DerivedHolding withAssetClassification(AssetClassification assetClassification) {
        this.assetClassification = assetClassification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractQuantity")
    public Double contractQuantity;
    public DerivedHolding withContractQuantity(Double contractQuantity) {
        this.contractQuantity = contractQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costBasis")
    public Money costBasis;
    public DerivedHolding withCostBasis(Money costBasis) {
        this.costBasis = costBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponRate")
    public Double couponRate;
    public DerivedHolding withCouponRate(Double couponRate) {
        this.couponRate = couponRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public DerivedHolding withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusipNumber")
    public String cusipNumber;
    public DerivedHolding withCusipNumber(String cusipNumber) {
        this.cusipNumber = cusipNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DerivedHolding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrichedDescription")
    public String enrichedDescription;
    public DerivedHolding withEnrichedDescription(String enrichedDescription) {
        this.enrichedDescription = enrichedDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exercisedQuantity")
    public Double exercisedQuantity;
    public DerivedHolding withExercisedQuantity(Double exercisedQuantity) {
        this.exercisedQuantity = exercisedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public DerivedHolding withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantDate")
    public String grantDate;
    public DerivedHolding withGrantDate(String grantDate) {
        this.grantDate = grantDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingType")
    public DerivedHoldingHoldingTypeEnum holdingType;
    public DerivedHolding withHoldingType(DerivedHoldingHoldingTypeEnum holdingType) {
        this.holdingType = holdingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DerivedHolding withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public DerivedHolding withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isShort")
    public Boolean isShort;
    public DerivedHolding withIsShort(Boolean isShort) {
        this.isShort = isShort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public DerivedHolding withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DerivedHolding withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchStatus")
    public String matchStatus;
    public DerivedHolding withMatchStatus(String matchStatus) {
        this.matchStatus = matchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public DerivedHolding withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionType")
    public DerivedHoldingOptionTypeEnum optionType;
    public DerivedHolding withOptionType(DerivedHoldingOptionTypeEnum optionType) {
        this.optionType = optionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public DerivedHolding withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public DerivedHolding withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public DerivedHolding withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityStyle")
    public String securityStyle;
    public DerivedHolding withSecurityStyle(String securityStyle) {
        this.securityStyle = securityStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityType")
    public String securityType;
    public DerivedHolding withSecurityType(String securityType) {
        this.securityType = securityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public DerivedHolding withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spread")
    public Money spread;
    public DerivedHolding withSpread(Money spread) {
        this.spread = spread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikePrice")
    public Money strikePrice;
    public DerivedHolding withStrikePrice(Money strikePrice) {
        this.strikePrice = strikePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public DerivedHolding withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public DerivedHolding withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedQuantity")
    public Double unvestedQuantity;
    public DerivedHolding withUnvestedQuantity(Double unvestedQuantity) {
        this.unvestedQuantity = unvestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedValue")
    public Money unvestedValue;
    public DerivedHolding withUnvestedValue(Money unvestedValue) {
        this.unvestedValue = unvestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Money value;
    public DerivedHolding withValue(Money value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedQuantity")
    public Double vestedQuantity;
    public DerivedHolding withVestedQuantity(Double vestedQuantity) {
        this.vestedQuantity = vestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedSharesExercisable")
    public Double vestedSharesExercisable;
    public DerivedHolding withVestedSharesExercisable(Double vestedSharesExercisable) {
        this.vestedSharesExercisable = vestedSharesExercisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedValue")
    public Money vestedValue;
    public DerivedHolding withVestedValue(Money vestedValue) {
        this.vestedValue = vestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestingDate")
    public String vestingDate;
    public DerivedHolding withVestingDate(String vestingDate) {
        this.vestingDate = vestingDate;
        return this;
    }
}