package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CONTAINER")
    public DataExtractsTransactionContainerEnum container;
    public DataExtractsTransaction withContainer(DataExtractsTransactionContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public DataExtractsTransaction withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Money amount;
    public DataExtractsTransaction withAmount(Money amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseType")
    public DataExtractsTransactionBaseTypeEnum baseType;
    public DataExtractsTransaction withBaseType(DataExtractsTransactionBaseTypeEnum baseType) {
        this.baseType = baseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public DataExtractsTransaction withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public Long categoryId;
    public DataExtractsTransaction withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categorySource")
    public DataExtractsTransactionCategorySourceEnum categorySource;
    public DataExtractsTransaction withCategorySource(DataExtractsTransactionCategorySourceEnum categorySource) {
        this.categorySource = categorySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryType")
    public DataExtractsTransactionCategoryTypeEnum categoryType;
    public DataExtractsTransaction withCategoryType(DataExtractsTransactionCategoryTypeEnum categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkNumber")
    public String checkNumber;
    public DataExtractsTransaction withCheckNumber(String checkNumber) {
        this.checkNumber = checkNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission")
    public Money commission;
    public DataExtractsTransaction withCommission(Money commission) {
        this.commission = commission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public DataExtractsTransaction withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusipNumber")
    public String cusipNumber;
    public DataExtractsTransaction withCusipNumber(String cusipNumber) {
        this.cusipNumber = cusipNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public DataExtractsTransaction withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public Description description;
    public DataExtractsTransaction withDescription(Description description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailCategoryId")
    public Long detailCategoryId;
    public DataExtractsTransaction withDetailCategoryId(Long detailCategoryId) {
        this.detailCategoryId = detailCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLevelCategoryId")
    public Long highLevelCategoryId;
    public DataExtractsTransaction withHighLevelCategoryId(Long highLevelCategoryId) {
        this.highLevelCategoryId = highLevelCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingDescription")
    public String holdingDescription;
    public DataExtractsTransaction withHoldingDescription(String holdingDescription) {
        this.holdingDescription = holdingDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DataExtractsTransaction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest")
    public Money interest;
    public DataExtractsTransaction withInterest(Money interest) {
        this.interest = interest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleted")
    public Boolean isDeleted;
    public DataExtractsTransaction withIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public DataExtractsTransaction withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public DataExtractsTransaction withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DataExtractsTransaction withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public DataExtractsTransaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public Merchant merchant;
    public DataExtractsTransaction withMerchant(Merchant merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentCategoryId")
    public Long parentCategoryId;
    public DataExtractsTransaction withParentCategoryId(Long parentCategoryId) {
        this.parentCategoryId = parentCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postDate")
    public String postDate;
    public DataExtractsTransaction withPostDate(String postDate) {
        this.postDate = postDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public DataExtractsTransaction withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public Money principal;
    public DataExtractsTransaction withPrincipal(Money principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public DataExtractsTransaction withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningBalance")
    public Money runningBalance;
    public DataExtractsTransaction withRunningBalance(Money runningBalance) {
        this.runningBalance = runningBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public DataExtractsTransaction withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settleDate")
    public String settleDate;
    public DataExtractsTransaction withSettleDate(String settleDate) {
        this.settleDate = settleDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public DataExtractsTransaction withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public DataExtractsTransactionSourceTypeEnum sourceType;
    public DataExtractsTransaction withSourceType(DataExtractsTransactionSourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DataExtractsTransactionStatusEnum status;
    public DataExtractsTransaction withStatus(DataExtractsTransactionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subType")
    public DataExtractsTransactionSubTypeEnum subType;
    public DataExtractsTransaction withSubType(DataExtractsTransactionSubTypeEnum subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public DataExtractsTransaction withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public String transactionDate;
    public DataExtractsTransaction withTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public DataExtractsTransaction withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valoren")
    public String valoren;
    public DataExtractsTransaction withValoren(String valoren) {
        this.valoren = valoren;
        return this;
    }
}