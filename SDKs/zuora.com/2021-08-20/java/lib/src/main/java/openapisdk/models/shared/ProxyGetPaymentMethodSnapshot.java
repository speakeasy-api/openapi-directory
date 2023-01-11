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

public class ProxyGetPaymentMethodSnapshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ProxyGetPaymentMethodSnapshot withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAbaCode")
    public String achAbaCode;
    public ProxyGetPaymentMethodSnapshot withAchAbaCode(String achAbaCode) {
        this.achAbaCode = achAbaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountName")
    public String achAccountName;
    public ProxyGetPaymentMethodSnapshot withAchAccountName(String achAccountName) {
        this.achAccountName = achAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountNumberMask")
    public String achAccountNumberMask;
    public ProxyGetPaymentMethodSnapshot withAchAccountNumberMask(String achAccountNumberMask) {
        this.achAccountNumberMask = achAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountType")
    public ProxyGetPaymentMethodSnapshotAchAccountTypeEnum achAccountType;
    public ProxyGetPaymentMethodSnapshot withAchAccountType(ProxyGetPaymentMethodSnapshotAchAccountTypeEnum achAccountType) {
        this.achAccountType = achAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchBankName")
    public String achBankName;
    public ProxyGetPaymentMethodSnapshot withAchBankName(String achBankName) {
        this.achBankName = achBankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankBranchCode")
    public String bankBranchCode;
    public ProxyGetPaymentMethodSnapshot withBankBranchCode(String bankBranchCode) {
        this.bankBranchCode = bankBranchCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCheckDigit")
    public String bankCheckDigit;
    public ProxyGetPaymentMethodSnapshot withBankCheckDigit(String bankCheckDigit) {
        this.bankCheckDigit = bankCheckDigit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCity")
    public String bankCity;
    public ProxyGetPaymentMethodSnapshot withBankCity(String bankCity) {
        this.bankCity = bankCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCode")
    public String bankCode;
    public ProxyGetPaymentMethodSnapshot withBankCode(String bankCode) {
        this.bankCode = bankCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankIdentificationNumber")
    public String bankIdentificationNumber;
    public ProxyGetPaymentMethodSnapshot withBankIdentificationNumber(String bankIdentificationNumber) {
        this.bankIdentificationNumber = bankIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankName")
    public String bankName;
    public ProxyGetPaymentMethodSnapshot withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankPostalCode")
    public String bankPostalCode;
    public ProxyGetPaymentMethodSnapshot withBankPostalCode(String bankPostalCode) {
        this.bankPostalCode = bankPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetName")
    public String bankStreetName;
    public ProxyGetPaymentMethodSnapshot withBankStreetName(String bankStreetName) {
        this.bankStreetName = bankStreetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetNumber")
    public String bankStreetNumber;
    public ProxyGetPaymentMethodSnapshot withBankStreetNumber(String bankStreetNumber) {
        this.bankStreetNumber = bankStreetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountName")
    public String bankTransferAccountName;
    public ProxyGetPaymentMethodSnapshot withBankTransferAccountName(String bankTransferAccountName) {
        this.bankTransferAccountName = bankTransferAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountNumberMask")
    public String bankTransferAccountNumberMask;
    public ProxyGetPaymentMethodSnapshot withBankTransferAccountNumberMask(String bankTransferAccountNumberMask) {
        this.bankTransferAccountNumberMask = bankTransferAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountType")
    public String bankTransferAccountType;
    public ProxyGetPaymentMethodSnapshot withBankTransferAccountType(String bankTransferAccountType) {
        this.bankTransferAccountType = bankTransferAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferType")
    public ProxyGetPaymentMethodSnapshotBankTransferTypeEnum bankTransferType;
    public ProxyGetPaymentMethodSnapshot withBankTransferType(ProxyGetPaymentMethodSnapshotBankTransferTypeEnum bankTransferType) {
        this.bankTransferType = bankTransferType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessIdentificationCode")
    public String businessIdentificationCode;
    public ProxyGetPaymentMethodSnapshot withBusinessIdentificationCode(String businessIdentificationCode) {
        this.businessIdentificationCode = businessIdentificationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public ProxyGetPaymentMethodSnapshot withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public String companyName;
    public ProxyGetPaymentMethodSnapshot withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public ProxyGetPaymentMethodSnapshot withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress1")
    public String creditCardAddress1;
    public ProxyGetPaymentMethodSnapshot withCreditCardAddress1(String creditCardAddress1) {
        this.creditCardAddress1 = creditCardAddress1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress2")
    public String creditCardAddress2;
    public ProxyGetPaymentMethodSnapshot withCreditCardAddress2(String creditCardAddress2) {
        this.creditCardAddress2 = creditCardAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCity")
    public String creditCardCity;
    public ProxyGetPaymentMethodSnapshot withCreditCardCity(String creditCardCity) {
        this.creditCardCity = creditCardCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCountry")
    public String creditCardCountry;
    public ProxyGetPaymentMethodSnapshot withCreditCardCountry(String creditCardCountry) {
        this.creditCardCountry = creditCardCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationMonth")
    public Integer creditCardExpirationMonth;
    public ProxyGetPaymentMethodSnapshot withCreditCardExpirationMonth(Integer creditCardExpirationMonth) {
        this.creditCardExpirationMonth = creditCardExpirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationYear")
    public Integer creditCardExpirationYear;
    public ProxyGetPaymentMethodSnapshot withCreditCardExpirationYear(Integer creditCardExpirationYear) {
        this.creditCardExpirationYear = creditCardExpirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardHolderName")
    public String creditCardHolderName;
    public ProxyGetPaymentMethodSnapshot withCreditCardHolderName(String creditCardHolderName) {
        this.creditCardHolderName = creditCardHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardMaskNumber")
    public String creditCardMaskNumber;
    public ProxyGetPaymentMethodSnapshot withCreditCardMaskNumber(String creditCardMaskNumber) {
        this.creditCardMaskNumber = creditCardMaskNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardPostalCode")
    public String creditCardPostalCode;
    public ProxyGetPaymentMethodSnapshot withCreditCardPostalCode(String creditCardPostalCode) {
        this.creditCardPostalCode = creditCardPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardState")
    public String creditCardState;
    public ProxyGetPaymentMethodSnapshot withCreditCardState(String creditCardState) {
        this.creditCardState = creditCardState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardType")
    public ProxyGetPaymentMethodSnapshotCreditCardTypeEnum creditCardType;
    public ProxyGetPaymentMethodSnapshot withCreditCardType(ProxyGetPaymentMethodSnapshotCreditCardTypeEnum creditCardType) {
        this.creditCardType = creditCardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceSessionId")
    public String deviceSessionId;
    public ProxyGetPaymentMethodSnapshot withDeviceSessionId(String deviceSessionId) {
        this.deviceSessionId = deviceSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public ProxyGetPaymentMethodSnapshot withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExistingMandate")
    public ProxyGetPaymentMethodSnapshotExistingMandateEnum existingMandate;
    public ProxyGetPaymentMethodSnapshot withExistingMandate(ProxyGetPaymentMethodSnapshotExistingMandateEnum existingMandate) {
        this.existingMandate = existingMandate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public ProxyGetPaymentMethodSnapshot withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IBAN")
    public String iban;
    public ProxyGetPaymentMethodSnapshot withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPAddress")
    public String ipAddress;
    public ProxyGetPaymentMethodSnapshot withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetPaymentMethodSnapshot withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityNumber")
    public String identityNumber;
    public ProxyGetPaymentMethodSnapshot withIdentityNumber(String identityNumber) {
        this.identityNumber = identityNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsCompany")
    public Boolean isCompany;
    public ProxyGetPaymentMethodSnapshot withIsCompany(Boolean isCompany) {
        this.isCompany = isCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFailedSaleTransactionDate")
    public OffsetDateTime lastFailedSaleTransactionDate;
    public ProxyGetPaymentMethodSnapshot withLastFailedSaleTransactionDate(OffsetDateTime lastFailedSaleTransactionDate) {
        this.lastFailedSaleTransactionDate = lastFailedSaleTransactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public ProxyGetPaymentMethodSnapshot withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastTransactionDateTime")
    public OffsetDateTime lastTransactionDateTime;
    public ProxyGetPaymentMethodSnapshot withLastTransactionDateTime(OffsetDateTime lastTransactionDateTime) {
        this.lastTransactionDateTime = lastTransactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastTransactionStatus")
    public String lastTransactionStatus;
    public ProxyGetPaymentMethodSnapshot withLastTransactionStatus(String lastTransactionStatus) {
        this.lastTransactionStatus = lastTransactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateCreationDate")
    public LocalDate mandateCreationDate;
    public ProxyGetPaymentMethodSnapshot withMandateCreationDate(LocalDate mandateCreationDate) {
        this.mandateCreationDate = mandateCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateID")
    public String mandateID;
    public ProxyGetPaymentMethodSnapshot withMandateId(String mandateID) {
        this.mandateID = mandateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateReceived")
    public String mandateReceived;
    public ProxyGetPaymentMethodSnapshot withMandateReceived(String mandateReceived) {
        this.mandateReceived = mandateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateUpdateDate")
    public LocalDate mandateUpdateDate;
    public ProxyGetPaymentMethodSnapshot withMandateUpdateDate(LocalDate mandateUpdateDate) {
        this.mandateUpdateDate = mandateUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConsecutivePaymentFailures")
    public Long maxConsecutivePaymentFailures;
    public ProxyGetPaymentMethodSnapshot withMaxConsecutivePaymentFailures(Long maxConsecutivePaymentFailures) {
        this.maxConsecutivePaymentFailures = maxConsecutivePaymentFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProxyGetPaymentMethodSnapshot withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumConsecutiveFailures")
    public Integer numConsecutiveFailures;
    public ProxyGetPaymentMethodSnapshot withNumConsecutiveFailures(Integer numConsecutiveFailures) {
        this.numConsecutiveFailures = numConsecutiveFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodId")
    public String paymentMethodId;
    public ProxyGetPaymentMethodSnapshot withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodStatus")
    public ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum paymentMethodStatus;
    public ProxyGetPaymentMethodSnapshot withPaymentMethodStatus(ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum paymentMethodStatus) {
        this.paymentMethodStatus = paymentMethodStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentRetryWindow")
    public Long paymentRetryWindow;
    public ProxyGetPaymentMethodSnapshot withPaymentRetryWindow(Long paymentRetryWindow) {
        this.paymentRetryWindow = paymentRetryWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalBaid")
    public String paypalBaid;
    public ProxyGetPaymentMethodSnapshot withPaypalBaid(String paypalBaid) {
        this.paypalBaid = paypalBaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalEmail")
    public String paypalEmail;
    public ProxyGetPaymentMethodSnapshot withPaypalEmail(String paypalEmail) {
        this.paypalEmail = paypalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalPreapprovalKey")
    public String paypalPreapprovalKey;
    public ProxyGetPaymentMethodSnapshot withPaypalPreapprovalKey(String paypalPreapprovalKey) {
        this.paypalPreapprovalKey = paypalPreapprovalKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalType")
    public ProxyGetPaymentMethodSnapshotPaypalTypeEnum paypalType;
    public ProxyGetPaymentMethodSnapshot withPaypalType(ProxyGetPaymentMethodSnapshotPaypalTypeEnum paypalType) {
        this.paypalType = paypalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public ProxyGetPaymentMethodSnapshot withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public ProxyGetPaymentMethodSnapshot withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondTokenId")
    public String secondTokenId;
    public ProxyGetPaymentMethodSnapshot withSecondTokenId(String secondTokenId) {
        this.secondTokenId = secondTokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public ProxyGetPaymentMethodSnapshot withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public ProxyGetPaymentMethodSnapshot withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetNumber")
    public String streetNumber;
    public ProxyGetPaymentMethodSnapshot withStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenId")
    public String tokenId;
    public ProxyGetPaymentMethodSnapshot withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfErrorPayments")
    public Integer totalNumberOfErrorPayments;
    public ProxyGetPaymentMethodSnapshot withTotalNumberOfErrorPayments(Integer totalNumberOfErrorPayments) {
        this.totalNumberOfErrorPayments = totalNumberOfErrorPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfProcessedPayments")
    public Integer totalNumberOfProcessedPayments;
    public ProxyGetPaymentMethodSnapshot withTotalNumberOfProcessedPayments(Integer totalNumberOfProcessedPayments) {
        this.totalNumberOfProcessedPayments = totalNumberOfProcessedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ProxyGetPaymentMethodSnapshotTypeEnum type;
    public ProxyGetPaymentMethodSnapshot withType(ProxyGetPaymentMethodSnapshotTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaultRetryRule")
    public Boolean useDefaultRetryRule;
    public ProxyGetPaymentMethodSnapshot withUseDefaultRetryRule(Boolean useDefaultRetryRule) {
        this.useDefaultRetryRule = useDefaultRetryRule;
        return this;
    }
}