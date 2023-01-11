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
exports.UpdateAccountInfo = exports.UpdateAccountInfoFrequencyEnum = exports.UpdateAccountInfoContainerEnum = exports.UpdateAccountInfoAccountStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountaddress_1 = require("./accountaddress");
var money_1 = require("./money");
var UpdateAccountInfoAccountStatusEnum;
(function (UpdateAccountInfoAccountStatusEnum) {
    UpdateAccountInfoAccountStatusEnum["Active"] = "ACTIVE";
    UpdateAccountInfoAccountStatusEnum["Inactive"] = "INACTIVE";
    UpdateAccountInfoAccountStatusEnum["ToBeClosed"] = "TO_BE_CLOSED";
    UpdateAccountInfoAccountStatusEnum["Closed"] = "CLOSED";
    UpdateAccountInfoAccountStatusEnum["Deleted"] = "DELETED";
})(UpdateAccountInfoAccountStatusEnum = exports.UpdateAccountInfoAccountStatusEnum || (exports.UpdateAccountInfoAccountStatusEnum = {}));
var UpdateAccountInfoContainerEnum;
(function (UpdateAccountInfoContainerEnum) {
    UpdateAccountInfoContainerEnum["Bank"] = "bank";
    UpdateAccountInfoContainerEnum["CreditCard"] = "creditCard";
    UpdateAccountInfoContainerEnum["Investment"] = "investment";
    UpdateAccountInfoContainerEnum["Insurance"] = "insurance";
    UpdateAccountInfoContainerEnum["Loan"] = "loan";
    UpdateAccountInfoContainerEnum["Reward"] = "reward";
    UpdateAccountInfoContainerEnum["RealEstate"] = "realEstate";
    UpdateAccountInfoContainerEnum["OtherAssets"] = "otherAssets";
    UpdateAccountInfoContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(UpdateAccountInfoContainerEnum = exports.UpdateAccountInfoContainerEnum || (exports.UpdateAccountInfoContainerEnum = {}));
var UpdateAccountInfoFrequencyEnum;
(function (UpdateAccountInfoFrequencyEnum) {
    UpdateAccountInfoFrequencyEnum["Daily"] = "DAILY";
    UpdateAccountInfoFrequencyEnum["OneTime"] = "ONE_TIME";
    UpdateAccountInfoFrequencyEnum["Weekly"] = "WEEKLY";
    UpdateAccountInfoFrequencyEnum["Every2Weeks"] = "EVERY_2_WEEKS";
    UpdateAccountInfoFrequencyEnum["SemiMonthly"] = "SEMI_MONTHLY";
    UpdateAccountInfoFrequencyEnum["Monthly"] = "MONTHLY";
    UpdateAccountInfoFrequencyEnum["Quarterly"] = "QUARTERLY";
    UpdateAccountInfoFrequencyEnum["SemiAnnually"] = "SEMI_ANNUALLY";
    UpdateAccountInfoFrequencyEnum["Annually"] = "ANNUALLY";
    UpdateAccountInfoFrequencyEnum["Every2Months"] = "EVERY_2_MONTHS";
    UpdateAccountInfoFrequencyEnum["Ebill"] = "EBILL";
    UpdateAccountInfoFrequencyEnum["FirstDayMonthly"] = "FIRST_DAY_MONTHLY";
    UpdateAccountInfoFrequencyEnum["LastDayMonthly"] = "LAST_DAY_MONTHLY";
    UpdateAccountInfoFrequencyEnum["Every4Weeks"] = "EVERY_4_WEEKS";
    UpdateAccountInfoFrequencyEnum["Unknown"] = "UNKNOWN";
    UpdateAccountInfoFrequencyEnum["Other"] = "OTHER";
})(UpdateAccountInfoFrequencyEnum = exports.UpdateAccountInfoFrequencyEnum || (exports.UpdateAccountInfoFrequencyEnum = {}));
var UpdateAccountInfo = /** @class */ (function (_super) {
    __extends(UpdateAccountInfo, _super);
    function UpdateAccountInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountStatus" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "accountStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", accountaddress_1.AccountAddress)
    ], UpdateAccountInfo.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountDue" }),
        __metadata("design:type", money_1.Money)
    ], UpdateAccountInfo.prototype, "amountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", money_1.Money)
    ], UpdateAccountInfo.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeValue" }),
        __metadata("design:type", money_1.Money)
    ], UpdateAccountInfo.prototype, "homeValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeInNetWorth" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "includeInNetWorth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isEbillEnrolled" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "isEbillEnrolled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "memo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], UpdateAccountInfo.prototype, "nickname", void 0);
    return UpdateAccountInfo;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountInfo = UpdateAccountInfo;
