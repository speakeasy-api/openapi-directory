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

public class ProxyGetPaymentMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ProxyGetPaymentMethod withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAbaCode")
    public String achAbaCode;
    public ProxyGetPaymentMethod withAchAbaCode(String achAbaCode) {
        this.achAbaCode = achAbaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountName")
    public String achAccountName;
    public ProxyGetPaymentMethod withAchAccountName(String achAccountName) {
        this.achAccountName = achAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountNumberMask")
    public String achAccountNumberMask;
    public ProxyGetPaymentMethod withAchAccountNumberMask(String achAccountNumberMask) {
        this.achAccountNumberMask = achAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountType")
    public String achAccountType;
    public ProxyGetPaymentMethod withAchAccountType(String achAccountType) {
        this.achAccountType = achAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAddress1")
    public String achAddress1;
    public ProxyGetPaymentMethod withAchAddress1(String achAddress1) {
        this.achAddress1 = achAddress1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAddress2")
    public String achAddress2;
    public ProxyGetPaymentMethod withAchAddress2(String achAddress2) {
        this.achAddress2 = achAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchBankName")
    public String achBankName;
    public ProxyGetPaymentMethod withAchBankName(String achBankName) {
        this.achBankName = achBankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public ProxyGetPaymentMethod withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankBranchCode")
    public String bankBranchCode;
    public ProxyGetPaymentMethod withBankBranchCode(String bankBranchCode) {
        this.bankBranchCode = bankBranchCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCheckDigit")
    public String bankCheckDigit;
    public ProxyGetPaymentMethod withBankCheckDigit(String bankCheckDigit) {
        this.bankCheckDigit = bankCheckDigit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCity")
    public String bankCity;
    public ProxyGetPaymentMethod withBankCity(String bankCity) {
        this.bankCity = bankCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCode")
    public String bankCode;
    public ProxyGetPaymentMethod withBankCode(String bankCode) {
        this.bankCode = bankCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankIdentificationNumber")
    public String bankIdentificationNumber;
    public ProxyGetPaymentMethod withBankIdentificationNumber(String bankIdentificationNumber) {
        this.bankIdentificationNumber = bankIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankName")
    public String bankName;
    public ProxyGetPaymentMethod withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankPostalCode")
    public String bankPostalCode;
    public ProxyGetPaymentMethod withBankPostalCode(String bankPostalCode) {
        this.bankPostalCode = bankPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetName")
    public String bankStreetName;
    public ProxyGetPaymentMethod withBankStreetName(String bankStreetName) {
        this.bankStreetName = bankStreetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetNumber")
    public String bankStreetNumber;
    public ProxyGetPaymentMethod withBankStreetNumber(String bankStreetNumber) {
        this.bankStreetNumber = bankStreetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountName")
    public String bankTransferAccountName;
    public ProxyGetPaymentMethod withBankTransferAccountName(String bankTransferAccountName) {
        this.bankTransferAccountName = bankTransferAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountNumber")
    public String bankTransferAccountNumber;
    public ProxyGetPaymentMethod withBankTransferAccountNumber(String bankTransferAccountNumber) {
        this.bankTransferAccountNumber = bankTransferAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountNumberMask")
    public String bankTransferAccountNumberMask;
    public ProxyGetPaymentMethod withBankTransferAccountNumberMask(String bankTransferAccountNumberMask) {
        this.bankTransferAccountNumberMask = bankTransferAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountType")
    public String bankTransferAccountType;
    public ProxyGetPaymentMethod withBankTransferAccountType(String bankTransferAccountType) {
        this.bankTransferAccountType = bankTransferAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferType")
    public String bankTransferType;
    public ProxyGetPaymentMethod withBankTransferType(String bankTransferType) {
        this.bankTransferType = bankTransferType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessIdentificationCode")
    public String businessIdentificationCode;
    public ProxyGetPaymentMethod withBusinessIdentificationCode(String businessIdentificationCode) {
        this.businessIdentificationCode = businessIdentificationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public ProxyGetPaymentMethod withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public String companyName;
    public ProxyGetPaymentMethod withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public ProxyGetPaymentMethod withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ProxyGetPaymentMethod withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ProxyGetPaymentMethod withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress1")
    public String creditCardAddress1;
    public ProxyGetPaymentMethod withCreditCardAddress1(String creditCardAddress1) {
        this.creditCardAddress1 = creditCardAddress1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress2")
    public String creditCardAddress2;
    public ProxyGetPaymentMethod withCreditCardAddress2(String creditCardAddress2) {
        this.creditCardAddress2 = creditCardAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCity")
    public String creditCardCity;
    public ProxyGetPaymentMethod withCreditCardCity(String creditCardCity) {
        this.creditCardCity = creditCardCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCountry")
    public String creditCardCountry;
    public ProxyGetPaymentMethod withCreditCardCountry(String creditCardCountry) {
        this.creditCardCountry = creditCardCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationMonth")
    public Integer creditCardExpirationMonth;
    public ProxyGetPaymentMethod withCreditCardExpirationMonth(Integer creditCardExpirationMonth) {
        this.creditCardExpirationMonth = creditCardExpirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationYear")
    public Integer creditCardExpirationYear;
    public ProxyGetPaymentMethod withCreditCardExpirationYear(Integer creditCardExpirationYear) {
        this.creditCardExpirationYear = creditCardExpirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardHolderName")
    public String creditCardHolderName;
    public ProxyGetPaymentMethod withCreditCardHolderName(String creditCardHolderName) {
        this.creditCardHolderName = creditCardHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardMaskNumber")
    public String creditCardMaskNumber;
    public ProxyGetPaymentMethod withCreditCardMaskNumber(String creditCardMaskNumber) {
        this.creditCardMaskNumber = creditCardMaskNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardPostalCode")
    public String creditCardPostalCode;
    public ProxyGetPaymentMethod withCreditCardPostalCode(String creditCardPostalCode) {
        this.creditCardPostalCode = creditCardPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardState")
    public String creditCardState;
    public ProxyGetPaymentMethod withCreditCardState(String creditCardState) {
        this.creditCardState = creditCardState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardType")
    public String creditCardType;
    public ProxyGetPaymentMethod withCreditCardType(String creditCardType) {
        this.creditCardType = creditCardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceSessionId")
    public String deviceSessionId;
    public ProxyGetPaymentMethod withDeviceSessionId(String deviceSessionId) {
        this.deviceSessionId = deviceSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public ProxyGetPaymentMethod withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExistingMandate")
    public String existingMandate;
    public ProxyGetPaymentMethod withExistingMandate(String existingMandate) {
        this.existingMandate = existingMandate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public ProxyGetPaymentMethod withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IBAN")
    public String iban;
    public ProxyGetPaymentMethod withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPAddress")
    public String ipAddress;
    public ProxyGetPaymentMethod withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetPaymentMethod withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityNumber")
    public String identityNumber;
    public ProxyGetPaymentMethod withIdentityNumber(String identityNumber) {
        this.identityNumber = identityNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsCompany")
    public Boolean isCompany;
    public ProxyGetPaymentMethod withIsCompany(Boolean isCompany) {
        this.isCompany = isCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFailedSaleTransactionDate")
    public OffsetDateTime lastFailedSaleTransactionDate;
    public ProxyGetPaymentMethod withLastFailedSaleTransactionDate(OffsetDateTime lastFailedSaleTransactionDate) {
        this.lastFailedSaleTransactionDate = lastFailedSaleTransactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public ProxyGetPaymentMethod withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastTransactionDateTime")
    public OffsetDateTime lastTransactionDateTime;
    public ProxyGetPaymentMethod withLastTransactionDateTime(OffsetDateTime lastTransactionDateTime) {
        this.lastTransactionDateTime = lastTransactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastTransactionStatus")
    public String lastTransactionStatus;
    public ProxyGetPaymentMethod withLastTransactionStatus(String lastTransactionStatus) {
        this.lastTransactionStatus = lastTransactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateCreationDate")
    public LocalDate mandateCreationDate;
    public ProxyGetPaymentMethod withMandateCreationDate(LocalDate mandateCreationDate) {
        this.mandateCreationDate = mandateCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateID")
    public String mandateID;
    public ProxyGetPaymentMethod withMandateId(String mandateID) {
        this.mandateID = mandateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateReceived")
    public String mandateReceived;
    public ProxyGetPaymentMethod withMandateReceived(String mandateReceived) {
        this.mandateReceived = mandateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateUpdateDate")
    public LocalDate mandateUpdateDate;
    public ProxyGetPaymentMethod withMandateUpdateDate(LocalDate mandateUpdateDate) {
        this.mandateUpdateDate = mandateUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConsecutivePaymentFailures")
    public Long maxConsecutivePaymentFailures;
    public ProxyGetPaymentMethod withMaxConsecutivePaymentFailures(Long maxConsecutivePaymentFailures) {
        this.maxConsecutivePaymentFailures = maxConsecutivePaymentFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProxyGetPaymentMethod withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumConsecutiveFailures")
    public Integer numConsecutiveFailures;
    public ProxyGetPaymentMethod withNumConsecutiveFailures(Integer numConsecutiveFailures) {
        this.numConsecutiveFailures = numConsecutiveFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodStatus")
    public String paymentMethodStatus;
    public ProxyGetPaymentMethod withPaymentMethodStatus(String paymentMethodStatus) {
        this.paymentMethodStatus = paymentMethodStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentRetryWindow")
    public Long paymentRetryWindow;
    public ProxyGetPaymentMethod withPaymentRetryWindow(Long paymentRetryWindow) {
        this.paymentRetryWindow = paymentRetryWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalBaid")
    public String paypalBaid;
    public ProxyGetPaymentMethod withPaypalBaid(String paypalBaid) {
        this.paypalBaid = paypalBaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalEmail")
    public String paypalEmail;
    public ProxyGetPaymentMethod withPaypalEmail(String paypalEmail) {
        this.paypalEmail = paypalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalPreapprovalKey")
    public String paypalPreapprovalKey;
    public ProxyGetPaymentMethod withPaypalPreapprovalKey(String paypalPreapprovalKey) {
        this.paypalPreapprovalKey = paypalPreapprovalKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalType")
    public String paypalType;
    public ProxyGetPaymentMethod withPaypalType(String paypalType) {
        this.paypalType = paypalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public ProxyGetPaymentMethod withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public ProxyGetPaymentMethod withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondTokenId")
    public String secondTokenId;
    public ProxyGetPaymentMethod withSecondTokenId(String secondTokenId) {
        this.secondTokenId = secondTokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public ProxyGetPaymentMethod withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public ProxyGetPaymentMethod withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetNumber")
    public String streetNumber;
    public ProxyGetPaymentMethod withStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenId")
    public String tokenId;
    public ProxyGetPaymentMethod withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfErrorPayments")
    public Integer totalNumberOfErrorPayments;
    public ProxyGetPaymentMethod withTotalNumberOfErrorPayments(Integer totalNumberOfErrorPayments) {
        this.totalNumberOfErrorPayments = totalNumberOfErrorPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfProcessedPayments")
    public Integer totalNumberOfProcessedPayments;
    public ProxyGetPaymentMethod withTotalNumberOfProcessedPayments(Integer totalNumberOfProcessedPayments) {
        this.totalNumberOfProcessedPayments = totalNumberOfProcessedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ProxyGetPaymentMethodTypeEnum type;
    public ProxyGetPaymentMethod withType(ProxyGetPaymentMethodTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ProxyGetPaymentMethod withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ProxyGetPaymentMethod withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaultRetryRule")
    public Boolean useDefaultRetryRule;
    public ProxyGetPaymentMethod withUseDefaultRetryRule(Boolean useDefaultRetryRule) {
        this.useDefaultRetryRule = useDefaultRetryRule;
        return this;
    }
}