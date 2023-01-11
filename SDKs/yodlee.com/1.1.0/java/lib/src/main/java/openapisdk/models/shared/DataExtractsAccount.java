package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("401kLoan")
    public Money fourHundredAndOnekLoan;
    public DataExtractsAccount withFourHundredAndOnekLoan(Money fourHundredAndOnekLoan) {
        this.fourHundredAndOnekLoan = fourHundredAndOnekLoan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CONTAINER")
    public DataExtractsAccountContainerEnum container;
    public DataExtractsAccount withContainer(DataExtractsAccountContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public DataExtractsAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public DataExtractsAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountStatus")
    public DataExtractsAccountAccountStatusEnum accountStatus;
    public DataExtractsAccount withAccountStatus(DataExtractsAccountAccountStatusEnum accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public DataExtractsAccount withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public DataExtractsAccount withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public DataExtractsAccountAggregationSourceEnum aggregationSource;
    public DataExtractsAccount withAggregationSource(DataExtractsAccountAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDue")
    public Money amountDue;
    public DataExtractsAccount withAmountDue(Money amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualPercentageYield")
    public Double annualPercentageYield;
    public DataExtractsAccount withAnnualPercentageYield(Double annualPercentageYield) {
        this.annualPercentageYield = annualPercentageYield;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annuityBalance")
    public Money annuityBalance;
    public DataExtractsAccount withAnnuityBalance(Money annuityBalance) {
        this.annuityBalance = annuityBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apr")
    public Double apr;
    public DataExtractsAccount withApr(Double apr) {
        this.apr = apr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedProviderAccountId")
    public Long[] associatedProviderAccountId;
    public DataExtractsAccount withAssociatedProviderAccountId(Long[] associatedProviderAccountId) {
        this.associatedProviderAccountId = associatedProviderAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableBalance")
    public Money availableBalance;
    public DataExtractsAccount withAvailableBalance(Money availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCash")
    public Money availableCash;
    public DataExtractsAccount withAvailableCash(Money availableCash) {
        this.availableCash = availableCash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCredit")
    public Money availableCredit;
    public DataExtractsAccount withAvailableCredit(Money availableCredit) {
        this.availableCredit = availableCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public DataExtractsAccount withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankTransferCode")
    public BankTransferCode[] bankTransferCode;
    public DataExtractsAccount withBankTransferCode(BankTransferCode[] bankTransferCode) {
        this.bankTransferCode = bankTransferCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash")
    public Money cash;
    public DataExtractsAccount withCash(Money cash) {
        this.cash = cash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashApr")
    public Double cashApr;
    public DataExtractsAccount withCashApr(Double cashApr) {
        this.cashApr = cashApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashValue")
    public Money cashValue;
    public DataExtractsAccount withCashValue(Money cashValue) {
        this.cashValue = cashValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public DataExtractsAccountClassificationEnum classification;
    public DataExtractsAccount withClassification(DataExtractsAccountClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collateral")
    public String collateral;
    public DataExtractsAccount withCollateral(String collateral) {
        this.collateral = collateral;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage")
    public Coverage[] coverage;
    public DataExtractsAccount withCoverage(Coverage[] coverage) {
        this.coverage = coverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public DataExtractsAccount withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentBalance")
    public Money currentBalance;
    public DataExtractsAccount withCurrentBalance(Money currentBalance) {
        this.currentBalance = currentBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLevel")
    public String currentLevel;
    public DataExtractsAccount withCurrentLevel(String currentLevel) {
        this.currentLevel = currentLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public DataExtractsAccount withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deathBenefit")
    public Money deathBenefit;
    public DataExtractsAccount withDeathBenefit(Money deathBenefit) {
        this.deathBenefit = deathBenefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedApr")
    public Double derivedApr;
    public DataExtractsAccount withDerivedApr(Double derivedApr) {
        this.derivedApr = derivedApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayedName")
    public String displayedName;
    public DataExtractsAccount withDisplayedName(String displayedName) {
        this.displayedName = displayedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public DataExtractsAccount withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentDate")
    public String enrollmentDate;
    public DataExtractsAccount withEnrollmentDate(String enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escrowBalance")
    public Money escrowBalance;
    public DataExtractsAccount withEscrowBalance(Money escrowBalance) {
        this.escrowBalance = escrowBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedDate")
    public String estimatedDate;
    public DataExtractsAccount withEstimatedDate(String estimatedDate) {
        this.estimatedDate = estimatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public DataExtractsAccount withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceAmount")
    public Money faceAmount;
    public DataExtractsAccount withFaceAmount(Money faceAmount) {
        this.faceAmount = faceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public DataExtractsAccountFrequencyEnum frequency;
    public DataExtractsAccount withFrequency(DataExtractsAccountFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guarantor")
    public String guarantor;
    public DataExtractsAccount withGuarantor(String guarantor) {
        this.guarantor = guarantor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeInsuranceType")
    public DataExtractsAccountHomeInsuranceTypeEnum homeInsuranceType;
    public DataExtractsAccount withHomeInsuranceType(DataExtractsAccountHomeInsuranceTypeEnum homeInsuranceType) {
        this.homeInsuranceType = homeInsuranceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeValue")
    public Money homeValue;
    public DataExtractsAccount withHomeValue(Money homeValue) {
        this.homeValue = homeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DataExtractsAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInNetWorth")
    public Boolean includeInNetWorth;
    public DataExtractsAccount withIncludeInNetWorth(Boolean includeInNetWorth) {
        this.includeInNetWorth = includeInNetWorth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestPaidLastYear")
    public Money interestPaidLastYear;
    public DataExtractsAccount withInterestPaidLastYear(Money interestPaidLastYear) {
        this.interestPaidLastYear = interestPaidLastYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestPaidYTD")
    public Money interestPaidYTD;
    public DataExtractsAccount withInterestPaidYtd(Money interestPaidYTD) {
        this.interestPaidYTD = interestPaidYTD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public DataExtractsAccount withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRateType")
    public DataExtractsAccountInterestRateTypeEnum interestRateType;
    public DataExtractsAccount withInterestRateType(DataExtractsAccountInterestRateTypeEnum interestRateType) {
        this.interestRateType = interestRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAsset")
    public Boolean isAsset;
    public DataExtractsAccount withIsAsset(Boolean isAsset) {
        this.isAsset = isAsset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleted")
    public Boolean isDeleted;
    public DataExtractsAccount withIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public DataExtractsAccount withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEmployeeContributionAmount")
    public Money lastEmployeeContributionAmount;
    public DataExtractsAccount withLastEmployeeContributionAmount(Money lastEmployeeContributionAmount) {
        this.lastEmployeeContributionAmount = lastEmployeeContributionAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEmployeeContributionDate")
    public String lastEmployeeContributionDate;
    public DataExtractsAccount withLastEmployeeContributionDate(String lastEmployeeContributionDate) {
        this.lastEmployeeContributionDate = lastEmployeeContributionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPayment")
    public Money lastPayment;
    public DataExtractsAccount withLastPayment(Money lastPayment) {
        this.lastPayment = lastPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentAmount")
    public Money lastPaymentAmount;
    public DataExtractsAccount withLastPaymentAmount(Money lastPaymentAmount) {
        this.lastPaymentAmount = lastPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentDate")
    public String lastPaymentDate;
    public DataExtractsAccount withLastPaymentDate(String lastPaymentDate) {
        this.lastPaymentDate = lastPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DataExtractsAccount withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lender")
    public String lender;
    public DataExtractsAccount withLender(String lender) {
        this.lender = lender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeInsuranceType")
    public DataExtractsAccountLifeInsuranceTypeEnum lifeInsuranceType;
    public DataExtractsAccount withLifeInsuranceType(DataExtractsAccountLifeInsuranceTypeEnum lifeInsuranceType) {
        this.lifeInsuranceType = lifeInsuranceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayByDate")
    public String loanPayByDate;
    public DataExtractsAccount withLoanPayByDate(String loanPayByDate) {
        this.loanPayByDate = loanPayByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayoffAmount")
    public Money loanPayoffAmount;
    public DataExtractsAccount withLoanPayoffAmount(Money loanPayoffAmount) {
        this.loanPayoffAmount = loanPayoffAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayoffDetails")
    public LoanPayoffDetails loanPayoffDetails;
    public DataExtractsAccount withLoanPayoffDetails(LoanPayoffDetails loanPayoffDetails) {
        this.loanPayoffDetails = loanPayoffDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marginBalance")
    public Money marginBalance;
    public DataExtractsAccount withMarginBalance(Money marginBalance) {
        this.marginBalance = marginBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityAmount")
    public Money maturityAmount;
    public DataExtractsAccount withMaturityAmount(Money maturityAmount) {
        this.maturityAmount = maturityAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public DataExtractsAccount withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public DataExtractsAccount withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAmountDue")
    public Money minimumAmountDue;
    public DataExtractsAccount withMinimumAmountDue(Money minimumAmountDue) {
        this.minimumAmountDue = minimumAmountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moneyMarketBalance")
    public Money moneyMarketBalance;
    public DataExtractsAccount withMoneyMarketBalance(Money moneyMarketBalance) {
        this.moneyMarketBalance = moneyMarketBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLevel")
    public String nextLevel;
    public DataExtractsAccount withNextLevel(String nextLevel) {
        this.nextLevel = nextLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public DataExtractsAccount withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public DataExtractsAccountOauthMigrationStatusEnum oauthMigrationStatus;
    public DataExtractsAccount withOauthMigrationStatus(DataExtractsAccountOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalLoanAmount")
    public Money originalLoanAmount;
    public DataExtractsAccount withOriginalLoanAmount(Money originalLoanAmount) {
        this.originalLoanAmount = originalLoanAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originationDate")
    public String originationDate;
    public DataExtractsAccount withOriginationDate(String originationDate) {
        this.originationDate = originationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overDraftLimit")
    public Money overDraftLimit;
    public DataExtractsAccount withOverDraftLimit(Money overDraftLimit) {
        this.overDraftLimit = overDraftLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyEffectiveDate")
    public String policyEffectiveDate;
    public DataExtractsAccount withPolicyEffectiveDate(String policyEffectiveDate) {
        this.policyEffectiveDate = policyEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyFromDate")
    public String policyFromDate;
    public DataExtractsAccount withPolicyFromDate(String policyFromDate) {
        this.policyFromDate = policyFromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStatus")
    public DataExtractsAccountPolicyStatusEnum policyStatus;
    public DataExtractsAccount withPolicyStatus(DataExtractsAccountPolicyStatusEnum policyStatus) {
        this.policyStatus = policyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyTerm")
    public String policyTerm;
    public DataExtractsAccount withPolicyTerm(String policyTerm) {
        this.policyTerm = policyTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyToDate")
    public String policyToDate;
    public DataExtractsAccount withPolicyToDate(String policyToDate) {
        this.policyToDate = policyToDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium")
    public Money premium;
    public DataExtractsAccount withPremium(Money premium) {
        this.premium = premium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premiumPaymentTerm")
    public String premiumPaymentTerm;
    public DataExtractsAccount withPremiumPaymentTerm(String premiumPaymentTerm) {
        this.premiumPaymentTerm = premiumPaymentTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryRewardUnit")
    public String primaryRewardUnit;
    public DataExtractsAccount withPrimaryRewardUnit(String primaryRewardUnit) {
        this.primaryRewardUnit = primaryRewardUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalBalance")
    public Money principalBalance;
    public DataExtractsAccount withPrincipalBalance(Money principalBalance) {
        this.principalBalance = principalBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public DataExtractsAccount withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public DataExtractsAccount withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public DataExtractsAccount withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPayment")
    public Money recurringPayment;
    public DataExtractsAccount withRecurringPayment(Money recurringPayment) {
        this.recurringPayment = recurringPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingBalance")
    public Money remainingBalance;
    public DataExtractsAccount withRemainingBalance(Money remainingBalance) {
        this.remainingBalance = remainingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repaymentPlanType")
    public DataExtractsAccountRepaymentPlanTypeEnum repaymentPlanType;
    public DataExtractsAccount withRepaymentPlanType(DataExtractsAccountRepaymentPlanTypeEnum repaymentPlanType) {
        this.repaymentPlanType = repaymentPlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewardBalance")
    public RewardBalance[] rewardBalance;
    public DataExtractsAccount withRewardBalance(RewardBalance[] rewardBalance) {
        this.rewardBalance = rewardBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningBalance")
    public Money runningBalance;
    public DataExtractsAccount withRunningBalance(Money runningBalance) {
        this.runningBalance = runningBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortBalance")
    public Money shortBalance;
    public DataExtractsAccount withShortBalance(Money shortBalance) {
        this.shortBalance = shortBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountStatus")
    public DataExtractsAccountSourceAccountStatusEnum sourceAccountStatus;
    public DataExtractsAccount withSourceAccountStatus(DataExtractsAccountSourceAccountStatusEnum sourceAccountStatus) {
        this.sourceAccountStatus = sourceAccountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public DataExtractsAccount withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public DataExtractsAccount withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCashLimit")
    public Money totalCashLimit;
    public DataExtractsAccount withTotalCashLimit(Money totalCashLimit) {
        this.totalCashLimit = totalCashLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCreditLimit")
    public Money totalCreditLimit;
    public DataExtractsAccount withTotalCreditLimit(Money totalCreditLimit) {
        this.totalCreditLimit = totalCreditLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCreditLine")
    public Money totalCreditLine;
    public DataExtractsAccount withTotalCreditLine(Money totalCreditLine) {
        this.totalCreditLine = totalCreditLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUnvestedBalance")
    public Money totalUnvestedBalance;
    public DataExtractsAccount withTotalUnvestedBalance(Money totalUnvestedBalance) {
        this.totalUnvestedBalance = totalUnvestedBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalVestedBalance")
    public Money totalVestedBalance;
    public DataExtractsAccount withTotalVestedBalance(Money totalVestedBalance) {
        this.totalVestedBalance = totalVestedBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userClassification")
    public DataExtractsAccountUserClassificationEnum userClassification;
    public DataExtractsAccount withUserClassification(DataExtractsAccountUserClassificationEnum userClassification) {
        this.userClassification = userClassification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuationType")
    public DataExtractsAccountValuationTypeEnum valuationType;
    public DataExtractsAccount withValuationType(DataExtractsAccountValuationTypeEnum valuationType) {
        this.valuationType = valuationType;
        return this;
    }
}