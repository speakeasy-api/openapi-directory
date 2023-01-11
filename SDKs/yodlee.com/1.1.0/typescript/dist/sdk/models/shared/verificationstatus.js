"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationStatus = exports.VerificationStatusVerificationTypeEnum = exports.VerificationStatusVerificationStatusEnum = exports.VerificationStatusReasonEnum = void 0;
var utils_1 = require("../../../internal/utils");
var verificationaccount_1 = require("./verificationaccount");
var VerificationStatusReasonEnum;
(function (VerificationStatusReasonEnum) {
    VerificationStatusReasonEnum["DataNotAvailable"] = "DATA_NOT_AVAILABLE";
    VerificationStatusReasonEnum["AccountHolderMismatch"] = "ACCOUNT_HOLDER_MISMATCH";
    VerificationStatusReasonEnum["FullAccountNumberAndBankTransferCodeNotAvailable"] = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE";
    VerificationStatusReasonEnum["FullAccountNumberNotAvailable"] = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE";
    VerificationStatusReasonEnum["BankTransferCodeNotAvailable"] = "BANK_TRANSFER_CODE_NOT_AVAILABLE";
    VerificationStatusReasonEnum["Expired"] = "EXPIRED";
    VerificationStatusReasonEnum["DataMismatch"] = "DATA_MISMATCH";
    VerificationStatusReasonEnum["InstructionGenerationError"] = "INSTRUCTION_GENERATION_ERROR";
})(VerificationStatusReasonEnum = exports.VerificationStatusReasonEnum || (exports.VerificationStatusReasonEnum = {}));
var VerificationStatusVerificationStatusEnum;
(function (VerificationStatusVerificationStatusEnum) {
    VerificationStatusVerificationStatusEnum["Initiated"] = "INITIATED";
    VerificationStatusVerificationStatusEnum["Deposited"] = "DEPOSITED";
    VerificationStatusVerificationStatusEnum["Success"] = "SUCCESS";
    VerificationStatusVerificationStatusEnum["Failed"] = "FAILED";
})(VerificationStatusVerificationStatusEnum = exports.VerificationStatusVerificationStatusEnum || (exports.VerificationStatusVerificationStatusEnum = {}));
var VerificationStatusVerificationTypeEnum;
(function (VerificationStatusVerificationTypeEnum) {
    VerificationStatusVerificationTypeEnum["Matching"] = "MATCHING";
    VerificationStatusVerificationTypeEnum["ChallengeDeposit"] = "CHALLENGE_DEPOSIT";
})(VerificationStatusVerificationTypeEnum = exports.VerificationStatusVerificationTypeEnum || (exports.VerificationStatusVerificationTypeEnum = {}));
var VerificationStatus = /** @class */ (function (_super) {
    __extends(VerificationStatus, _super);
    function VerificationStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", verificationaccount_1.VerificationAccount)
    ], VerificationStatus.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], VerificationStatus.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], VerificationStatus.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], VerificationStatus.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingAttempts" }),
        __metadata("design:type", Number)
    ], VerificationStatus.prototype, "remainingAttempts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationDate" }),
        __metadata("design:type", String)
    ], VerificationStatus.prototype, "verificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationId" }),
        __metadata("design:type", Number)
    ], VerificationStatus.prototype, "verificationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationStatus" }),
        __metadata("design:type", String)
    ], VerificationStatus.prototype, "verificationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationType" }),
        __metadata("design:type", String)
    ], VerificationStatus.prototype, "verificationType", void 0);
    return VerificationStatus;
}(utils_1.SpeakeasyBase));
exports.VerificationStatus = VerificationStatus;
