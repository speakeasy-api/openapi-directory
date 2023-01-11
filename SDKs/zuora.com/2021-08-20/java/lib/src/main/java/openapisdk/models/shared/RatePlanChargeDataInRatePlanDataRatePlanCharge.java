package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RatePlanChargeDataInRatePlanDataRatePlanCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountingCode")
    public String accountingCode;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withAccountingCode(String accountingCode) {
        this.accountingCode = accountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyDiscountTo")
    public String applyDiscountTo;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withApplyDiscountTo(String applyDiscountTo) {
        this.applyDiscountTo = applyDiscountTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillCycleDay")
    public Integer billCycleDay;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withBillCycleDay(Integer billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillCycleType")
    public String billCycleType;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withBillCycleType(String billCycleType) {
        this.billCycleType = billCycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingPeriod")
    public String billingPeriod;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withBillingPeriod(String billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingPeriodAlignment")
    public String billingPeriodAlignment;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withBillingPeriodAlignment(String billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingTiming")
    public String billingTiming;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withBillingTiming(String billingTiming) {
        this.billingTiming = billingTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeModel")
    public String chargeModel;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withChargeModel(String chargeModel) {
        this.chargeModel = chargeModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeNumber")
    public String chargeNumber;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeType")
    public String chargeType;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withChargeType(String chargeType) {
        this.chargeType = chargeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargedThroughDate")
    public LocalDate chargedThroughDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withChargedThroughDate(LocalDate chargedThroughDate) {
        this.chargedThroughDate = chargedThroughDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DMRC")
    public Double dmrc;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDmrc(Double dmrc) {
        this.dmrc = dmrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DTCV")
    public Double dtcv;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDtcv(Double dtcv) {
        this.dtcv = dtcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiscountAmount")
    public Double discountAmount;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDiscountAmount(Double discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiscountLevel")
    public String discountLevel;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDiscountLevel(String discountLevel) {
        this.discountLevel = discountLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiscountPercentage")
    public Double discountPercentage;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withDiscountPercentage(Double discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveEndDate")
    public LocalDate effectiveEndDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withEffectiveEndDate(LocalDate effectiveEndDate) {
        this.effectiveEndDate = effectiveEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveStartDate")
    public LocalDate effectiveStartDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withEffectiveStartDate(LocalDate effectiveStartDate) {
        this.effectiveStartDate = effectiveStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDateCondition")
    public String endDateCondition;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withEndDateCondition(String endDateCondition) {
        this.endDateCondition = endDateCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludedUnits")
    public Double includedUnits;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withIncludedUnits(Double includedUnits) {
        this.includedUnits = includedUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLastSegment")
    public Boolean isLastSegment;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withIsLastSegment(Boolean isLastSegment) {
        this.isLastSegment = isLastSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListPriceBase")
    public String listPriceBase;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withListPriceBase(String listPriceBase) {
        this.listPriceBase = listPriceBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MRR")
    public Double mrr;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withMrr(Double mrr) {
        this.mrr = mrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPeriods")
    public Long numberOfPeriods;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withNumberOfPeriods(Long numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginalId")
    public String originalId;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withOriginalId(String originalId) {
        this.originalId = originalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverageCalculationOption")
    public String overageCalculationOption;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withOverageCalculationOption(String overageCalculationOption) {
        this.overageCalculationOption = overageCalculationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OveragePrice")
    public Double overagePrice;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withOveragePrice(Double overagePrice) {
        this.overagePrice = overagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverageUnusedUnitsCreditOption")
    public String overageUnusedUnitsCreditOption;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withOverageUnusedUnitsCreditOption(String overageUnusedUnitsCreditOption) {
        this.overageUnusedUnitsCreditOption = overageUnusedUnitsCreditOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PriceChangeOption")
    public String priceChangeOption;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withPriceChangeOption(String priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PriceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessedThroughDate")
    public LocalDate processedThroughDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withProcessedThroughDate(LocalDate processedThroughDate) {
        this.processedThroughDate = processedThroughDate;
        return this;
    }
    @JsonProperty("ProductRatePlanChargeId")
    public String productRatePlanChargeId;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanId")
    public String ratePlanId;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withRatePlanId(String ratePlanId) {
        this.ratePlanId = ratePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevRecCode")
    public String revRecCode;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevRecTriggerCondition")
    public String revRecTriggerCondition;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withRevRecTriggerCondition(String revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevenueRecognitionRuleName")
    public String revenueRecognitionRuleName;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withRevenueRecognitionRuleName(String revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RolloverBalance")
    public Double rolloverBalance;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withRolloverBalance(Double rolloverBalance) {
        this.rolloverBalance = rolloverBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Segment")
    public Integer segment;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withSegment(Integer segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpecificBillingPeriod")
    public Long specificBillingPeriod;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withSpecificBillingPeriod(Long specificBillingPeriod) {
        this.specificBillingPeriod = specificBillingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpecificEndDate")
    public LocalDate specificEndDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withSpecificEndDate(LocalDate specificEndDate) {
        this.specificEndDate = specificEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TCV")
    public Double tcv;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withTcv(Double tcv) {
        this.tcv = tcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TriggerDate")
    public LocalDate triggerDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withTriggerDate(LocalDate triggerDate) {
        this.triggerDate = triggerDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TriggerEvent")
    public String triggerEvent;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withTriggerEvent(String triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnusedUnitsCreditRates")
    public Double unusedUnitsCreditRates;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUnusedUnitsCreditRates(Double unusedUnitsCreditRates) {
        this.unusedUnitsCreditRates = unusedUnitsCreditRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpToPeriods")
    public Long upToPeriods;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUpToPeriods(Long upToPeriods) {
        this.upToPeriods = upToPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpToPeriodsType")
    public String upToPeriodsType;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUpToPeriodsType(String upToPeriodsType) {
        this.upToPeriodsType = upToPeriodsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageRecordRatingOption")
    public String usageRecordRatingOption;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUsageRecordRatingOption(String usageRecordRatingOption) {
        this.usageRecordRatingOption = usageRecordRatingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDiscountSpecificAccountingCode")
    public Boolean useDiscountSpecificAccountingCode;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withUseDiscountSpecificAccountingCode(Boolean useDiscountSpecificAccountingCode) {
        this.useDiscountSpecificAccountingCode = useDiscountSpecificAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withVersion(Long version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WeeklyBillCycleDay")
    public String weeklyBillCycleDay;
    public RatePlanChargeDataInRatePlanDataRatePlanCharge withWeeklyBillCycleDay(String weeklyBillCycleDay) {
        this.weeklyBillCycleDay = weeklyBillCycleDay;
        return this;
    }
}