package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostReconcileRefundResponseFinanceInformation
 * Container for the finance information related to the refund.
 * 
**/
public class PostReconcileRefundResponseFinanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCode")
    public String bankAccountAccountingCode;
    public PostReconcileRefundResponseFinanceInformation withBankAccountAccountingCode(String bankAccountAccountingCode) {
        this.bankAccountAccountingCode = bankAccountAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCodeType")
    public String bankAccountAccountingCodeType;
    public PostReconcileRefundResponseFinanceInformation withBankAccountAccountingCodeType(String bankAccountAccountingCodeType) {
        this.bankAccountAccountingCodeType = bankAccountAccountingCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredToAccounting")
    public PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting;
    public PostReconcileRefundResponseFinanceInformation withTransferredToAccounting(PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCode")
    public String unappliedPaymentAccountingCode;
    public PostReconcileRefundResponseFinanceInformation withUnappliedPaymentAccountingCode(String unappliedPaymentAccountingCode) {
        this.unappliedPaymentAccountingCode = unappliedPaymentAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCodeType")
    public String unappliedPaymentAccountingCodeType;
    public PostReconcileRefundResponseFinanceInformation withUnappliedPaymentAccountingCodeType(String unappliedPaymentAccountingCodeType) {
        this.unappliedPaymentAccountingCodeType = unappliedPaymentAccountingCodeType;
        return this;
    }
}