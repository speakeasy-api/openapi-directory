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
exports.Verification = exports.VerificationInput = exports.VerificationVerificationStatusEnum = exports.VerificationReasonEnum = exports.VerificationVerificationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var verificationaccount_1 = require("./verificationaccount");
var VerificationVerificationTypeEnum;
(function (VerificationVerificationTypeEnum) {
    VerificationVerificationTypeEnum["Matching"] = "MATCHING";
    VerificationVerificationTypeEnum["ChallengeDeposit"] = "CHALLENGE_DEPOSIT";
})(VerificationVerificationTypeEnum = exports.VerificationVerificationTypeEnum || (exports.VerificationVerificationTypeEnum = {}));
var VerificationReasonEnum;
(function (VerificationReasonEnum) {
    VerificationReasonEnum["DataNotAvailable"] = "DATA_NOT_AVAILABLE";
    VerificationReasonEnum["AccountHolderMismatch"] = "ACCOUNT_HOLDER_MISMATCH";
    VerificationReasonEnum["FullAccountNumberAndBankTransferCodeNotAvailable"] = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE";
    VerificationReasonEnum["FullAccountNumberNotAvailable"] = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE";
    VerificationReasonEnum["BankTransferCodeNotAvailable"] = "BANK_TRANSFER_CODE_NOT_AVAILABLE";
    VerificationReasonEnum["Expired"] = "EXPIRED";
    VerificationReasonEnum["DataMismatch"] = "DATA_MISMATCH";
    VerificationReasonEnum["InstructionGenerationError"] = "INSTRUCTION_GENERATION_ERROR";
})(VerificationReasonEnum = exports.VerificationReasonEnum || (exports.VerificationReasonEnum = {}));
var VerificationVerificationStatusEnum;
(function (VerificationVerificationStatusEnum) {
    VerificationVerificationStatusEnum["Initiated"] = "INITIATED";
    VerificationVerificationStatusEnum["Deposited"] = "DEPOSITED";
    VerificationVerificationStatusEnum["Success"] = "SUCCESS";
    VerificationVerificationStatusEnum["Failed"] = "FAILED";
})(VerificationVerificationStatusEnum = exports.VerificationVerificationStatusEnum || (exports.VerificationVerificationStatusEnum = {}));
var VerificationInput = /** @class */ (function (_super) {
    __extends(VerificationInput, _super);
    function VerificationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", verificationaccount_1.VerificationAccount)
    ], VerificationInput.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], VerificationInput.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], VerificationInput.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationType" }),
        __metadata("design:type", String)
    ], VerificationInput.prototype, "verificationType", void 0);
    return VerificationInput;
}(utils_1.SpeakeasyBase));
exports.VerificationInput = VerificationInput;
var Verification = /** @class */ (function (_super) {
    __extends(Verification, _super);
    function Verification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", verificationaccount_1.VerificationAccount)
    ], Verification.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Verification.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], Verification.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Verification.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationDate" }),
        __metadata("design:type", String)
    ], Verification.prototype, "verificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationId" }),
        __metadata("design:type", Number)
    ], Verification.prototype, "verificationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationStatus" }),
        __metadata("design:type", String)
    ], Verification.prototype, "verificationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationType" }),
        __metadata("design:type", String)
    ], Verification.prototype, "verificationType", void 0);
    return Verification;
}(utils_1.SpeakeasyBase));
exports.Verification = Verification;
