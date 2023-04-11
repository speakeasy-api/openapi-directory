import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestAddress extends SpeakeasyBase {
    addressLine?: string;
    city?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    country: string;
    postalCode: string;
    state?: string;
    streetName?: string;
}
/**
 * If not populated, will be defaulted to inactive
 */
export declare enum CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestBankAccounts extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnum;
    /**
     * Unique for the investor
     */
    bankAccountNumber: string;
    buildingSocietyRollNumber?: string;
    /**
     * Only one account should be the default
     */
    defaultAccount: CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum;
    sortCode?: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth extends SpeakeasyBase {
    /**
     * two digit string `DD`
     */
    day: string;
    /**
     * two digit string `MM`
     */
    month: string;
    /**
     * four digit string `YYYY`
     */
    year: string;
}
export declare enum CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
/**
 * Status of an investor best describes their personal circumstances.
 */
export declare enum CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum {
    Employed = "employed",
    SelfEmployed = "self_employed",
    Pensioner = "pensioner",
    ChildUnder16 = "child_under_16",
    InFullTimeEducation = "in_full_time_education",
    Unemployed = "unemployed",
    CaringForAPersonOver16 = "caring_for_a_person_over_16",
    CaringForAPersonUnder16 = "caring_for_a_person_under_16",
    Other = "other"
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    /**
     * Percentage of assets that will be allocated to the beneficiary
     */
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    /**
     * Percentage of assets that will be allocated to the nominee
     */
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
/**
 * Beneficiary and nominee list of the expression of wish.
 */
export declare class CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish extends SpeakeasyBase {
    /**
     * Beneficiaries list of the expression of wish
     */
    sippBeneficiaries?: CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries[];
    /**
     * Nominees list of the expression of wish
     */
    sippNominees?: CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees[];
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestIdNumbers extends SpeakeasyBase {
    idNumber: string;
    idType: string;
}
export declare enum CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
/**
 * primary=Primary protection, enhanced=Enhanced protection, fp12=Fixed protection 2012, fp14=Fixed protection 2014, fp16=Fixed protection 2016, ip14=Individual protection 2014, ip16=Individual protection 2016
 */
export declare enum CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails extends SpeakeasyBase {
    /**
     * Protected lifetime allowance of the investor. Required when the lta_protection_type is ip14 or ip16.
     */
    ltaIndividualProtectionAmount?: string;
    /**
     * Primary protection factor of the investor. Required only when the lta_protection_type is primary.
     */
    ltaPrimaryProtectionFactor?: string;
    /**
     * Protection notification number issued by HMRC. Required for protection from 2016 onwards. Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionNotificationNumber?: string;
    /**
     * Scheme administrator reference issued by HMRC. Required for protection from 2016 onwards. Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionSchemeAdministratorReference?: string;
    /**
     * primary=Primary protection, enhanced=Enhanced protection, fp12=Fixed protection 2012, fp14=Fixed protection 2014, fp16=Fixed protection 2016, ip14=Individual protection 2014, ip16=Individual protection 2016
     */
    ltaProtectionType: CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum;
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales.
 */
export declare enum CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Investor creation request resource type
 */
export declare class CreateInvestorRootTypeForInvestorCreationRequestInput extends SpeakeasyBase {
    address: CreateInvestorRootTypeForInvestorCreationRequestAddress;
    bankAccounts?: CreateInvestorRootTypeForInvestorCreationRequestBankAccounts[];
    dateOfBirth: CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth;
    dealingStatus?: CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum;
    email?: string;
    /**
     * Status of an investor best describes their personal circumstances.
     */
    employmentStatus?: CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum;
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    expressionOfWish?: CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish;
    firstName: string;
    gender?: string;
    homeNumber?: string;
    idNumbers?: CreateInvestorRootTypeForInvestorCreationRequestIdNumbers[];
    investorId: string;
    kycAmlStatus?: CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum;
    lastName: string;
    /**
     * Additional details of the lifetime allowance protections of the investor.
     */
    ltaProtectionDetails?: CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails[];
    mifidTaxId?: string;
    mobileNumber?: string;
    /**
     * Whether the investor has triggered the Money Purchase Annual Allowance.
     */
    mpaaTriggered?: boolean;
    /**
     * Date of triggering the Money Purchase Annual Allowance. This is only required if mpaa_triggered is true.
     */
    mpaaTriggeredDate?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    nationality: string;
    officeNumber?: string;
    /**
     * Intended retirement age of the investor.
     */
    retirementAge?: number;
    taxId: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales.
     */
    taxResidence?: CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum;
    taxResidencyCompliant: boolean;
    title?: string;
}
export declare class CreateInvestorRequest extends SpeakeasyBase {
    requestBody: CreateInvestorRootTypeForInvestorCreationRequestInput;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateInvestor500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class CreateInvestor429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CreateInvestor403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class CreateInvestor401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class CreateInvestor400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseAddress extends SpeakeasyBase {
    addressLine?: string;
    city?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    country: string;
    postalCode: string;
    state?: string;
    streetName?: string;
}
/**
 * If not populated, will be defaulted to inactive
 */
export declare enum CreateInvestorRootTypeForInvestorCreationResponseBankAccountsAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum CreateInvestorRootTypeForInvestorCreationResponseBankAccountsDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseBankAccountsStatusEnum {
    Failed = "failed",
    Success = "success"
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseBankAccounts extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: CreateInvestorRootTypeForInvestorCreationResponseBankAccountsAccountStatusEnum;
    /**
     * system generated id
     */
    bankAccountId?: string;
    /**
     * Unique for the investor
     */
    bankAccountNumber: string;
    buildingSocietyRollNumber?: string;
    createdAt?: Date;
    /**
     * Only one account should be the default
     */
    defaultAccount: CreateInvestorRootTypeForInvestorCreationResponseBankAccountsDefaultAccountEnum;
    /**
     * If the bank account creation failed
     */
    errorMessage?: string;
    investorId: string;
    referenceVersion?: number;
    sortCode?: string;
    status?: CreateInvestorRootTypeForInvestorCreationResponseBankAccountsStatusEnum;
    updatedAt?: Date;
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseDateOfBirth extends SpeakeasyBase {
    /**
     * two digit string `DD`
     */
    day?: string;
    /**
     * two digit string `MM`
     */
    month?: string;
    /**
     * four digit string `YYYY`
     */
    year?: string;
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseEmploymentStatusEnum {
    Employed = "employed",
    SelfEmployed = "self_employed",
    Pensioner = "pensioner",
    ChildUnder16 = "child_under_16",
    InFullTimeEducation = "in_full_time_education",
    Unemployed = "unemployed",
    CaringForAPersonOver16 = "caring_for_a_person_over_16",
    CaringForAPersonUnder16 = "caring_for_a_person_under_16",
    Other = "other"
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWishSippNominees extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWish extends SpeakeasyBase {
    sippBeneficiaries?: CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWishSippBeneficiaries[];
    sippNominees?: CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWishSippNominees[];
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseIdNumbers extends SpeakeasyBase {
    idNumber: string;
    idType: string;
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class CreateInvestorRootTypeForInvestorCreationResponseLtaProtectionDetails extends SpeakeasyBase {
    /**
     * Required when the lta_protection_type is ip14 or ip16.
     */
    ltaIndividualProtectionAmount?: string;
    /**
     * Required only when the lta_protection_type is primary
     */
    ltaPrimaryProtectionFactor?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionNotificationNumber?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionSchemeAdministratorReference?: string;
    ltaProtectionType: CreateInvestorRootTypeForInvestorCreationResponseLtaProtectionDetailsLtaProtectionTypeEnum;
}
export declare enum CreateInvestorRootTypeForInvestorCreationResponseStatusEnum {
    KycPending = "kyc_pending",
    KycFailed = "kyc_failed",
    Inactive = "inactive",
    Active = "active"
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
 */
export declare enum CreateInvestorRootTypeForInvestorCreationResponseTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Investor creation response resource type
 */
export declare class CreateInvestorRootTypeForInvestorCreationResponse extends SpeakeasyBase {
    address: CreateInvestorRootTypeForInvestorCreationResponseAddress;
    bankAccounts?: CreateInvestorRootTypeForInvestorCreationResponseBankAccounts[];
    createdAt?: Date;
    dateOfBirth: CreateInvestorRootTypeForInvestorCreationResponseDateOfBirth;
    dealingStatus?: CreateInvestorRootTypeForInvestorCreationResponseDealingStatusEnum;
    email?: string;
    employmentStatus?: CreateInvestorRootTypeForInvestorCreationResponseEmploymentStatusEnum;
    expressionOfWish?: CreateInvestorRootTypeForInvestorCreationResponseExpressionOfWish;
    firstName: string;
    gender?: string;
    homeNumber?: string;
    idNumbers?: CreateInvestorRootTypeForInvestorCreationResponseIdNumbers[];
    investorId: string;
    kycAmlStatus?: CreateInvestorRootTypeForInvestorCreationResponseKycAmlStatusEnum;
    kycAmlStatusLastUpdated?: Date;
    lastName: string;
    ltaProtectionDetails?: CreateInvestorRootTypeForInvestorCreationResponseLtaProtectionDetails[];
    mifidTaxId?: string;
    mobileNumber?: string;
    mpaaTriggered?: boolean;
    mpaaTriggeredDate?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    nationality: string;
    officeNumber?: string;
    referenceVersion?: number;
    retirementAge?: number;
    status?: CreateInvestorRootTypeForInvestorCreationResponseStatusEnum;
    taxId: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    taxResidence?: CreateInvestorRootTypeForInvestorCreationResponseTaxResidenceEnum;
    taxResidencyCompliant: boolean;
    title?: string;
    updatedAt?: Date;
}
export declare class CreateInvestorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Resource created
     */
    rootTypeForInvestorCreationResponse?: CreateInvestorRootTypeForInvestorCreationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createInvestor400ApplicationJSONObject?: CreateInvestor400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createInvestor401ApplicationJSONObject?: CreateInvestor401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createInvestor403ApplicationJSONObject?: CreateInvestor403ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createInvestor429ApplicationJSONObject?: CreateInvestor429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createInvestor500ApplicationJSONObject?: CreateInvestor500ApplicationJSON;
}
